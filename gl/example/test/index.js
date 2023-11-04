import { 
    createLetterF,
    createProgram,
    degToRad,
    getContext,
    matrixes
} from '../share/index.js';

class F {
    vertextShaderSource = `
        attribute vec3 a_position;
        attribute vec4 a_color;

        uniform mat4 u_projection;

        varying vec4 v_color;

        void main() {
            v_color = a_color;
            gl_Position = u_projection * vec4(a_position, 1.0);
        }
    `

    fragmentShaderSource = `
        precision mediump float;

        varying vec4 v_color;
        
        void main() {
            gl_FragColor = v_color;
        }
    `

    constructor() {
        this.gl = getContext('#canvas');
        this.program = createProgram(this.gl, this.vertextShaderSource, this.fragmentShaderSource);
        this.setup();
    }

    setup() {
        const gl = this.gl;
        const program = this.program;

        gl.enable(gl.CULL_FACE);
        gl.enable(gl.DEPTH_TEST);

        this.rotation = {
            x: 0,
            Y: 0,
            z: 0
        };
        this.locations = {
            position: gl.getAttribLocation(program, 'a_position'),
            color: gl.getAttribLocation(program, 'a_color'),
            projection: gl.getUniformLocation(program, 'u_projection')
        };
        this.buffers = {
            position: gl.createBuffer(),
            color: gl.createBuffer(),
        };

        this.letterData = createLetterF();

        this.animationId = null;

        document.addEventListener('click', () => {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId)
                this.animationId = null;
            } else {
                this.animation();
            }
        });
    }

    setGeometry() {
        const gl = this.gl;
        const letterData = this.letterData;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(letterData.positions), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.locations.position);
        gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);
    }

    setColor() {
        const gl = this.gl;
        const letterData = this.letterData;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.color);
        gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(letterData.colors), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.locations.color);
        gl.vertexAttribPointer(this.locations.color, 3, gl.UNSIGNED_BYTE, true, 0, 0);
    }

    // 不使用投影：从裁剪空间的 z- 看向 z+
    useOriginalMatrix() {
        const gl = this.gl;

        const scale = 1 / 200;
        const mat = matrixes.multiplyArrayOfMatrices([
            matrixes.rotateXMatrix(degToRad(this.rotation.x)),
            matrixes.scaleMatrix(scale, scale, scale),
        ]);
        gl.uniformMatrix4fv(this.locations.projection, false, new Float32Array(mat));
    }

    // 正射投影:
    useOrthoGrapic() {
        const gl = this.gl;

        const mat = matrixes.multiplyArrayOfMatrices([
            matrixes.orthographicMatrix(0, gl.canvas.clientWidth, gl.canvas.height, 0, 40, -40),
            // matrixes.translateMatrix(240, 150, 0)
        ]);
        gl.uniformMatrix4fv(this.locations.projection, false, mat);

        // gl.cullFace(gl.FRONT)
        // gl.cullFace(gl.FRONT_AND_BACK)
        gl.disable(gl.CULL_FACE)
        // console.log(
        //     matrixes.multiplyPoint(
        //         matrixes.orthographicMatrix(0, gl.canvas.clientWidth, gl.canvas.height, 0, 300, 0),
        //         [0,  150, 300, 1]
        //     )
        // )
        console.log(
            matrixes.multiplyPoint(
                matrixes.orthographicMatrix(0, gl.canvas.clientWidth, gl.canvas.height, 0, 0, 100),
                // matrixes.projection(gl.canvas.clientWidth, gl.canvas.height, 400),
                [0,  150, 50, 1]
            )
        )
    }

    draw() {
        const gl = this.gl;
        gl.useProgram(this.program);

        this.setGeometry();
        this.setColor();

        this.useOrthoGrapic();

        gl.drawArrays(gl.TRIANGLES, 0, 16 * 2 * 3);
    }

    animation() {
        this.draw();
        this.rotation.x += 1;
        this.animationId = requestAnimationFrame(() => {
            this.animation();
        });
    }
}

const f = new F()
f.draw();




