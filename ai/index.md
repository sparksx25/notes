- [langchain官网](https://docs.langchain.com/oss/javascript/langchain/overview)
- [图解 rect](https://7km.top/main/fibertree-prepare)
- [掘金小册：深入浅出微前端](https://juejin.cn/book/7258893482318626868/section/7293207994501627939)
- [掘金：子弈的 2025 年度总结](https://aicoding.juejin.cn/post/7598947628468207662)

## 名词解释
- LLM: large language model
  - 不具备记忆功能，本质是一个数学函数
  - context 负责提供对话历史
- tokenizer: 作为用户与LLM的中间层，负责解码和编码
  - 文本（比如用户提问，LLM返回的文本）切分成 token, tokenizer 将 token 编码成 tokenId
  - token 是 LLM处理的最基本单元
  - 一个 token 大概等于1.5个汉字
- context: 上下文
- context window: 上下文窗口：表示context 能容纳的最大 token 数量
  - 目前最新的主流模型， context window 的大小是 100万左右
- prompt: 提示词，LLM接收的具体问题或指令
  - user prompt: 说明具体任务，用户自己输入的
  - system prompt: 人设和做事规则，系统提示词，开发者在后台配置的
- function calling: agent 和 LLM 的约定
- agent: 某些工具内置在智能体，通过 function calling 的方式使用
  - 会自主规划和使用工具
  - 搜索
  - 文件读取
  - 脚本执行
- tool:
  - 平台接入工具实现外部功能
- MCP：agent 与工具服务之间的约定
  - 提供给 agent 的外部服务，统一了 tool工具的调用，使工具可以共享
- memory: context+prompt
- subagent: 拆分的小任务在 subagent 中完成，可以减小上下文的大小
- RAG: retrieval augmented generation(检索增强生成)
  - 分片
  - 索引：文本片段向量化（Embedding），存储文本片段和向量（向量数据库）
  - 召回：搜索与用户问题相关的片段（作为初步筛选，片段多，匹配度低）
  - 重排：进一步筛选
  - 生成
- skill（Reference, script）: 
  - 提供给LLM的说明文档(类似回答模板)， 其实就是 prompt 加载器，
  - 本质是 markdown 文档
- lang chain: 以编程的方式将某个流程编程一个固定的程序
- work flow（工作流）: 以可视化的方式将某个流程整理成一个固定的程序


## agent
LLM 无法感知或改变外部环境

agent = LLV + 工具列表
