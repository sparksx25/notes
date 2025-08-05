class FreshAction {
  id: number = 0;

  constructor() {
    this.id = 0;
  }

  exec(fn: (...params: any[]) => Promise<any>, ...params: any[]) {
    this.id++;
    let index = this.id;
    return new Promise((resolve, reject) => {
      fn(...params)
        .then((res) => {
          if (this.id === index) {
            resolve(res);
          }
        })
        .catch((err) => {
          if (this.id === index) {
            reject(err);
          }
        })
    })
  }
}