import { createProgram, getContext } from "../share/index.js";

// 知识点
// viewport
const vertexShaderSource = `
    attribute vec3 position;
    attribute vec4 color;

    varying vec4 vColor;

    void main() {
        vColor = color;
        gl_Position = vec4(position, 1.0);
    }

`;
const fragmentShaderSource = `
    precision mediump float;

    varying vec4 vColor;

    void main() {
        gl_FragColor = vColor;
    }
`;

function main() {
    const gl = getContext('#canvas')
    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    gl.useProgram(program)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);


    const positions = [
        // triangle-1 red
         0.0, 0.5, 0.2,
        -0.5, 0.0, 0.2,
         0.8, 0.0, 0.2,

        // triangle-2 green
         0.0, 0.5, 0.8,
        -0.8, 0.0, 0.8,
         0.5, 0.0, 0.8,

        // // triangle-1 red
        //  0.0, 0.5, -0.5,
        // -0.5, 0.0, -0.5,
        //  0.5, 0.0, -0.5,

        // // triangle-2 green
        //  0.0, 0.5, -1.0,
        // -0.5, 0.0, -1.0,
        //  0.5, 0.0, -1.0,
    ];
    const colors = [
        255, 0, 0, 255,
        255, 0, 0, 255,
        255, 0, 0, 255,

        0, 255, 0, 255,
        0, 255, 0, 255,
        0, 255, 0, 255,
    ];


    const positionLocation = gl.getAttribLocation(program, 'position');
    const colorLocation = gl.getAttribLocation(program, 'color');


    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(colors), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(colorLocation);
    gl.vertexAttribPointer(colorLocation, 4, gl.UNSIGNED_BYTE, true, 0, 0);

    // 设置深度缓存的值小于等于1的坐标点都会绘制
    // gl.clearDepth(1.0);
    // gl.clear(gl.DEPTH_BUFFER_BIT);
    // gl.depthFunc(gl.LEQUAL);

    // 激活深度比较,
    gl.enable(gl.DEPTH_TEST);

    // 只绘制正面
    gl.enable(gl.CULL_FACE);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

}

main()