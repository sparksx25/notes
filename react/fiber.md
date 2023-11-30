# react fiber


## 引入 Fiber 的原因，Fiber解决了什么问题
当响应式数据发生改变，就会触发更新（这里的更新指的重新创建VDOM树，并根据VDOM树更新真实DOM）。
这个更新操作会添加到异步任务中。这里创建异步任务首选微任务，其次setTimeout。    

React Fiber 出现之前，React 通过原生执行栈递归遍历 VDOM（遍历VDOM的过程就是更新真实DOM）。
如果一个页面足够复杂，形成的函数调用栈就会很深。每一次更新，执行栈需要一次性执行完成。
如果 VDOM 到 DOM的执行时间过长，一直占用浏览器渲染进程的主线程时间过长，动画不能及时更新，就会造成页面卡顿。    

React Fiber 将 VDOM 生成真实 DOM 的过程变成，先将 VDOM 递归遍历转换成一个个子任务，每次处理完前一个任务，在生成下一个子任务，
任务拆分完毕也就构建完成了 workInprogress tree，最后根据子任务链表一次全部更新真实 DOM。

React 可控的更新过程主要体现在下面几个方面：
- 任务拆分
- 任务挂起、恢复、终止
- 任务具备优先级


## 时间分片（Time Slicing）
就是把一个长任务给切割成无数个执行时间很短的任务。


## 任务拆分
在 React Fiber 机制中，将递归遍历 VDOM 这个大任务，拆分成若干小任务（FiberNode），每个任务只负责一个节点的处理。
更新的时候，在一个时间片中执行一个或者多个任务。


## workInProgress tree, currentFiber
在 render 或者 setState 后，会构建一颗 Fiber 树，也就是 workInProgress tree，
这棵树在构建每一个节点（FiberNode）的时候会收集当前节点的副作用，整棵树构建完成后，会形成一条完整的副作用链，
并在构建完成之后赋值给 currentFiber，作为下一次更新的比较对象。

在新一轮更新时 workInProgress tree 再重新构建，会同 currentFiber 的对应节点进行 Diff 比较，收集副作用。
同时也会复用和 currentFiber 对应的节点对象，减少新创建对象带来的开销。
也就是说无论是创建还是更新，挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中。

当没有下一个任务需要执行的时候，workInProgress tree 构建完成，开始进入提交阶段，完成真实 DOM 更新。


## 副作用链
任务在执行过程中顺便收集了每个 FiberNode 的副作用，将有副作用的节点通过 firstEffect、lastEffect、nextEffect 形成一条副作用单链表 。


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


## 任务具备优先级

React Fiber 除了通过挂起，恢复和终止来控制更新外，还给每个任务分配了优先级。具体点就是在创建或者更新 FiberNode 的时候，
通过算法给每个任务分配一个到期时间（expirationTime）。在每个任务执行的时候除了判断剩余时间，如果当前处理节点已经过期，
那么无论现在是否有空闲时间都必须执行改任务。

## 问题
VDOM 树是同步生成的。js源代码，正在执行的代码是不能进行切割的。
任务切片指的是将 VDOM 的遍历过程进行任务拆分，根据 VDOM 生成 Fiber tree。

将 VDOM遍历过程拆分成多个任务，每个任务其实就是处理 FiberNode, 根据 VDOM 生成 Fiber tree(workInProgress tree)
一个 FiberNode 对应一个VNode，同时也对应一个真实的NODE节点，真实DOM树的生成是根据 FiberNode 链表来生成的。

workInProgress tree 创建过程是异步的，无论DOM树是创建还是更新，挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中

更新真实 DOM 的这个动作是一气呵成的，不能中断，不然会造成视觉上的不连贯。


如何判断当前帧是否还有剩余时间？


## 参考资料
- [React Fiber 是如何实现更新过程可控的](https://www.infoq.cn/article/FlEX4gdZigdMJueq4orw)

- [React Fiber 是如何实现更新过程可控的](https://mp.weixin.qq.com/s?__biz=Mzg3NTcwMTUzNA==&mid=2247486310&idx=1&sn=f1504f0ff3765da53280a52ba65ca32a&source=41#wechat_redirect)
