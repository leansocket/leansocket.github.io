# HTTP服务
无数服务是基于 HTTP 协议进行通信的，Web 应用调用后端 HTTP 服务是一种非常常见的应用场景。 

node-libs支持基于Koa2的简化的HTTP/HTTPS服务器接口。

## send()
发送http响应,将传入的值经过包装函数参数到一个通用操作封包对象，并返回到上下文的response.body上。
````js
const libs = require('nodex-libs');
const http = libs.http;

let hello = (ctx) => {
    http.send(ctx, 'hello world.');
};
````

## 路由
`nodex-libs`继承了koa的Web服务端应用，故其路由也是基于koa封装而来。

如下注册两个路由 `/hello` ,`/about`.
````js
const libs = require('nodex-libs');
const http = libs.http;

let hello = (ctx) => {
    http.send(ctx, 'hello world.');
};

let about = (ctx) => {
    http.send(ctx, 'about');
};

let app = http.webapp();

app.route((r)=>{
    r.get('/hello', hello);
    r.get('/about', about);
});
````


## Http
很好，基于上面我们来创建我们的第一个http服务。

创建两个主机号为`127.0.0.1`，端口号是`8080`,使用`GET`方法的接口。

````js
const libs = require('nodex-libs');
const http = libs.http;

const args = {
    body: {},
    host: '127.0.0.1',
    port: 8080,
    corn: true,
    log: true
};

let hello = (ctx) => {
    http.send(ctx, 'hello world.');
};

let about = (ctx) => {
    let ret = {
        name: 'nodex-libs test',
        info: 0
    };
    http.send(ctx, ret);
};

let app = http.webapp(args);

app.route((r)=>{
    r.get('/hello', hello);
    r.get('/about', about);
});

app.start();
````