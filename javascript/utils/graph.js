/**
 * 角度转弧度
 * @param {number} deg 
 * @returns {number}
 */
function deg2rad(deg) {
  return deg / 180 * Math.PI;
}

/**
 * 计算两点间中点的坐标
 * @param {number} x 
 * @param {number} y 
 * @param {number} x2 
 * @param {number} y2 
 * @returns {[x:number, y:number]}
 */
function getMidCoord(x, y, x2, y2) {
  return [(x + x2) / 2, (y + y2) / 2];
}

/**
 * 在 canvas 坐标系中(x正半轴向右, y正半轴向下), x轴正半轴为 0 rad
 * 根据圆心坐标，半径，扇形角计算扇形终边终点的坐标。
 * @param {number} x 圆心横坐标 
 * @param {number} y 圆心众坐标
 * @param {number} r 半径
 * @param {number} angle 扇形角，单位为弧度
 * @returns {{x: number, y: number}} 终边终点坐标
 */
function getTerminalCoord(x, y, r, angle) {
  const posX = r * Math.cos(angle);
  const posY = r * Math.sin(angle);
  return [ x + posX, y + posY ]
}
