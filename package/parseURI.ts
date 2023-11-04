// http://10.10.10.206:18888/admin/user?source=1#fragment=h?id=2

class SearchParams {
    query: string[][] = []

    constructor(search: string) {
        const qIndex = search.indexOf('?')
        if (qIndex >= 0) {
            search = search.slice(qIndex + 1)
        }
        if (search) {
            search.split('&').forEach(equation => {
                const [key, value] = equation.split('=')
                if (key) {
                    this.append(key, value)
                }
            })
        }
    }

    get size() {
        return this.query.length
    }

    forEach(callback: (key: string, value: string) => void) {
        const query = this.query.slice()
        for (let i = 0; i < query.length; i++) {
            const item = query[i]
            callback(item[0], item[1])
        }
    }

    set(key: string, value: string) {
        for (let i = 0; i < this.query.length; i++) {
            const item = this.query[i]
            if (item[0] === key) {
               item[1] = value
               return
            }
        }
    }

    get(key: string) {
        for (let i = 0; i < this.query.length; i++) {
            const item = this.query[i]
            if (item[0] === key) {
               return item[1]
            }
        }
    }

    has(key: string) {
        for (let i = 0; i < this.query.length; i++) {
            const item = this.query[i]
            if (item[0] === key) {
               return true
            }
        }
    }

    append(key: string, value: string) {
        this.query.push([
            decodeURIComponent(key),
            decodeURIComponent(value),
        ])
    }

    delete(key: string) {
        for (let i = 0; i < this.query.length; i++) {
            const item = this.query[i]
            if (item[0] === key) {
                this.query.splice(i, 1)
                i--
            }
        }
    }

    keys() {
        return this.query.map(item => item[0])
    }

    toString() {
        if (this.query.length === 0) return ''
        const queryString = this.query.map(item => {
            return [decodeURIComponent(item[0]), decodeURIComponent(item[1])].join('=')
        }).join('&')

        return `?${queryString}`
    }
}

class URI {
    protocol = ''
    host = ''
    hostname = ''
    port = ''
    origin = ''
    pathname = ''
    search = ''
    hash = ''
    href = ''
    searchParams: SearchParams

    constructor(url: string) {
        let rest = url
        const hashIndex = rest.indexOf('#')
        if (hashIndex >= 0) {
            this.hash = rest.slice(hashIndex)
            rest = rest.slice(0, hashIndex)
        }
        const qIndex = rest.indexOf('?')
        if (qIndex >= 0) {
            this.search = rest.slice(qIndex)
            rest = rest.slice(0, qIndex)
        }
        const protocolIndex = rest.indexOf('//')
        if (protocolIndex >= 0) {
            this.protocol = rest.slice(0, protocolIndex)
            rest = rest.slice(protocolIndex + 2)
        }
        const slashIndex = rest.indexOf('/')
        if (slashIndex >= 0) {
            this.pathname = rest.slice(slashIndex)
            rest = rest.slice(0, slashIndex)
        }
        const colonIndex = rest.indexOf(':')
        if (colonIndex >= 0) {
            this.port = rest.slice(colonIndex + 1)
            rest = rest.slice(0, colonIndex)
        }
        this.href = url
        this.hostname = rest
        this.host = this.port ? `${this.hostname}:${this.port}` : this.hostname
        this.origin = (this.protocol && this.host) ?  `${this.protocol}//${this.host}` : ''
        this.searchParams = new SearchParams(this.search)
    }

    toString() {
        let url = ''
        if (this.origin) {
            const pathname = this.pathname || '/'
            url += this.origin + pathname
        } else {
            url = this.pathname
        }
        return [url, this.searchParams.toString(), this.hash].filter(Boolean).join('')
    }
}

// const url = `http://10.10.10.206:18888/admin/user?source=1#fragment=h?id=2`
// const url = `//10.10.10.206:18888/admin/user?source=1#fragment=h?id=2`
const url = `?source=1#fragment=h?id=2`
const instance = new URI(url)