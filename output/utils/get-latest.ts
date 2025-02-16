function getLatestValue(fn) {
  if (getLatestValue.requestId === undefined) {
    getLatestValue.requestId = 0;
  }
  getLatestValue.requestId++;
  const redId = getLatestValue.requestId;
  return new Promise((resolve, reject) => {
    fn()
      .then((res) => {
        if (redId === getLatestValue.requestId) {
          resolve(res);
        }
      })
      .catch((err) => {
        if (redId === getLatestValue.requestId) {
          reject(err);
        }
      });
  });
}