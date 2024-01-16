// 从不同的维度分类图
// 1. 根据顶点之间的连通性可分为连通图和非连通图
// 2. 根据边是否有方向可分为有向图与无向图
// 3. 根据边是否有权重可分为有权图和无权图

// 无向图的表示：邻接矩阵，邻接表

// 无向图-邻接矩阵
export class GraphAdjMat {
    vertices: string[] = []
    mat: number[][] = []

    search(vertex: string) {
        return this.vertices.findIndex(v => v === vertex)
    }

    has(vertex: string) {
        return this.search(vertex) > -1
    }

    addVertex(vertex: string) {
        if (this.has(vertex)) return false

        const row: number[] = new Array(this.vertices.length).fill(0, 0)
        this.mat.push(row)

        for (let i = 0; i < this.mat.length; i++) {
            this.mat[i].push(0)
        }

        this.vertices.push(vertex)
        return true
    }

    addEdge(vertex1: string, vertex2: string) {
        if (vertex1 === vertex2) {
            console.error('vertex1，vertex2不能相等')
            return false
        }
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        const v1Index = this.search(vertex1)
        const v2Index = this.search(vertex2)
        this.mat[v1Index][v2Index] = 1
        this.mat[v2Index][v1Index] = 1
        return true
    }

    removeEdge(vertex1: string, vertex2: string) {
        if (this.has(vertex1) && this.has(vertex2) === false) return

        const v1Index = this.search(vertex1)
        const v2Index = this.search(vertex2)
        this.mat[v1Index][v2Index] = 0
        this.mat[v2Index][v1Index] = 0
    }

    removeVertex(vertex: string) {
        const index = this.search(vertex)
        if (index < 0) return
        this.vertices.splice(index, 1)

        this.mat.splice(index, 1)
        for (let i = 0; i < this.mat.length; i++) {
            this.mat[i].splice(index, 1)
        }
    }

    getEdges() {
        const edges: string[][] = []
        for (let i = 0; i < this.mat.length; i++) {
            const row = this.mat[i]
            for (let j = i + 1; j < this.mat.length; j++) {
                if (row[j]) {
                    edges.push([this.vertices[i], this.vertices[j]])
                }
            }
        }
        return edges
    }
}

// 无向图-邻接表
export class GraphAdjTable {
    table: Map<string, Set<string>> = new Map()


    has(vertex: string) {
        return this.table.has(vertex)
    }

    addVertex(vertex: string) {
        if (this.has(vertex)) return
        this.table.set(vertex, new Set<string>())
    }

    addEdge(vertex1: string, vertex2: string) {
        if (vertex1 === vertex2) {
            console.error('vertex1，vertex2不能相等')
            return false
        }
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.table.get(vertex1)?.add(vertex2)
        this.table.get(vertex2)?.add(vertex1)
        return true
    }

    removeEdge(vertex1: string, vertex2: string) {
        if (this.has(vertex1) && this.has(vertex2) === false) return
        this.table.get(vertex1)?.delete(vertex2)
        this.table.get(vertex2)?.delete(vertex1)
    }

    removeVertex(vertex: string) {
        if (this.has(vertex) === false) return
        this.table.delete(vertex)
        this.table.forEach((set) => {
            set.delete(vertex)
        })
    }

    getEdges() {
        const edges: string[][] = []
        const keys = [...this.table.keys()]
        for (let i = 0; i < keys.length; i++) {
            for (let j = i + 1; j < keys.length; j++) {
                const set = this.table.get(keys[j])!
                if (set.has(keys[i])) {
                    edges.push([keys[i], keys[j]])
                }
            }
        }
        return edges
    }

    forEach(callback: (vertex: string) => void) {
        
    }
}

function testGraphAdjMat() {
    const graphMat = new GraphAdjMat()
    graphMat.addEdge('a', 'b')
    graphMat.addEdge('a', 'c')
    graphMat.addEdge('b', 'c')
    console.log(graphMat.mat)
    // graphMat.removeVertex('b')
    console.log(graphMat.getEdges())
}

function testGraphAdjTable() {
    const graphMat = new GraphAdjTable()
    graphMat.addEdge('a', 'b')
    graphMat.addEdge('a', 'c')
    graphMat.addEdge('b', 'c')
    console.log(graphMat.table)
    graphMat.removeVertex('b')
    console.log(graphMat.getEdges())
}

// 广度优先遍历
function graphBFS() {
    
}

// 深度优先遍历
function graphDFS() {

}