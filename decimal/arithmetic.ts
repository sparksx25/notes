// addition
// subtraction
// multiplication
// division

/**
 examples:
  1.1e111111111111 =>   Infinity
  1e1 => 10
  1e-5 => 0.00001
  1e-111111111111111 => 0
  1_0_0_1 => 1001
*/

type Sign = '-'|'+'|'';
type ParseModel = {sign: Sign, integer: string, decimal: string};

/**
 * 数的拆解，将数拆分成符号和数值，若没有符号，则符号为 ''
 * @param n 
 * @returns 
 */
function disassemble(n: string | number): [Sign, string] {
  const num = String(n);
  const res = num.match(/^[-+]/);
  const sign = res ? (res[0] as Sign) : '';
  return [
    sign,
    sign ? num.slice(1) : num
  ];
}

/**
 * 十进制左移
 * @param n 操作数 n 只能是常规数字或数字字符
 * @param pow 左移的位数, pow 值需要是安全的
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
    const str = integer;
    integer = str.slice(0, dotIndex);
    decimal = str.slice(dotIndex) + decimal;
  }
  integer = integer ? integer : '0';
  return [sign, integer, decimal ? '.' : '', decimal].join('');
}

/**
 * 十进制右移
 * @param n 
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
    const str = decimal;
    integer = integer + str.slice(0, dotIndex);
    decimal = str.slice(dotIndex) + decimal;
  }
  integer = integer ? integer : '0';
  return [sign, integer, decimal ? '.' : '', decimal].join('');
}


/**
 * 将科学计数法用字符串展开表示
 * @param n 
 * @returns 
 */
function nomalize(n: number | string): string {
  const num = String(n);
  const expression = num.match(/e([-+])?(\d+)$/);
  if (!expression) return num;
  const sign = expression[1] || '+';
  const pow = expression[2];
  const data = num.slice(0, expression.index);
  if (sign === '+') {
    return rightShift(data, Number(pow));
  }
  return leftShift(data, Number(pow));
}

/**
 * 数字拆解
 * @param n
 * @returns 正负号, 整数部分, 小数部分
 */
function parse(n: number | string): ParseModel {
  const res = nomalize(n).match(/^([+-])?(\d+)(\.\d+)?$/)!;
  const sign = res[1] || '+';
  const integer = res[2];
  const decimal = res[3] ? res[3].substring(1) : '0'
  return {
    sign: sign as Sign,
    integer,
    decimal
  };
}

/**
 * 整数加法
 * @param a 
 * @param b
 * @returns string 
 */
function intSum(a: string, b: string): string {
  return ''
}

function add(a: string, b: string): string {
  const modelA = parse(nomalize(a));
  const modelB = parse(nomalize(b));
  if (modelA.sign === modelB.sign) {
  }
  return '';
}

function subtract() {}
function multiply() {}
function divide() {}


// console.log(disassemble(-12321321123213123213213))
// console.log(nomalize('-1.313123e1111'))
// console.log(leftShift('-1', 3))
console.log(nomalize('1e-3'))