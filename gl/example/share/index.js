export * from './program.js';
export * from './f.js'
export { default as matrixes } from './matrix.js';
export { default as cubeData } from './cube.js';

export function degToRad(deg) {
    return Math.PI * deg / 180;
}