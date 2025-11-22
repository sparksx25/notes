function isObject(val) {
  return val && typeof val === 'object';
}

function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

function equal(target1, target2) {
  if (getType(target1) !== getType(target2)) return false;

  if (isObject(target1)) {
    const keys = [...new Set(Object.keys(target1).concat(Object.keys(target2)))];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const a = target1[key];
      const b = target2[key];
      if (!equal(a, b)) return false;
    }
    return true;
  } 
  return target1 === target2;
}