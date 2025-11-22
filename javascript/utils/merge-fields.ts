type Key = string;
type Consist = Key | [Key, any];

/**
 * 根据另外数据源对象生成新对象
 * @param { object } target 目标对象
 * @param { object } source 数据源对象
 * @param {(Key | [Key, any])[]} consist 目标对象生成规则
 * @returns 目标对象
 */
export function mergeFields(target: object, source: object, consist: Consist[]) {
  for (let i = 0; i < consist.length; i++) {
    const item = consist[i];

    if (typeof item === 'string') {
      target[item] = source[item];
    } else if (Array.isArray(item) && item.length) {
      const key = item[0];
      target[key] = item[1];
    }
  }
  return target;
}
