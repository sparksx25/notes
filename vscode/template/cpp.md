# C++ 调试，任务

## 运行
launch.json
```json
{
  "configurations": [
    {
      "name": "C/C++: clang 生成和调试活动文件",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/dist/${fileBasenameNoExtension}",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "lldb",
      "preLaunchTask": "C/C++: g++ 生成活动文件"
    }
  ],
  "version": "2.0.0"
}
```


tasks.json
```json
{
  "tasks": [
    {
      "type": "cppbuild",
      "label": "C/C++: g++ 生成活动文件",
      "command": "/usr/bin/g++",
      "args": [
        "-fcolor-diagnostics",
        "-fansi-escape-codes",
        "-std=c++11",
        "-g",
        "${file}",
        "-o",
        "${workspaceFolder}/dist/${fileBasenameNoExtension}"
      ],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "problemMatcher": [
        "$gcc"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "detail": "调试器生成的任务。"
    }
  ],
  "version": "2.0.0"
}
```