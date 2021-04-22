# HTTP

## Functions

- [isHttps()](#isHttps)

  判断url是否是https

- [combineUrlAndParams()](#combineUrlAndParams)

  将data对象的数据以key=value的方式合并到url之后，并返回合并之后的url。

- [sign(data, secret)](#sign) ⇒ `string`

  对http请求数据签名，内部采用MD5算法生成签名指纹。

- [getRequestOptions()](#getRequestOptions)

  将url解析成通用的请求选项参数。

- [request()](#request)

  发起一次HTTP请求

- [get()](#get)

  发起一次HTTP的GET请求。

- [post()](#post)

  发起一次HTTP的POST请求。

- [call()](#call)

  调用一次HTTP接口。HTTP接口统一采用POST方式进行通讯。

- [makeRPC()](#makeRPC)

  定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。

- [rpc()](#rpc)

  定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。

- [setup(proxyServer, proxyOptions)](#setup)

  Sets up an `http.Server` or `https.Server` instance with the necessary "request" and "connect" event listeners in order to make the server act as an HTTP proxy.

- [eachHeader()](#eachHeader)

  Iterator function for the request/response's "headers". Invokes `fn` for "each" header entry in the request.

- [onrequest()](#onrequest)

  HTTP GET/POST/DELETE/PUT, etc. proxy requests.

- [onconnect()](#onconnect)

  HTTP CONNECT proxy requests.

- [authenticate(server, req, fn)](#authenticate)

  Checks `Proxy-Authorization` request headers. Same logic applied to CONNECT requests as well as regular HTTP requests.

- [requestAuthorization()](#requestAuthorization)

  Sends a "407 Proxy Authentication Required" HTTP response to the `socket`.

- [webapp()](#webapp)

  创建一个基于koa2的web应用。

- [body()](#body)

  创建一个body解析器中间件，详细选项设置请参考body模块。

- [send()](#send)

  发送http响应

- [sendFile()](#sendFile)

  发送响应文件。

- [handler()](#handler)

  将func函数包装成一个中间件

<a name="isHttps"></a>

## isHttps()

判断url是否是https

**Kind**: global function   <a name="combineUrlAndParams"></a>

## combineUrlAndParams()

将data对象的数据以key=value的方式合并到url之后，并返回合并之后的url。

**Kind**: global function   <a name="sign"></a>

## sign(data, secret) ⇒ `string`

对http请求数据签名，内部采用MD5算法生成签名指纹。

**Kind**: global function   **Returns**: `string` - 签名指纹  

| Param  | Type     | Description              |
| ------ | -------- | ------------------------ |
| data   | `object` | 用于签名的http请求数据。 |
| secret | `string` | 用于签名的密钥。         |

<a name="getRequestOptions"></a>

## getRequestOptions()

将url解析成通用的请求选项参数。

**Kind**: global function   <a name="request"></a>

## request()

发起一次HTTP请求

**Kind**: global function   <a name="get"></a>

## get()

发起一次HTTP的GET请求。

**Kind**: global function   <a name="post"></a>

## post()

发起一次HTTP的POST请求。

**Kind**: global function   <a name="call"></a>

## call()

调用一次HTTP接口。HTTP接口统一采用POST方式进行通讯。

**Kind**: global function   <a name="makeRPC"></a>

## makeRPC()

定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。

**Kind**: global function   <a name="rpc"></a>

## rpc()

定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。

**Kind**: global function   <a name="setup"></a>

## setup(proxyServer, proxyOptions)

Sets up an `http.Server` or `https.Server` instance with the necessary "request" and "connect" event listeners in order to make the server act as an HTTP proxy.

**Kind**: global function   **Api**: public  

| Param        | Type          |
| ------------ | ------------- |
| proxyServer  | `http.Server` |
| proxyOptions | `Object`      |

<a name="eachHeader"></a>

## eachHeader()

Iterator function for the request/response's "headers". Invokes `fn` for "each" header entry in the request.

**Kind**: global function   **Api**: private   <a name="onrequest"></a>

## onrequest()

HTTP GET/POST/DELETE/PUT, etc. proxy requests.

**Kind**: global function   <a name="onconnect"></a>

## onconnect()

HTTP CONNECT proxy requests.

**Kind**: global function   <a name="authenticate"></a>

## authenticate(server, req, fn)

Checks `Proxy-Authorization` request headers. Same logic applied to CONNECT requests as well as regular HTTP requests.

**Kind**: global function   **Api**: private  

| Param  | Type                 | Description       |
| ------ | -------------------- | ----------------- |
| server | `http.Server`        |                   |
| req    | `http.ServerRequest` |                   |
| fn     | `function`           | callback function |

<a name="requestAuthorization"></a>

## requestAuthorization()

Sends a "407 Proxy Authentication Required" HTTP response to the `socket`.

**Kind**: global function   **Api**: private   <a name="webapp"></a>

## webapp()

创建一个基于koa2的web应用。

**Kind**: global function   <a name="body"></a>

## body()

创建一个body解析器中间件，详细选项设置请参考body模块。

**Kind**: global function   <a name="send"></a>

## send()

发送http响应

**Kind**: global function   <a name="sendFile"></a>

## sendFile()

发送响应文件。

**Kind**: global function   <a name="handler"></a>

## handler()

将func函数包装成一个中间件

**Kind**: global function  