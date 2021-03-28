# nodex-cli 
[nodex-cli](https://github.com/leansocket/nodex-cli) 是一个基于` nodex-libs `，可以快速搭建繁杂的脚手架，以提升工作效率。

## 安装
`nodex-cli` 可以使用npm进行全局安装，并使用 ` nodex -h ` 来获取帮助

```bash
$ npm i nodex-cli -g
$ nodex -h
```

## 创建一个项目
### nodex init
---
运行以下命令来创建一个新项目：

```bash
$ nodex init <projectName>
```

启动应用程序

```bash
$ nodex start [dest]
```


`nodex` 命令有一些可选项，你可以通过运行以下命令进行探索

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
## 文件结构

采用nodex-libs脚手架创建一个nodex服务项目的初始模板。

目录结构：
```
  |-- nodex-0
    |-- data   // 三个json文件表示不同环境下的数据库配置，逻辑处理文件配置，接口serv配置等
    |   |-- args-dev.json 
    |   |-- args-prod.json
    |   |-- args-stage.json
    |-- src
    |   |-- data.js    // 连接数据库，并查询返回数据
    |   |-- logic.js   // 逻辑处理文件，所有的逻辑处理放到该文件夹下
    |   |-- serv.js    // 存放路由文件
    |-- .eslintrc.json
    |-- .gitignore
    |-- Dockerfile
    |-- LICENSE
    |-- package-lock.json
    |-- package.json
    |-- pm2.prod.json
    |-- pm2.stage.json
    |-- README.md
```
## 使用示例

### data
---
根目录下的三个json文件表示不同环境下的数据库配置，逻辑处理文件配置，接口serv配置等

以 args-dev.json 为例，其中 json 文件中的 data, logic, serv 分别对应 src 下的三个同名的 js 文件。

```json
{
  "data": {
    "mysql": {
      "host": "127.0.0.1",  // 主机名
      "port": 3306,         // 端口
      "user": "root",       // 数据库用户
      "password": "root",   // 数据库密码
      "database": "test"    // 数据库名称
    }
  },
  "logic": {
    
  },
  "serv": {
    "name": "nodex-0",
    "host": "127.0.0.1",    // 主机名
    "port": 8080,           // 运行的端口
    "cors": true,           // 是否允许跨域
    "log": true,
    "proxy": true           // 设置代理
  }
}
```
### src
---


#### serv.js
Router 主要用来描述请求 URL 和具体承担执行动作的 Controller(logic) 的对应关系， 框架约定了` src/serv.js `文件用于统一所有路由规则。通过统一的配置，我们可以避免路由规则逻辑散落在多个地方，从而出现未知的冲突，集中在一起我们可以更方便的来查看全局的路由规则。

在下面定义了两个简单的路由：

* 当用户执行`GET /tset_get`, `logic.js`中的 `helloWorldGet`方法就会执行。
* 当用户执行`POST /tset_post`, `logic.js`中的 `helloWorldPost`方法就会执行。

```js
'use strict';

const { libs, runtime } = nodex;
const { http } = libs;
const { logic } = runtime;

exports.init = async function (args) {
  console.log('serv init.');
  console.log('serv init args:', args);
  console.log('runtime:', runtime);

  const app = http.webapp(args);

  app.route(router => {
    router.get('/test_get', http.handler(logic.helloWorldGet));
    router.post('/test_post', http.handler(logic.helloWorldPost));
  });

  app.start();
};

```

#### logic.js
我们通过 Router 将用户的请求基于 method 和 URL 分发到了对应的 logic 上,简单的说 logic 负责**解析用户的输入，处理后返回相应的结果**。nodex-libs推荐 logic 主要对用户的请求参数进行处理（校验、转换），然后调用对应的方法处理业务，得到业务结果后封装并返回结果。

同时，nodex-libs推荐 logic 方法统一放在 `src/logic.js` 文件下。

```js
'use strict';

exports.init = async function (args) { 
  console.log('logic init.');
  console.log('logic init args:', args);
};

exports.helloWorldGet = async function () {
  return 'hello world!';
};

exports.helloWorldPost = async function () {
  return 'hello world!';
};

// 根据项目id查询项目
exports.getProjectInitById = async function({p_id}){
    fmt.required(p_id,'integer',1,11);
    return await data.getProjectInitById(p_id);
}

```

#### data.js
简单来说

* 保持 logic 中的逻辑更加简洁。
* 保持业务逻辑的独立性，可以被多个 logic方法 重复调用。
* 可以连接数据库，获取数据库信息返回给 logic 或将 logic 传过来的数据经处理后存入数据库。

```js
'use strict';

const { libs } = nodex;
const { mysql } = libs;


exports.init = async function (args) { 
  console.log('data init.');
  console.log('data init args:', args);
  await mysql.init(args.mysql);
};

// 根据项目id查询项目
exports.getProjectInitById = async function(p_id){
    const sql = `
        select
            *
        from
            project
        where
            p_id = ${p_id}
    `;
    const result = await mysql.query(sql);
    return result;
}

```
