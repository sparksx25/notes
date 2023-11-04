import { createProgram, getContext } from "../share/index.js";

// 知识点
// 1. drawElements, 根据顶点索引从顶点目录表中读取顶点坐标，此时顶点的顺序有目录表决定
const vertexShaderSource = `
    attribute vec2 position;

    void main() {
        gl_Position = vec4(position, 0, 1);
    }

`;
const fragmentShaderSource = `
    precision mediump float;
    uniform vec4 color;

    void main() {
        gl_FragColor = color;
    }
`;

function main() {
    const gl = getContext('#canvas')
    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    gl.useProgram(program)


    const position = [
        -0.5, 0.5,
        -0.5, -0.5,
        0.5, -0.5,
        0.5, 0.5,
    ]
    const positionLocation = gl.getAttribLocation(program, 'position');


    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    // vertex indices(顶点目录表)
    const indices = [
        0, 1, 2,  // (-0.5, 0.5), (-0,5, -0.5), (0.5, -0.5) => left triangle
        0, 2, 3, // (-0.5, 0.5), (0.5, -0.5), (0.5, 0.5) => right triangle
    ]
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW)

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const colorLocation = gl.getUniformLocation(program, 'color');
    gl.uniform4fv(colorLocation, [0, 1, 0, 1]);

    // 开启深度缓存，z坐标控制图元的层叠顺序
    gl.enable(gl.DEPTH_TEST);
    // 只绘制正面
    gl.enable(gl.CULL_FACE);

    // UNSIGNED_BYTE 对应 Uint8Array
    // 每三个顶点为一组绘制三角形 / 一共读取6个顶点 / 每个顶点数据的类型为 gl.UNSIGNED_BYTE / 从第零个开始读取
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
}

main()