function maxArea(height: number[]): number {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        const h = Math.min(height[i], height[j])
        const area = (j - i) * h;
        max = max > area ? max : area;
      }
    }
    return max;
};