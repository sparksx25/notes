# react fiber
从 React 16 开始，采用了 Fiber 机制，替代了之前 **基于原生执行栈递归遍历 VDOM 的方案**，提高了页面渲染性能和用户体验。

## 引入 Fiber 的原因
如果一个页面足够复杂，形成的函数调用栈就会很深。每一次更新，执行栈需要一次性执行完成。如何 VDOM Diff 时间过长就会造成页面卡顿。


## 时间分片（Time Slicing）
就是把一个长任务给切割成无数个执行时间很短的任务


## 任务拆分
在 React Fiber 机制中，它会递归遍历 VDOM 这个大任务，并分成若干小任务，每个任务只负责一个节点的处理。
更新的时候，再通过时间分片，在一个时间片中执行一个或者多个任务。


## workInProgress tree, currentFiber
在 render 或者 setState 后，会构建一颗 Fiber 树，也就是 workInProgress tree，

这棵树在构建每一个节点（这个节点代表的是VNode还是DOM）的时候会收集当前节点的副作用，整棵树构建完成后，会形成一条完整的副作用链，
并在构建完成之后赋值给 currentFiber，作为下一次更新的比较对象。

在新一轮更新时 workInProgress tree 再重新构建，会同 currentFiber 的对应节点进行 Diff 比较，收集副作用。
同时也会复用和 currentFiber 对应的节点对象，减少新创建对象带来的开销。
也就是说无论是创建还是更新，挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中。

当没有下一个任务需要执行的时候，workInProgress tree 构建完成，开始进入提交阶段，完成真实 DOM 更新。


## workInProgress tree 构建过程
workInProgress tree 构建过程其实就是循环的执行任务和创建下一个任务，大致过程如下：
![更新流程图](https://mmbiz.qpic.cn/mmbiz_png/vzEib9IRhZD6ZU5xibviaQfbZWHjISISdYYVQyUNeJz0lhbAlPUTWQXFgy9ibeFuJtZVIobLly9g8YlphvLGFMta9Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)


挂起：   
  当第一个小任务完成后，先判断这一帧是否还有空闲时间，没有就挂起下一个任务的执行，记住当前挂起的节点，让出控制权给浏览器执行更高优先级的任务。

恢复：  
  在浏览器渲染完一帧后，判断当前帧是否有剩余时间，如果有就恢复执行之前挂起的任务。如果没有任务需要处理，代表调和阶段完成（reconciler），可以开始进入渲染阶段。
  这样完美的解决了调和过程一直占用主线程的问题。

终止：   
  其实并不是每次更新都会走到提交阶段。当在调和过程中触发了新的更新，在执行下一个任务的时候，判断是否有优先级更高的执行任务，
  如果有就终止原来将要执行的任务，开始新的 workInProgressFiber 树构建过程，开始新的更新流程。这样可以避免重复更新操作。
  这也是在 React 16 以后生命周期函数 componentWillMount 有可能会执行多次的原因。


## 问题
如何判断当前帧是否还有剩余时间

## 参考资料
- [React Fiber 是如何实现更新过程可控的](https://mp.weixin.qq.com/s?__biz=Mzg3NTcwMTUzNA==&mid=2247486310&idx=1&sn=f1504f0ff3765da53280a52ba65ca32a&source=41#wechat_redirect)