# Single-spa

## 实现目标
- 支持根据切换不同的**路由**加载并展示相应的 APP，支持同一个路由显示多个APP(视图)。
- mountParcel 方法生成的 parcel 实例生命周期与 APP 绑定。
- mountRootParcel 方法是全局的，需要手动操控实例的创建于销毁。


## 前置知识
1. hash 的改变会触发 `hashchange` 事件, 也会触发 `popState` 事件。
2. 调用 `replaceState`, `pushState` 方法不会触发 `popState`事件。hash 的改变，浏览器的前进后退，history.back,history. forward 方法都会触发 `popState` 事件。


## 实现原理
- 监听了 `popState`, `hashchange` 事件，每次触发这两个事件都将重新计算 APP 的状态。
- 同时重写了 `window.addEventListener` 方法，`history.pushState`, `history.replaceState` 方法，使得每次调用这两个方法进行导航时都会手动触发 `popState`, `hashchange` 事件，然后重新计算 APP 的状态。并对之后绑定的 `popState`, `hashchange` 事件监听器进行搜集，然后在将失活的组件卸载之执行收集的事件监听器。 


## APP 状态的切换顺序
NOT_LOAD -> LOAD_ERROR / NOT_BOOTSTRAPPED -> BOOTSTRAPPING -> NOT_MOUNTED -> MOUNTING -> MOUNTED


## APP之间的切换顺序
先将 appsToUnload，toUnmountPromise(toUnmountPromise 类型的APP会变成 appsToUnload类型的APP) 的APP卸载之后，在执行待激活的Apps 的 load, bootstrap, mount 操作。
等所有的失活 App 卸载（unmount,unload）之后,执行激活 App 的挂载(unmount)操作,bootstrap生命周期是并行执行的


## APP 的生命周期钩子 lifecycles
"bootstrap" | "mount" | "update" | "unmount" | "unload"

bootstrap 钩子只会在 APP 初始化时只执行一次。
未调用 unloadApplication 方法进行卸载的 APP，每次激活会执行 mount 钩子，失活会执行 unmount钩子。

调用 unloadApplication 卸载过的 APP，卸载时置会触发 unload 钩子



## config
timeouts = {
    bootstrap: {
        mills: 3000,
        dieOnTimeout: false,
    },
    mount
    unmount
    unload
}



## 自定义事件
single-spa:     

执行APPS切换之后触发
- before-routing-event
- routing-event: 
- before-mount-routing-event：所有失活的APP卸载之后执行


在准备执行APPS切换之前触发
- before-no-app-change
- before-app-change

执行APPS切换完成之后触发
- app-change
- no-app-change

single-spa 应用的首次挂载完成
- before-first-mount
- first-mount



## API
- window.singleSpaNavigate
    全局方法，用来导航

- navigateToUrl


- registerApplication
```js
registerApplication(
    {
        name: string,
        loadApp({
            name,
            mountParcel: mountParcel.bind(appOrParcel),
            singleSpa,
            customProps,
            unmountSelf = isParcel ? appOrParcel.unmountThisParcel : undefined;
        }),
        activeWhen,
        customProps
    }
)
```

- unregisterApplication
- unloadApplication

- triggerAppChange
    重新进行一次导航，再次检验当前所有APP的状态


辅助类方法:
- pathToActiveWhen


## parcel
parcel 初始化完成立马执行parcel的 bootstrap, mount 钩子。

- 挂载在全局的 parcel:
parcel 的创建与销毁需要手动控制。

- 挂载在 App 上的 parcel:
在 APP 的任意生命周期中都能够获得 mountParcel 方法，在APP 的生命周期里面获取的 mountParcel 方法挂载在 App上。
当 App 卸载时会将挂载在 APP 上的所有 parcels 都进行卸载。