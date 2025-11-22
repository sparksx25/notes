/**
 * value -> label
 * 生成枚举值映射文案字典
 * @param options
 * @param labelKey
 * @param valueKey
 * @returns
 */
export function generateLabelMap<T = any>(
  options: T[],
  labelKey: string = 'label',
  valueKey: string = 'value'
): Record<string, any> {
  return options.reduce((map, next) => {
    map[next[valueKey]] = next[labelKey];
    return map;
  }, {});
}

/**
 * 获取部分枚举值列表
 * @param dictKey
 * @param values
 * @param valueKey
 * @returns
 */
export function getPartialOptions<T = any>(
  options: T[],
  values: string[],
  valueKey: string = 'value'
): T[] {
  return options.filter((option) =>
    values.includes(option[valueKey])
  );
}
