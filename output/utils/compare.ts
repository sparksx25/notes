
/**
 * 版本比较
 * @param version 当前版本
 * @param target 目标版本
 * @returns {-1|1|0} -1: 比目标版本低，0：版本相同，1：比目标版本高
 */
function compareVersion(version: string, target: string) {
  const fragments = version.split('.')
  const targetFragments = target.split('.')
  let index = 0
  while (fragments[index] || targetFragments[index]) {
    const a = Number(fragments[index]) || 0
    const b = Number(targetFragments[index]) || 0
    if (a < b) return -1
    else if (a > b) return 1
    else index += 1
  }
  return 0
}