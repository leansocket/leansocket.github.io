# nodex-libs

[nodex-libs](https://github.com/leansocket/nodex-libs)是一个基于nodejs的服务端程序库。其中包含在实际工程中可用的方法。可以简化nodejs程序开发。

## 特性

* 所有API和接口都有完整的文档和类型标注。
* 所有模块都使用最新的es6或es7的标准实现，所有异步任务都采用async/await的方式实现。
* 提供基于标签和着色的原生日志方法。
* 支持简洁的HTTP和HTTPS请求发起。
* 支持基于Koa2的简化的HTTP/HTTPS服务器接口，提供干净简洁的错误处理工作流，支持完全可控的文件上传下载功能。
* 提供了简洁的基于mysql连接池的数据库操作，支持mysql事务处理。
* 提供常用的加hash算法、加密解密算法的接口。
* 提供对基于Token、验证码、验证键的用户身份识别方法。
* 提供简洁的数据格式/表单校验方法。
* 提供基于flake的唯一编码生成方法。
* 提供时间段、时间点等对日期时间的处理方法。

## 安装
### NPM
---
安装nodex-libs包,可以使用npm来进行安装
```bash
$ npm install nodex-libs --save
```
### 命令行工具
---
nodex-libs提供了一个[官方的CLI](https://github.com/leansocket/nodex-cli)，可以快速搭建繁杂的脚手架，以提升工作效率。

安装nodex-cli
```bash
$ npm i nodex-cli -g
$ nodex -h
```

创建一个应用

```bash
$ nodex init <projectName>
```

启动应用程序

```bash
$ nodex start [dest]
```

Command

```
Usage: nodex [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  init            init a project.
  start           start a project.
  help [command]  display help for command
```

## License

MIT license
