/**
 * 数的拆解，将数拆分成符号和数值，若没有符号，则符号为 ''
 * @param n 
 * @returns [符号，数值]
 */
function disassemble(n: string): [Sign, string] {
  const num = String(n);
  const res = num.match(/^[-+]/);
  const sign = res ? (res[0] as Sign) : '';
  return [
    sign,
    sign ? num.slice(1) : num
  ];
}

/**
 * integer left shift
 * @param n operand
 * @param places
 */
function intLeftShift(n: string, places: number): string {
  const [sign, numeric] = disassemble(n);
  let dotIndex = numeric.indexOf('.');
  if (dotIndex < 0) {
    dotIndex = numeric.length;
  }
  let integer = dotIndex < 0 ? numeric : numeric.slice(0, dotIndex);
  let decimal = dotIndex < 0 ? '' : numeric.slice(dotIndex + 1);

  let pad = '';
  for (let i = 0; i < places; i++) {
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
 * integer right shift
 * @param n operand
 * @param places 左移的位数
 */
function intRightShift(n: string, places: number): string {
  const [sign, numeric] = disassemble(n);
  let dotIndex = numeric.indexOf('.');
  if (dotIndex < 0) {
    dotIndex = numeric.length;
  }
  let integer = dotIndex < 0 ? numeric : numeric.slice(0, dotIndex);
  let decimal = dotIndex < 0 ? '' : numeric.slice(dotIndex + 1);
  
  dotIndex = 0;
  let pad = '';
  for (let i = 0; i < places; i++) {
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
 * expand decimal exponential notation
 * @param n 
 * @returns 
 */
function normalize(n: number | string): string {
  const num = String(n);
  const expression = num.match(/e([-+])?(\d+)$/);
  if (!expression) return num;
  const sign = expression[1];
  const exponent = expression[2];
  const numeric = num.slice(0, expression.index);
  if (sign === '-') {
    return intLeftShift(numeric, Number(exponent));
  }
  return intRightShift(numeric, Number(exponent));
}

/**
 * parse decimal
 * @param n
 * @returns sign, integer, fraction
 */
function parse(n: number | string): Meta {
  // ('1.3123e12').match(/^([+-])?(\d+)(?:\.(\d+))?(?:e([-+])?(\d+))$/)
  const res = normalize(n).match(/^([+-])?(\d+)(?:\.(\d+))?$/)!;
  const sign = res[1] || '';
  const integer = res[2];
  const fraction = res[3] || '';
  return {
    sign: sign as Sign,
    integer,
    fraction
  };
}

type Sign = '-'|'+'|'';

type Meta = {
  sign: Sign,
  integer: string,
  fraction: string
}

class Decimal {
  meta: Meta;
  constructor(value: string|number) {
    this.meta = parse(value);
  }
}