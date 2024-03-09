# launch
launch.json 是用于定义和配置调试器的文件。自定义调试器的行为，当启动调试时会先执行 `launch.json`
配置的任务，在启动调试器


## Keys
- "type"：调试器的类型，例如 "node" 表示 Node.js 调试器，"cppdbg" 表示 C++ 调试器。
- "request"：调试请求类型，例如 "launch" 表示启动调试器，"attach" 表示连接到已运行的进程。
- "program"：要调试的程序路径。
- "args"：传递给程序的参数。
- "cwd"：程序的工作目录。
- "env"：设置环境变量。

## Reference
- [vscode: launch.json](https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes)