
# Widget

```dart
class ComponentElement {
    void update() {
      build()
    }
}
class StatelessElement extends ComponentElement {
  Widget build() => (widget as StatelessWidget).build(this);
}
class StatefulElement extends ComponentElement {

  @ovverride
  State createState();
}

class State {
  get widget(){}

  get context(){};

  @ovverride
  void initState(){};

  void setState(VoidCallback fn)

  @ovverride
  Widget build(BuildContext context);

  @ovverride
  didUpdateWidget() {}

  @ovverride
  didChangeDependencies

  @ovverride
  deactivate() {}

  @ovverride
  dispose

  canUpdate() {}

  // 此回调是专门为了开发调试而提供的，在热重载(hot reload)时会被调用，
  // 此回调在Release模式下永远不会被调用。
  reassemble()

}


class Widget {
    final String? key
    Element createElement()
}
class StateLessWidget extends Widget {
    StatelessElement createElement() => StatelessElement(this);
    Widget build(BuildContext context);
}
class StatefulWidget extends Widget {
    StatefulElement createElement() => StatefulElement(this);
    // State 的 build 方法返回 widget
    State createState()
}
// Widget.createElement() -> build
```