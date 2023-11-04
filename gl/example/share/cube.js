export function getPositions() {
    // return [
    //     // z+: red
    //      1,  1, 1,
    //      1, -1, 1,
    //     -1, -1, 1,
    //     -1,  1, 1,

    //     // z-: green
    //     -1,  1, -1,
    //     -1, -1, -1,
    //      1, -1, -1,
    //      1,  1, -1,

    //     // x-: blue
    //     -1,  1,  1,
    //     -1, -1,  1,
    //     -1, -1, -1,
    //     -1,  1, -1,

    //     // x+: yellow
    //     1,  1,  -1,
    //     1, -1,  -1,
    //     1, -1,   1,
    //     1,  1,   1,

    //     // y+: purple
    //     -1, 1, 1,
    //     -1, 1, -1,
    //     1, 1, -1,
    //     1, 1, 1,

    //     // y-: cyan
    //     1, -1, 1,
    //     1, -1, -1,
    //     -1, -1, -1,
    //     -1, -1, 1,
    // ];
    return [
        // z+: red
         1,  1, 1,
         1, -1, 1,
        -1, -1, 1,
        -1,  1, 1,

        // z-: green
        -1,  1, -1,
        -1, -1, -1,
         1, -1, -1,
         1,  1, -1,

        // x-: blue
        -1,  1,  1,
        -1, -1,  1,
        -1, -1, -1,
        -1,  1, -1,

        // x+: yellow
        1,  1,  -1,
        1, -1,  -1,
        1, -1,   1,
        1,  1,   1,

        // y+: purple
        -1, 1, 1,
        -1, 1, -1,
        1, 1, -1,
        1, 1, 1,

        // y-: cyan
        1, -1, 1,
        1, -1, -1,
        -1, -1, -1,
        -1, -1, 1,
    ];
}

export function getColors() {
    // x 轴逆时针旋转 green -> cyan -> red -> purple 
    // y 轴逆时针旋转 green -> yellow -> red -> blue
    // z 轴逆时针旋转 green
    const colorsOfFaces = [
        // 正面 z+: red
        [1, 0, 0, 1],

        // 背面 z-: green
        [0, 1, 0, 1],

        // 左面 x-: blue
        [0, 0, 1, 1],

        // 右面面 x+: yellow
        [1, 1, 0, 1],

        // 上面 y+: purple
        [1, 0, 1, 1],

        // 底面 y-: cyan
        [0, 1, 1, 1],
    ];
    let colors = []
    for (let i = 0; i < colorsOfFaces.length; i++) {
        const color = colorsOfFaces[i]
        for (let j = 0; j < 4; j++) {
            colors = colors.concat(color)
        }
    }
    return colors;
}

export function getElements() {
    return [
        // 正面
        0, 1, 2,        2, 3, 0,
        // 背面
        4, 5, 6,        6, 7, 4,
        // 左面
        8, 9, 10,       10, 11, 8,
        // 右面
        12, 13, 14,     14, 15, 12,
        // 上面
        16, 17, 18,     18, 19, 16,
        // 底面
        20, 21, 22,     22, 23, 20
    ]
}


var positions = [
    // Front face
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,

    // Back face
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0, -1.0, -1.0,

    // Top face
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
     1.0,  1.0,  1.0,
     1.0,  1.0, -1.0,

    // Bottom face
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,

    // Right face
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
     1.0, -1.0,  1.0,

    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0,  1.0, -1.0
];

  
var elements = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23    // left
]
  

// export default {
//     positions: getPositions(),
//     colors: getColors(),
//     elements: getElements()
// }

export default {
    positions,
    elements,
    colors: getColors(),
}