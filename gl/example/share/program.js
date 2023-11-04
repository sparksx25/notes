/**
 * @description
 * @param {WebGLRenderingContext} gl
 * @param {number} type
 * @param {number} source
 * @return {Object}
*/
export function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (status === false) {
        const info = gl.getShaderInfoLog(shader);
        throw "Could not compile WebGL program. \n\n" + info;
    }
    return shader;
}



/**
 * @description
 * @param {WebGLRenderingContext} gl
 * @param {string} vertexShaderSource
 * @param {string} fragmentShaderSource
 * @return {Object}
*/
export function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    const status = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (status === false) {
        const info = gl.getProgramInfoLog(program);
        throw "Could not compile WebGL program. \n\n" + info;
    }

    return program;
}



/**
 * @description
 * @param {string | HTMLCanvasElement} canvas
 * @return {WebGLRenderingContext}
*/
export function getContext(canvas) {
    if (typeof canvas === 'string') {
        canvas = document.querySelector(canvas);
    }
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    const context = canvas.getContext('webgl');
    return context;
}