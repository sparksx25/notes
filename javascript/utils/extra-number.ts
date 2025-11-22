/**
 * 从字符串中提取一串非负数字符串，支持小数
 * @param text 输入字符串
 * @param places 小数位数，默认 0
 * @returns 提取到的非负数字符串
 */
function extractNonNegativeNumbers(text, places = 0) {
  let reg;
  if (places > 0) {
    reg = new RegExp(`(?<=0*)(0(?!0*\\d+)|[1-9]\\d*)(?:\\.\\d{0,${places}})?`);
  } else {
    reg = /(?<!\d+\.\d*)((?<=0*)0(?=[^\d])|[1-9]\d*)/;
  }
  const result = text.match(reg);
  return result ? result[0] : "";
}

function testDecimal() {
  console.log(extractNonNegativeNumbers("0011.d", 2) === "11.");
  console.log(extractNonNegativeNumbers("dds0011a.1222", 2) === "11");
  console.log(extractNonNegativeNumbers("000000.1asd", 2) === "0.1");
  console.log(extractNonNegativeNumbers("0000001.1", 2) === "1.1");
  console.log(extractNonNegativeNumbers("aaa.123", 2) === "123");
}

function testInt() {
  console.log(extractNonNegativeNumbers("0011.1") === "11");
  console.log(extractNonNegativeNumbers("dds0011a.1") === "11");
  console.log(extractNonNegativeNumbers("dds0011a.1222") === "11");
  console.log(extractNonNegativeNumbers("000000.1") === "0");
  console.log(extractNonNegativeNumbers("d1.1") === "1");
  console.log(extractNonNegativeNumbers("aaa.1") === "1");
}
