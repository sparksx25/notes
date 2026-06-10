# vscode 插件开发

## 插件配置
插件拓展了 package.json 文件，添加了自定义字段，

## 插件入口文件
插件入口文件需要包含 `activate`和可选的`deactivate`函数。

## api
```typescript
import * as vscode from 'vscode'

export function activate(ctx: vscode.ExtensionContext) {
  vscode.commands.registerCommand('自定义命令名', () => {
    vscode.window.showInformationMessage('消息')
    
    const editor = vscode.window.activeTextEditor;
    editor?.edit((editBuilder) => {
      editBuilder.delete(
        new vscode.Range(
          new vscode.Position(1, 1),
          new vscode.Position(3, 1)
        )
      )
    })
  })
}
```