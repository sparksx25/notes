/* 
addition
subtraction
multiplication
division

add
subtract
multiply
divide

相等(EQ)、不等(NE)、小于(LT)、大于(GT)、小于或等于(LE)、GE
equal: 相等（指数量上的相等）
not equal: 不相等
less than: 小于
greater than: 大于
less than or equal: 小于或等于
greater than or equal: 大于或等于

difference: 差额
positive: 正的，整数
negative: 负的，负数
minuend: 被减数
subtrahend: 减数
cardinal: 基数
base: （数字进位制中的）基数
sign: 正负号
fraction: 小数部分(.23)
places: 小数点位数
digit: （零到九中的任一）数字
carry: （加法）进位
borrow: （演算减法时）借（位）
count: 计数，数数，点数目
number: 编号，数字
numeric： 数，数字
exponential notation: 指数表示法
exponent： 指数
Mantissa/Significand: 尾数
notation： 标记法，注释
power: 幂，乘方，指数
modulus: 模
binary：二进制 
octonary： 八进制
decimal: 十进制，小数(1.03)
hexadecimal： 十六进制


+0, +Infinity, -Infinity, -0, 
examples:
 1.1e111111111111 =>   Infinity
 1e1 => 10
 1e-5 => 0.00001
 1e-111111111111111 => 0
 1_0_0_1 => 1001


 1. 去除小数部分多余的 0
 2. 去除前置符号 '+'
*/

type Decimal = number | string;
type Sign = '-'|'+'|'';
type Meta = {sign: Sign, integer: string, decimal: string};

/**
 * 数的拆解，将数拆分成符号和数值，若没有符号，则符号为 ''
 * @param n 
 * @returns [符号，数值]
 */
function disassemble(n: Decimal): [Sign, string] {
  const num = String(n);
  const res = num.match(/^[-+]/);
  const sign = res ? (res[0] as Sign) : '';
  return [
    sign,
    sign ? num.slice(1) : num
  ];
}

/**
 * 将十进制指数计数法用字符串展开表示
 * @param n 
 * @returns 
 */
function nomalize(n: Decimal): string {
  const num = String(n);
  const expression = num.match(/e([-+])?(\d+)$/);
  if (!expression) return num;
  const sign = expression[1];
  const exponent = expression[2];
  const numeric = num.slice(0, expression.index);
  if (sign === '-') {
    return leftShift(numeric, Number(exponent));
  }
  return rightShift(numeric, Number(exponent));
}

/**
 * 数字拆解
 * @param n
 * @returns 正负号, 整数部分, 小数部分
 */
function parse(n: Decimal): Meta {
  const res = nomalize(n).match(/^([+-])?(\d+)(?:\.(\d+))?$/)!;
  const sign = res[1] || '+';
  const integer = res[2];
  const decimal = res[3] || '0'
  return {
    sign: sign as Sign,
    integer,
    decimal
  };
}

/**
 * 小数部分位数填充
 * @param n 
 * @param places 小数位数
 * @returns 
 */
function padFraction(n: string, places:number) {
  return n.padEnd(places, '0');
}

/**
 * 整数部分位数填充
 * @param n 
 * @param places 
 * @returns 
 */
function padIntegre(n: string, places:number) {
  return n.padStart(places, '0');
}

/**
 * 小数点部分大于等于比较 n >= m
 * @param n 
 * @param m 
 */
function fractionGe(n: string, m: string):boolean {
  let i = 0;
  while(n[i] || m[i]) {
    const a = Number(n[i]) || 0;
    const b = Number(m[i]) || 0;
    if (a < b) return false;
    i++;
  }
  return true;
}

/**
 * 非零整数大于比较 n > m
 * @param n 
 * @param m 
 */
function uintGt(n: string, m: string):boolean {
  if (n === m) return false;
  if (n.length > m.length) return true;
  if (n.length < m.length) return false;
  // TODO:
  let i = 0;
  while(n[i] || m[i]) {
    const a = Number(n[i]) || 0;
    const b = Number(m[i]) || 0;
    if (a < b) return false;
    i++;
  }
  return true;
}
/**
 * 非零整数大于等于比较 n >= m
 * @param n 
 * @param m 
 */
function uintGe(n: string, m: string):boolean {
  if (n.length > m.length) return true;
  if (n.length < m.length) return false;
  let i = 0;
  while(n[i] || m[i]) {
    const a = Number(n[i]) || 0;
    const b = Number(m[i]) || 0;
    if (a < b) return false;
    i++;
  }
  return true;
}

/**
 * 非零整数加法
 * @param a 
 * @param b
 * @returns string 
 */
function uintAdd(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;

  let sum = '';
  let carry = 0;
  while (i >= 0 || j >= 0 || carry) {
    const m = Number(a[i]) || 0;
    const n = Number(b[j]) || 0;
    const s = m + n + carry;
    carry = s > 9 ? 1 : 0;
    sum = String(s % 10) + sum;
    i -= 1;
    j -= 1;
  }
  return sum;
}

/**
 * 非零整数减法
 * @param minuend 被减数
 * @param subtrahend 减数
 */
function uintSub(minuend: string, subtrahend: string): string {
  let greater = minuend;
  let smaller = subtrahend;
  let sign = '';
  if(uintGe(subtrahend, minuend)) {
    greater = subtrahend;
    smaller = minuend;
    sign = '-';
  }
  let g = greater.length - 1;
  let s = smaller.length - 1;
  let brorow = false;
  let difference  = '';
  while (g >= 0 || s >= 0 || brorow) {
    let a = Number(greater[g]);
    const b = Number(smaller[s]);

    a = brorow ? a - 1 : a;
    if (a < b) {
      brorow = true;
      a += 10;
    } else {
      brorow = false;
    }
    difference = String(a - b) + difference;
    g -= 1;
    s -= 1;
  }
  return sign + difference;
}

/**
 * 十进制左移，缩小 pow 倍
 * @param n 操作数 n 不支持十进制指数计数法
 * @param pow 左移的位数
 * @returns 返回左移之后的数字
 */
function leftShift(n: string, pow: number): string {
  const [sign, numeric] = disassemble(n);
  let dotIndex = numeric.indexOf('.');
  if (dotIndex < 0) {
    dotIndex = numeric.length;
  }
  let integer = dotIndex < 0 ? numeric : numeric.slice(0, dotIndex);
  let decimal = dotIndex < 0 ? '' : numeric.slice(dotIndex + 1);

  let pad = '';
  for (let i = 0; i < pow; i++) {
    if (i < integer.length) {
      dotIndex -= 1;
    } else {
      pad += '0';
    }
  }
  if (pad) {
    decimal = pad + integer + decimal;
    integer = '';
  } else {
    decimal = integer.slice(dotIndex) + decimal;
    integer = integer.slice(0, dotIndex);
  }
  integer = integer ? integer : '0';
  return [sign, integer, decimal ? '.' : '', decimal].join('');
}

/**
 * 十进制右移，放大 pow 倍
 * @param n 操作数 n 不支持十进制指数计数法
 * @param pow 左移的位数
 * @returns 返回右移之后的数字
 */
function rightShift(n: string, pow: number): string {
  const [sign, numeric] = disassemble(n);
  let dotIndex = numeric.indexOf('.');
  if (dotIndex < 0) {
    dotIndex = numeric.length;
  }
  let integer = dotIndex < 0 ? numeric : numeric.slice(0, dotIndex);
  let decimal = dotIndex < 0 ? '' : numeric.slice(dotIndex + 1);
  
  dotIndex = 0;
  let pad = '';
  for (let i = 0; i < pow; i++) {
    if (i < decimal.length) {
      dotIndex += 1;
    } else {
      pad += '0';
    }
  }
  if (pad) {
    integer = integer + decimal + pad;
    decimal = '';
  } else {
    integer = integer + decimal.slice(0, dotIndex);
    decimal = decimal.slice(dotIndex);
  }
  return [sign, integer, decimal ? '.' : '', decimal].join('');
}

/**
 * 两数相加
 * @param a 
 * @param b 
 * @returns 
 */
function add(a: string, b: string): string {
  const metaA = parse(nomalize(a));
  const metaB = parse(nomalize(b));

  const places = Math.max(1, metaA.decimal.length, metaB.decimal.length);
  metaA.decimal = padFraction(metaA.decimal, places);
  metaB.decimal = padFraction(metaB.decimal, places);

  if (metaA.sign === metaB.sign) {
    const decimalSum = uintAdd(metaA.decimal, metaB.decimal);
    const carry = decimalSum.length > places ? 1 : 0;
    const decimal = decimalSum.length > places ? decimalSum.slice(1) : decimalSum;
    const integer = [metaA.integer, metaB.integer, String(carry)].reduce((s, n) => uintAdd(s, n), '0')
    const sign = metaA.sign === '-' ? '-' : '';
    return [sign, integer, decimal].join('');
  }
  let sign = '-';
  let greater = metaB;
  let smaller = metaA;
  // TODO: 判断条件错误
  if ((uintGe(metaA.integer, metaB.integer) && uintGe(metaA.decimal, metaB.decimal))) {
    sign = '';
    greater = metaA;
    smaller = metaB;
  }
  const difference = uintSub(greater.decimal, smaller.decimal);

}

function sub() {}
function mul() {}
function div() {}

/**
 * 数值等于判断
 * @param n 
 * @param m 
 * @returns 
 */
function eq(n: Decimal, m: Decimal):boolean {
  const modelN = parse(n);
  const modelM = parse(m);
  if (
    modelN.sign !== modelM.sign ||
    modelN.integer !== modelM.integer
  ) return false;
  
  let index = 0;
  while(modelN.decimal[index] || modelM.decimal[index]) {
    const digitN = modelN.decimal[index] || '0';
    const digitM = modelM.decimal[index] || '0';
    if (digitN !== digitM) return false;
    index += 1;
  }
  return true;
}

/**
 * 数值大于等于判断 n >= m
 * @param n 
 * @param m 
 * @returns 
 */
function ge(n: string, m: string) {

}

// console.log(disassemble(-12321321123213123213213))
// console.log(nomalize('-1.313123e1111'))
// console.log(leftShift('-1', 3))
// console.log(nomalize('1e-3'))
console.log(uintAdd('1', '0'))