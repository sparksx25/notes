# router

NavigatorObserver
ModalRoute
MaterialRoutePage
MaterialPage

Navigator 路由嵌套


```dart
Navigator.push(context, MaterialPageRoute(builder: (context) {
  return const DetailScreen();
}));
Navigator.pop(context);
```

## MaterialRoutePage
```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const DetailScreen(),
    // Pass the arguments as part of the RouteSettings. The
    // DetailScreen reads the arguments from these settings.
    settings: RouteSettings(
      arguments: todos[index],
    ),
  ),
);
```

## 配置路由
```dart
MaterialApp(
  routes:{
    '/path': Builer,
    onGenerateRoute: (settings) {
      if (settings.name == PassArgumentsScreen.routeName) {
        final args = settings.arguments as ScreenArguments;
        return MaterialPageRoute(
          builder: (context) {
            return PassArgumentsScreen(
              title: args.title,
              message: args.message,
            );
          },
        );
      }
    }
  }
)
```

## 路由参数
使用 ModalRoute.of() 和 onGenerateRoute() 获取路由参数

Navigator.pushNamed 与 Navigator.pop()方法都可以传递参数

```dart
Navigator.pushNamed(
  context,
  ExtractArgumentsScreen.routeName,
  arguments: ScreenArguments(
      'Extract Arguments Screen',
      'This message is extracted in the build method.',
  ),
);
ModalRoute.of(context)!.settings.arguments as ScreenArguments;
```

## 使用路由器
```dart
MaterialApp.router(
  routerConfig: GoRouter(
    // …
  )
);
```

## 命名路由 routes
为应用程序中的不同页面或屏幕定义唯一的名称，然后使用这些名称来导航到相应的页面。
然而，在某些情况下，当你在浏览器中打开一个应用程序的链接时，浏览器的转发按钮可能无法正常工作。
这是因为浏览器的转发按钮通常使用 URL 来导航到其他页面，
而 Flutter 的命名路由是通过在应用程序内部进行导航来实现的

```dart
MaterialApp(
  title: 'Named Routes Demo',
  initialRoute: '/',
  routes: {
    '/': (context) => const FirstScreen(),
    '/second': (context) => const SecondScreen(),
  },
)
Navigator.pushNamed(context, '/second');
Navigator.pop()
```
- [flutter: 路由和导航](https://flutter.cn/docs/ui/navigation)
- [flutter: 导航到对应名称的 routes 里](https://flutter.cn/docs/cookbook/navigation/named-routes)
- [flutter: 命名路由的局限性](https://flutter.cn/docs/ui/navigation#limitations)