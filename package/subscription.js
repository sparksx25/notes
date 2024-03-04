/**
 * @typedef {(data: any) => void} Subscriber
 *
*/

export class Subscription {
  /**
   * @param {string|symbol} [defKey]
  */
  constructor(defKey) {
    /** @type {string|symbol} */
    this.builtInKey = defKey || Symbol('built-in Key')

    /** @type {Object<string, Subscriber[]>} */
    this.subscribers = {}
  }

  /**
   * @description 订阅
   * @param {function} callback
   * @param {string} [eventName]
  */
  subscribe(callback, eventName) {
    const key = eventName || this.builtInKey
    const subscribers = this.subscribers[key] = this.subscribers[key] || []

    subscribers.push(callback)
  }

  /**
   * @description 取消订阅
   * @param {function} callback
   * @param {string} [eventName]
  */
  unsubscribe(callback, eventName) {
    const key = eventName || this.builtInKey
    const subscribers = this.subscribers[key] = this.subscribers[key] || []

    subscribers.filter(ele => ele !== callback)
  }

  /**
   * @description 通知某种类型的事件
   * @param {any} data
   * @param {string} [eventName]
  */
  notify(data, eventName) {
    const key = eventName || this.builtInKey
    const subscribers = this.subscribers[key] = this.subscribers[key] || []

    for (let i = 0; i < subscribers.length; i++) {
      const callback = subscribers[i]
      callback(data)
    }
  }
}
