
function getLast(list: any[]) {
  return list[list.length - 1];
}

/**
 * @description 对象坐标点转数组
*/
function point2Coords(points) {
  points = Array.isArray(points) ? points : [point];
  return points.reduce((coords, point) => {
    coords.push(point.x, point.y);
    return coords;
  }, []);
}

/**
 * @description 优化线段坐标点，去除直线上的重复点
*/
function tersePolylinePoints(points: SVGPoint[]) {
  // y = kx + b(k != 0);
  function precis(n) {
    return Number(n.toFixed(0));
  }
  function createLinearEquation(a: SVGPoint, b: SVGPoint) {
    const x1 = precis(a.x), y1 = precis(a.y), x2 = precis(b.x), y2 = precis(b.y);
    return function isOnLine(point: SVGPoint) {
      const x = precis(point.x), y = precis(point.y);
      if (y1 === y2 && y === y1) return true;
      if (x1 === x2 && x === x1) return true;
      return (x - x1) / (x2 - x1) - (y - y1) / (y2 - y1) === 0;
    }
  }

  let isOnLine = null;
  const tersePoints = points.slice(0, 2);
  for (let i = 2; i < points.length; i++) {
    if (!isOnLine) {
      const [a, b] = tersePoints.slice(-2) as [SVGPoint, SVGPoint];
      isOnLine = createLinearEquation(a, b);
    }

    const point = points[i];
    const delta = Math.abs(isOnLine(point));
    if (isOnLine(point)) {
      tersePoints[tersePoints.length - 1] = point;
    } else {
      tersePoints.push(point);
      isOnLine = null;
    }
  }
  return tersePoints;
}

function joinPolylinePath(points: SVGPoint[]) {
  let path = [`M ${points[0].x} ${points[0].y}`];

  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    path.push(`L ${point.x} ${point.y}`);
  }
  return path.join(' ');
}

export class Animation {
  duration: number = 3000;
  update: (percentage: number) => void;
  lastTimeline: number|null = null;
  loop: boolean = true;
  rafId: number|null = null;

  constructor(update: (percentage: number) => void) {
    this.update = update;
  }

  frame() {
    this.rafId = requestAnimationFrame((timeline) => {
      if (this.lastTimeline === null) this.lastTimeline = timeline;

      const elapsed = timeline - this.lastTimeline;
      const percentage = Math.min(elapsed / this.duration, 1);
      this.update(percentage);

      if (elapsed >= this.duration) {
        this.lastTimeline = timeline;
        if (this.loop) {
          this.frame();
        } else {
          this.stop();
        }
      } else {
        this.frame();
      }
    });
  }

  start() {
    this.frame();
  }

  stop() {
    if (typeof this.rafId === 'number') {
      cancelAnimationFrame(this.rafId);
    }
  }

  resume() {
    this.lastTimeline = null;
    this.frame();
  }
}

type Selector = string | HTMLElement
export class FlowLine {
  container: HTMLElement;
  svg: SVGAElement;
  track: SVGPathElement;
  line: SVGPathElement;
  // 流动线条的颜色额
  lineLength = 40;
  // 轨道的长度
  trackLength = 0;

  constructor(svg: SVGAElement, containerId: Selector, trackId: Selector) {
    this.svg = svg;
    this.container = this.getElementById(containerId)!;
    this.track = this.getElementById(trackId) as any;
    this.trackLength = this.track.getTotalLength();
    this.line = document.createElementNS(svg.namespaceURI, 'path') as SVGPathElement;
    this.line.setAttribute('fill', 'none');
    this.line.setAttribute('stroke', '#fff');
    this.line.setAttribute('stroke-width', '2');
    this.container.appendChild(this.line);
  }

  getElementById(selector: string | HTMLElement) {
    if (typeof selector === 'string') return document.getElementById(selector);
    return selector;
  }

  update(percentage: number) {
    const progress = percentage * (this.trackLength + this.lineLength);
    let startLength = 0;
    if (progress > this.lineLength) {
      startLength = progress - this.lineLength;
    }

    const points: SVGPoint[] = [];
    for (let i = startLength; i <= progress; i++) {
      const point = this.track.getPointAtLength(i);
      points.push(point);
    }
    if (points.length > 1) {
      const tersePoints = tersePolylinePoints(points);
      // if (tersePoints.length > 3) {
      //   console.log('-----', tersePoints, this.line)
      // }
      const path = joinPolylinePath(tersePoints);
      this.line.setAttribute('d', path);
    }
  }
}

export class FlowGraph {
  lines: FlowLine[] = [];

  constructor(lines: FlowLine[]) {
    this.lines = lines;
  }

  update(percentage: number) {
    this.lines.forEach(line => {
      line.update(percentage);
    });
  }

  animate() {
    const animate = new Animation(this.update.bind(this));
    animate.duration = 3000;
    animate.start();
  }
}
