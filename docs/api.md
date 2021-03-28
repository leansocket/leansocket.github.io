## Classes



<dl>
<dt><a href="#WebApp">WebApp</a></dt>
<dd><p>WebApp</p>
<ul>
<li>Web服务端应用，从Koa继承而来。</li>
</ul>
</dd>
</dl>
<dl>
<dt><a href="#Token">Token</a></dt>
<dd><p>Token,这是一个简易的对称加密token工具类。用于实现用户身份的鉴别。
一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和
安全校验的信息。</p>
</dd>
<dt><a href="#Code">Code</a></dt>
<dd><p>验证码</p>
<ul>
<li>此类用于创建验证码对象。验证码对象可识别用户操作是否属于本人。</li>
<li>验证码是一串有限长度（通常是4-8个）的数字字符串。验证码生成后可发到用户信任的手机或邮箱。</li>
<li>验证码都有时效性，超时后验证码将会失效，失效的验证码将不会通过检查。</li>
<li>此类只用于生成验证码字符串或检查验证码字符串的合法性。如果期望发送手机短信或邮件需要专门
的模块（sms或smtp）进行。</li>
</ul>
</dd>
<dt><a href="#Key">Key</a></dt>
<dd><p>验证键</p>
<ul>
<li>验证键是一种特殊的验证码。它和普通验证码的区别是能保证唯一性。</li>
<li>这种唯一性不是全局唯一，是在所有已经生成但未检查的编码中的唯一，
即如果现已经生成1000个编码都还未检查也未失效，新生成的验证键值能保证与
当前这1000个键值都不同。</li>
</ul>
</dd>
<dt><a href="#Flake">Flake</a></dt>
<dd><p>雪花算法唯一编码生成器</p>
<ul>
<li>此类采用flake算法生成唯一编码。</li>
<li>此类能同时支持156个节点，每个节点每毫秒生成2^24个唯一编码。</li>
<li>此类生成的唯一编码是一个由20个十六进制字符组成的串。</li>
</ul>
</dd>
<dt><a href="#Connection">Connection</a></dt>
<dd><p>数据库链接对象</p>
</dd>
<dt><a href="#MySql">MySql</a></dt>
<dd><p>mysql数据库访问对象</p>
</dd>
<dt><a href="#Schedule">Schedule</a></dt>
<dd><p>日程</p>
<ul>
<li>日程是为了解决在特定的时刻执行任务的需求，例如：每周星期二上午九点执行任务A。</li>
<li>日程不是解决每隔单位时间执行任务的需求，如：每隔30秒执行任务B，你可以用计时器
setInterval之类的方法完成这类需求。</li>
</ul>
</dd>
<dt><a href="#Channel">Channel</a></dt>
<dd><p>邮件发送通道</p>
</dd>
<dt><a href="#Duration">Duration</a></dt>
<dd><p>时间段，代表两个时间点之间的时长。</p>
</dd>
<dt><a href="#TimeSpan">TimeSpan</a></dt>
<dd><p>时间区间，时间区间是由两个时间点构成的一段时间。
时间区间（TimeSpan）与时间段（Duration）的区别是
时间区间具有方向性（begin --&gt; end），时间段没有方向性。</p>
</dd>
<dt><a href="#TimePoint">TimePoint</a></dt>
<dd><p>时间点。表示时钟上一个特定的瞬间时间点。</p>
</dd>
</dl>



## Members

<dl>
<dt><a href="#hopByHopHeaders">hopByHopHeaders</a></dt>
<dd><p>13.5.1 End-to-end and Hop-by-hop Headers</p>
<p>Hop-by-hop headers must be removed by the proxy before passing it on to the
next endpoint. Per-request basis hop-by-hop headers MUST be listed in a
Connection header, (section 14.10) to be introduced into HTTP/1.1 (or later).</p>
</dd>
</dl>
<dl>
<dt><a href="#rules">rules</a></dt>
<dd><p>数据格式校验规则，其中包含两类：</p>
<ul>
<li>正则表达式</li>
<li>接口：{test: (val)=&gt;boolean}</li>
</ul>
</dd>
<dt><a href="#MS_PER_SECOND">MS_PER_SECOND</a></dt>
<dd><p>常量：每秒钟的毫秒数</p>
</dd>
<dt><a href="#MS_PER_MINUTE">MS_PER_MINUTE</a></dt>
<dd><p>常量：每分钟的毫秒数</p>
</dd>
<dt><a href="#MS_PER_HOUR">MS_PER_HOUR</a></dt>
<dd><p>常量：每小时的毫秒数</p>
</dd>
<dt><a href="#MS_PER_DAY">MS_PER_DAY</a></dt>
<dd><p>常量：每天的毫秒数</p>
</dd>
<dt><a href="#MS_PER_WEEK">MS_PER_WEEK</a></dt>
<dd><p>常量：每周的毫秒数</p>
</dd>
</dl>



## Functions

<dl>
<dt><a href="#isHttps">isHttps()</a></dt>
<dd><p>判断url是否是https</p>
</dd>
<dt><a href="#combineUrlAndParams">combineUrlAndParams()</a></dt>
<dd><p>将data对象的数据以key=value的方式合并到url之后，并返回合并之后的url。</p>
</dd>
<dt><a href="#sign">sign(data, secret)</a> ⇒ <code>string</code></dt>
<dd><p>对http请求数据签名，内部采用MD5算法生成签名指纹。</p>
</dd>
<dt><a href="#getRequestOptions">getRequestOptions()</a></dt>
<dd><p>将url解析成通用的请求选项参数。</p>
</dd>
<dt><a href="#request">request()</a></dt>
<dd><p>发起一次HTTP请求</p>
</dd>
<dt><a href="#get">get()</a></dt>
<dd><p>发起一次HTTP的GET请求。</p>
</dd>
<dt><a href="#post">post()</a></dt>
<dd><p>发起一次HTTP的POST请求。</p>
</dd>
<dt><a href="#call">call()</a></dt>
<dd><p>调用一次HTTP接口。HTTP接口统一采用POST方式进行通讯。</p>
</dd>
<dt><a href="#makeRPC">makeRPC()</a></dt>
<dd><p>定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。</p>
</dd>
<dt><a href="#rpc">rpc()</a></dt>
<dd><p>定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。</p>
</dd>
<dt><a href="#setup">setup(proxyServer, proxyOptions)</a></dt>
<dd><p>Sets up an <code>http.Server</code> or <code>https.Server</code> instance with the necessary
&quot;request&quot; and &quot;connect&quot; event listeners in order to make the server act as an
HTTP proxy.</p>
</dd>
<dt><a href="#eachHeader">eachHeader()</a></dt>
<dd><p>Iterator function for the request/response&#39;s &quot;headers&quot;.
Invokes <code>fn</code> for &quot;each&quot; header entry in the request.</p>
</dd>
<dt><a href="#onrequest">onrequest()</a></dt>
<dd><p>HTTP GET/POST/DELETE/PUT, etc. proxy requests.</p>
</dd>
<dt><a href="#onconnect">onconnect()</a></dt>
<dd><p>HTTP CONNECT proxy requests.</p>
</dd>
<dt><a href="#authenticate">authenticate(server, req, fn)</a></dt>
<dd><p>Checks <code>Proxy-Authorization</code> request headers. Same logic applied to CONNECT
requests as well as regular HTTP requests.</p>
</dd>
<dt><a href="#requestAuthorization">requestAuthorization()</a></dt>
<dd><p>Sends a &quot;407 Proxy Authentication Required&quot; HTTP response to the <code>socket</code>.</p>
</dd>
<dt><a href="#webapp">webapp()</a></dt>
<dd><p>创建一个基于koa2的web应用。</p>
</dd>
<dt><a href="#body">body()</a></dt>
<dd><p>创建一个body解析器中间件，详细选项设置请参考body模块。</p>
</dd>
<dt><a href="#send">send()</a></dt>
<dd><p>发送http响应</p>
</dd>
<dt><a href="#sendFile">sendFile()</a></dt>
<dd><p>发送响应文件。</p>
</dd>
<dt><a href="#handler">handler()</a></dt>
<dd><p>将func函数包装成一个中间件</p>
</dd>
</dl>
<dl>
<dt><a href="#error">error(错误名称，推荐使用形如‘ERR_INVALID_ARGS’的命名规则，具体业务不做强制要求。, message)</a> ⇒ <code>Error</code></dt>
<dd><p>构造一个新的错误对象，一般调用方式形如：throw error(&#39;ERR_NAME&#39;, &#39;message&#39;);</p>
</dd>
<dt><a href="#checkError">checkError()</a></dt>
<dd><p>检查错误，此函数会检查形如（err, ret）的错误。检查规则：</p>
<ul>
<li>err是一个Error实例，返回true。</li>
<li>ret.result !== &#39;ok&#39;, 返回true。</li>
</ul>
</dd>
<dt><a href="#make">make()</a></dt>
<dd><p>包装函数参数到一个通用操作封包对象，此函数可能的使用场景如下：</p>
<pre><code>makeCOP(err);
makeCOP(ret);
makeCOP(null, ret);
</code></pre>
</dd>
<dt><a href="#hash">hash(alg, data)</a> ⇒ <code>string</code></dt>
<dd><p>用指定hash算法计算data的hash编码。</p>
</dd>
<dt><a href="#md5">md5(data)</a> ⇒ <code>string</code></dt>
<dd><p>计算data的md5值</p>
</dd>
<dt><a href="#sha256">sha256(data)</a> ⇒ <code>string</code></dt>
<dd><p>计算data的sha256值</p>
</dd>
<dt><a href="#encode_aes_256_cbc">encode_aes_256_cbc(key, content)</a> ⇒ <code>string</code></dt>
<dd><p>使用aes-256-cbc算法对数据进行编码</p>
</dd>
<dt><a href="#decode_aes_256_cbc">decode_aes_256_cbc(key, content)</a> ⇒ <code>string</code></dt>
<dd><p>对一串使用aes-256-cbc算法加密的密文进行解码</p>
</dd>
<dt><a href="#encode_base64">encode_base64(content)</a> ⇒ <code>string</code></dt>
<dd><p>对数据进行base64编码</p>
</dd>
<dt><a href="#decode_base64">decode_base64(content)</a> ⇒ <code>string</code></dt>
<dd><p>对base64编码的字符串进行解码</p>
</dd>
<dt><a href="#encode_hex64">encode_hex64(content)</a> ⇒</dt>
<dd><p>将一段十六进制的字符串进行base64编码</p>
</dd>
<dt><a href="#decode_hex64">decode_hex64(content)</a> ⇒ <code>string</code></dt>
<dd><p>对一段被base64编码过的十六进制字符串进行解码</p>
</dd>
<dt><a href="#rs">rs(length, characters)</a> ⇒ <code>string</code></dt>
<dd><p>获取一个随机字符串（random string）</p>
</dd>
<dt><a href="#rsod">rsod(len)</a> ⇒ <code>string</code></dt>
<dd><p>获取一个十进制的随机数字字符串（random string of digit）</p>
</dd>
<dt><a href="#rsox">rsox(len)</a> ⇒ <code>string</code></dt>
<dd><p>获取一个十六进制的随机数字字符串（random string of hex）</p>
</dd>
<dt><a href="#rsoa">rsoa(len)</a> ⇒ <code>string</code></dt>
<dd><p>获取一个随机字母字符串（random string of alpha）</p>
</dd>
<dt><a href="#rsow">rsow(len)</a> ⇒ <code>string</code></dt>
<dd><p>获取一个由数字、字母组成的随机字符串（random string of word）</p>
</dd>
<dt><a href="#rsop">rsop(len)</a> ⇒ <code>string</code></dt>
<dd><p>获取一个由可打印字符组成的随机字符串（random string of printable)</p>
</dd>
<dt><a href="#create">create()</a> ⇒ <code><a href="#Flake">Flake</a></code></dt>
<dd><p>创建一个flake对象</p>
</dd>
<dt><a href="#has">has(obj, field)</a> ⇒ <code>boolean</code></dt>
<dd><p>obj中是否存在field字段</p>
</dd>
<dt><a href="#hasOne">hasOne(obj, fields)</a> ⇒ <code>boolean</code></dt>
<dd><p>字段列表中的其中一个字段在obj中是否存在。</p>
</dd>
<dt><a href="#hasAll">hasAll(obj, fields)</a> ⇒ <code>boolean</code></dt>
<dd><p>字段列表中的字段在obj中是否全部存在。</p>
</dd>
<dt><a href="#assertOne">assertOne(obj, fields)</a></dt>
<dd><p>断言字段列表fields中的字段在对象obj中至少存在一个。如果断言失败，会抛出错误。</p>
</dd>
<dt><a href="#assertAll">assertAll(obj, fields)</a></dt>
<dd><p>断言字段列表fields中的全部字段在对象obj中都存在。断言失败会抛出错误。</p>
</dd>
<dt><a href="#optional">optional(field, format, minlen, maxlen, defaultValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>可选项检查，如果字段存在就进行数据格式校验，如果字段不存在就返回默认值。</p>
</dd>
<dt><a href="#required">required(field, format, minlen, maxlen)</a> ⇒ <code>boolean</code></dt>
<dd><p>必备项检查，如果字段存在就进行数据格式校验，如果字段不存在就抛出错误。</p>
</dd>
<dt><a href="#decompress">decompress()</a></dt>
<dd><p>对http响应数据进行解压。如果http响应数据采用了gzip压缩，就进行解压，否则什么都不做。</p>
</dd>
<dt><a href="#decode">decode()</a></dt>
<dd><p>对http响应数据进行解码。如果http响应数据采用了特殊编码格式就进行解码，否则什么都不做。</p>
</dd>
<dt><a href="#escape">escape()</a></dt>
<dd><p>对HTML字符串中的特殊字符进行转义。</p>
</dd>
<dt><a href="#init">init(scope)</a></dt>
<dd><p>初始化日志模块</p>
</dd>
<dt><a href="#init">init()</a></dt>
<dd><p>初始化全局MySql对象</p>
</dd>
<dt><a href="#connect">connect(transaction)</a> ⇒ <code><a href="#Connection">Connection</a></code></dt>
<dd><p>连接数据库</p>
</dd>
<dt><a href="#transaction">transaction()</a></dt>
<dd><p>连接数据库并开启事务。</p>
</dd>
<dt><a href="#query">query(sql, logsql)</a> ⇒ <code>any</code></dt>
<dd><p>连接数据库，执行一次SQL查询，并自动释放连接。</p>
</dd>
<dt><a href="#page">page(sql, page, size)</a> ⇒ <code>any</code></dt>
<dd><p>连接数据库，执行一次分页查询，并自动释放连接。</p>
</dd>
<dt><a href="#exec">exec()</a></dt>
<dd><p>执行一条命令</p>
</dd>
<dt><a href="#execSync">execSync()</a></dt>
<dd><p>同步执行一调命令</p>
</dd>
<dt><a href="#duration">duration(ms)</a> ⇒ <code><a href="#Duration">Duration</a></code></dt>
<dd><p>创建一个时间段对象</p>
</dd>
<dt><a href="#span">span(beginTimeStamp, endTimeStamp)</a> ⇒ <code><a href="#TimeSpan">TimeSpan</a></code></dt>
<dd><p>创建一个时间区间对象。</p>
</dd>
<dt><a href="#point">point(timestamp)</a> ⇒ <code><a href="#TimePoint">TimePoint</a></code></dt>
<dd><p>创建一个时间点对象。</p>
</dd>
<dt><a href="#now">now()</a></dt>
<dd><p>获取现在时刻的时间点对象。</p>
</dd>
<dt><a href="#utc">utc()</a></dt>
<dd><p>获取dateTime结构所描述的UTC时间点。</p>
</dd>
<dt><a href="#parse">parse()</a></dt>
<dd><p>解析时间字符串，相当于Date.parse()。</p>
</dd>
<dt><a href="#add">add(timePoint, duration)</a> ⇒ <code><a href="#TimePoint">TimePoint</a></code></dt>
<dd><p>计算时间点timePoint加上时间段duration的时间点。</p>
</dd>
<dt><a href="#sub">sub(timePoint, duration)</a> ⇒ <code><a href="#TimePoint">TimePoint</a></code></dt>
<dd><p>计算时间点timePoint减去时间段duration的时间点。</p>
</dd>
<dt><a href="#delay">delay(time)</a></dt>
<dd><p>延迟，一般用法为:</p>
<pre><code class="language-js">await delay(0.5) // 延迟0.5秒
</code></pre>
</dd>
<dt><a href="#absolutePath">absolutePath()</a></dt>
<dd><p>获取路径p的绝对路径</p>
<ul>
<li>如果p以 &#39;/&#39; 开始，返回相对于当前进程cwd的绝对路径。</li>
</ul>
</dd>
<dt><a href="#camelCase">camelCase()</a></dt>
<dd><p>获取name的驼峰形式。如：</p>
<pre><code>get_user_info =&gt; getUserInfo
_get_user_info =&gt; GetUserInfo
</code></pre>
</dd>
<dt><a href="#camelCaseKeys">camelCaseKeys()</a></dt>
<dd><p>将对象obj的key全部变成驼峰形式。</p>
</dd>
<dt><a href="#compareVersion">compareVersion(versionA, versionB)</a> ⇒ <code>number</code></dt>
<dd><p>对两个版本进行比较</p>
<ul>
<li>versionA === versionB：返回 0</li>
<li>versionA &lt; versionB： 返回 -1</li>
<li>versionA &gt; versionB： 返回 1</li>
</ul>
</dd>
<dt><a href="#computeGeoDistance">computeGeoDistance()</a></dt>
<dd><p>计算地球球面上两个经纬点之间的地理距离。</p>
</dd>
</dl>


<a name="Token"></a>

## Token

Token,这是一个简易的对称加密token工具类。用于实现用户身份的鉴别。
一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和
安全校验的信息。

**Kind**: global class  

* [Token](#Token)
  * [new Token(secret, timeout)](#new_Token_new)
  * [.sign()](#Token+sign)
  * [.make(data)](#Token+make) ⇒ <code>string</code>
  * [.check(token)](#Token+check) ⇒ <code>TokenSession</code>

<a name="new_Token_new"></a>

### new Token(secret, timeout)

构造器


| Param   | Type                | Description                 |
| ------- | ------------------- | --------------------------- |
| secret  | <code>string</code> | 用于加密的密钥              |
| timeout | <code>number</code> | token的过期时长，单位为秒。 |

<a name="Token+sign"></a>

### token.sign()

对数据进行签名

**Kind**: instance method of [<code>Token</code>](#Token)  
<a name="Token+make"></a>

### token.make(data) ⇒ <code>string</code>

生成token字符串

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>string</code> - token密文字符串，可以传递给客户端。  

| Param | Type             | Description                     |
| ----- | ---------------- | ------------------------------- |
| data  | <code>any</code> | 暂存在token中的数据，尽量简短。 |

<a name="Token+check"></a>

### token.check(token) ⇒ <code>TokenSession</code>

解密并验证token。如果验证成功，返回token中保存的数据。
如果验证失败，则返回undefined。

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>TokenSession</code> - token的sessio信息  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| token | <code>string</code> | 待验证的token字符串 |

<a name="Code"></a>

## Code

验证码

* 此类用于创建验证码对象。验证码对象可识别用户操作是否属于本人。
* 验证码是一串有限长度（通常是4-8个）的数字字符串。验证码生成后可发到用户信任的手机或邮箱。
* 验证码都有时效性，超时后验证码将会失效，失效的验证码将不会通过检查。
* 此类只用于生成验证码字符串或检查验证码字符串的合法性。如果期望发送手机短信或邮件需要专门
  的模块（sms或smtp）进行。

**Kind**: global class  

* [Code](#Code)
  * [new Code(length, timeout)](#new_Code_new)
  * [.make(type, to)](#Code+make) ⇒ <code>string</code>
  * [.check(type, to)](#Code+check) ⇒ <code>CodeSession</code>
  * [.clear()](#Code+clear)

<a name="new_Code_new"></a>

### new Code(length, timeout)

构造器


| Param   | Type                | Description                |
| ------- | ------------------- | -------------------------- |
| length  | <code>number</code> | 验证码的长度，一般为4-8.   |
| timeout | <code>number</code> | 验证码的有效期，单位为秒。 |

<a name="Code+make"></a>

### code.make(type, to) ⇒ <code>string</code>

生成验证码

**Kind**: instance method of [<code>Code</code>](#Code)  
**Returns**: <code>string</code> - 生成的验证码字符串。  

| Param | Type                | Description                                                  |
| ----- | ------------------- | ------------------------------------------------------------ |
| type  | <code>string</code> | 验证码的发送类型，email                                      |
| to    | <code>string</code> | 发送目标，如果验证发的发送类型是email，这里是 对应的邮箱地址，如果验证码发送类型为sms，这里就是对应的手机号码。 |

<a name="Code+check"></a>

### code.check(type, to) ⇒ <code>CodeSession</code>

检查验证码

**Kind**: instance method of [<code>Code</code>](#Code)  
**Returns**: <code>CodeSession</code> - 如果通过检查，返回此发送目标对应验证码的session信息。  

| Param | Type                | Description                                                  |
| ----- | ------------------- | ------------------------------------------------------------ |
| type  | <code>string</code> | 验证码的发送类型，email                                      |
| to    | <code>string</code> | 发送目标，如果验证发的发送类型是email，这里是 对应的邮箱地址，如果验证码发送类型为sms，这里就是对应的手机号码。 |

<a name="Code+clear"></a>

### code.clear()

清空所有验证码，此操作会让暂存的待检查的验证码全部丢失，
后续基于这些验证码的检查操作都会失败。

**Kind**: instance method of [<code>Code</code>](#Code)  
<a name="Key"></a>

## Key

验证键

* 验证键是一种特殊的验证码。它和普通验证码的区别是能保证唯一性。
* 这种唯一性不是全局唯一，是在所有已经生成但未检查的编码中的唯一，
  即如果现已经生成1000个编码都还未检查也未失效，新生成的验证键值能保证与
  当前这1000个键值都不同。

**Kind**: global class  

* [Key](#Key)
  * [new Key(length, timeout)](#new_Key_new)
  * [.make(data)](#Key+make) ⇒ <code>string</code>
  * [.check(key)](#Key+check) ⇒ <code>KeySession</code>
  * [.clear()](#Key+clear)

<a name="new_Key_new"></a>

### new Key(length, timeout)

构造器


| Param   | Type                | Description                                    |
| ------- | ------------------- | ---------------------------------------------- |
| length  | <code>number</code> | 长度，为了保证唯一，在特定的场景可以自行设定。 |
| timeout | <code>number</code> | 有效时长，单位为秒。                           |

<a name="Key+make"></a>

### key.make(data) ⇒ <code>string</code>

生成键值

**Kind**: instance method of [<code>Key</code>](#Key)  
**Returns**: <code>string</code> - 键值字符串  

| Param | Type             | Description        |
| ----- | ---------------- | ------------------ |
| data  | <code>any</code> | 与键值绑定的信息。 |

<a name="Key+check"></a>

### key.check(key) ⇒ <code>KeySession</code>

检查键值

**Kind**: instance method of [<code>Key</code>](#Key)  
**Returns**: <code>KeySession</code> - 与此键值的session数据，如果检查失败返回undefined。  

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| key   | <code>string</code> | 待检查的键值字符串 |

<a name="Key+clear"></a>

### key.clear()

清空所有键值，此操作会让所有已经生成但未检查的键值全部丢失，
后续针对这些键值的检查操作都会失败。

**Kind**: instance method of [<code>Key</code>](#Key)  
<a name="Flake"></a>

## Flake

雪花算法唯一编码生成器

* 此类采用flake算法生成唯一编码。
* 此类能同时支持156个节点，每个节点每毫秒生成2^24个唯一编码。
* 此类生成的唯一编码是一个由20个十六进制字符组成的串。

**Kind**: global class  

* [Flake](#Flake)
  * [new Flake(nodeId)](#new_Flake_new)
  * [.get()](#Flake+get)

<a name="new_Flake_new"></a>

### new Flake(nodeId)

构造器


| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| nodeId | <code>number</code> | 节点ID，0-255. |

<a name="Flake+get"></a>

### flake.get()

获取编号

**Kind**: instance method of [<code>Flake</code>](#Flake)  
<a name="Connection"></a>

## Connection

数据库链接对象

**Kind**: global class  

* [Connection](#Connection)
  * [.query(sql, logsql)](#Connection+query) ⇒ <code>any</code>
  * [.page(sql, page, size)](#Connection+page) ⇒ <code>any</code>
  * [.transaction()](#Connection+transaction)
  * [.commit()](#Connection+commit)
  * [.rollback()](#Connection+rollback)
  * [.release()](#Connection+release)

<a name="Connection+query"></a>

### connection.query(sql, logsql) ⇒ <code>any</code>

执行一次sql查询

**Kind**: instance method of [<code>Connection</code>](#Connection)  
**Returns**: <code>any</code> - 查询结果集  

| Param  | Type                 | Default           | Description     |
| ------ | -------------------- | ----------------- | --------------- |
| sql    | <code>string</code>  |                   | SQL语句         |
| logsql | <code>boolean</code> | <code>true</code> | 是否打印SQL语句 |

<a name="Connection+page"></a>

### connection.page(sql, page, size) ⇒ <code>any</code>

执行一次分页查询

**Kind**: instance method of [<code>Connection</code>](#Connection)  
**Returns**: <code>any</code> - 查询结果集  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| sql   | <code>string</code> | SQL语句             |
| page  | <code>number</code> | 当前页码，从1开始。 |
| size  | <code>number</code> | 每页的数据条数      |

<a name="Connection+transaction"></a>

### connection.transaction()

开启事务

**Kind**: instance method of [<code>Connection</code>](#Connection)  
<a name="Connection+commit"></a>

### connection.commit()

提交事务

**Kind**: instance method of [<code>Connection</code>](#Connection)  
<a name="Connection+rollback"></a>

### connection.rollback()

回滚事务

**Kind**: instance method of [<code>Connection</code>](#Connection)  
<a name="Connection+release"></a>

### connection.release()

释放连接

**Kind**: instance method of [<code>Connection</code>](#Connection)  
<a name="MySql"></a>

## MySql

mysql数据库访问对象

**Kind**: global class  

* [MySql](#MySql)
  * [.init()](#MySql+init)
  * [.connect(transaction)](#MySql+connect) ⇒ [<code>Connection</code>](#Connection)
  * [.transaction()](#MySql+transaction)
  * [.query(sql, logsql)](#MySql+query) ⇒ <code>any</code>
  * [.page(sql, page, size)](#MySql+page) ⇒ <code>any</code>

<a name="MySql+init"></a>

### mySql.init()

构造器

**Kind**: instance method of [<code>MySql</code>](#MySql)  
<a name="MySql+connect"></a>

### mySql.connect(transaction) ⇒ [<code>Connection</code>](#Connection)

连接数据库

**Kind**: instance method of [<code>MySql</code>](#MySql)  
**Returns**: [<code>Connection</code>](#Connection) - 数据库连接对象  

| Param       | Type                 | Default            | Description |
| ----------- | -------------------- | ------------------ | ----------- |
| transaction | <code>boolean</code> | <code>false</code> | 开启事务    |

<a name="MySql+transaction"></a>

### mySql.transaction()

连接数据库并开启事务。

**Kind**: instance method of [<code>MySql</code>](#MySql)  
<a name="MySql+query"></a>

### mySql.query(sql, logsql) ⇒ <code>any</code>

连接数据库，执行一次SQL查询，并自动释放连接。

**Kind**: instance method of [<code>MySql</code>](#MySql)  
**Returns**: <code>any</code> - 查询结果集  

| Param  | Type                 | Default           | Description     |
| ------ | -------------------- | ----------------- | --------------- |
| sql    | <code>string</code>  |                   | SQL语句         |
| logsql | <code>boolean</code> | <code>true</code> | 是否打印SQL语句 |

<a name="MySql+page"></a>

### mySql.page(sql, page, size) ⇒ <code>any</code>

连接数据库，执行一次分页查询，并自动释放连接。

**Kind**: instance method of [<code>MySql</code>](#MySql)  
**Returns**: <code>any</code> - 查询结果集  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| sql   | <code>string</code> | SQL语句             |
| page  | <code>number</code> | 当前页码，从1开始。 |
| size  | <code>number</code> | 每页的数据条数      |

<a name="Schedule"></a>

## Schedule

日程

* 日程是为了解决在特定的时刻执行任务的需求，例如：每周星期二上午九点执行任务A。
* 日程不是解决每隔单位时间执行任务的需求，如：每隔30秒执行任务B，你可以用计时器
  setInterval之类的方法完成这类需求。

**Kind**: global class  

* [Schedule](#Schedule)
  * [new Schedule(schedule, precision)](#new_Schedule_new)
  * [.running](#Schedule+running)
  * [.start(task)](#Schedule+start) ⇒ <code>boolean</code>
  * [.stop()](#Schedule+stop)

<a name="new_Schedule_new"></a>

### new Schedule(schedule, precision)

构造器


| Param     | Type                         | Description                |
| --------- | ---------------------------- | -------------------------- |
| schedule  | <code>ScheduleOptions</code> | 日程规则选项               |
| precision | <code>number</code>          | 日程检测精度，单位为毫秒。 |

<a name="Schedule+running"></a>

### schedule.running

获取日程是否在运行

**Kind**: instance property of [<code>Schedule</code>](#Schedule)  
<a name="Schedule+start"></a>

### schedule.start(task) ⇒ <code>boolean</code>

启动日程

**Kind**: instance method of [<code>Schedule</code>](#Schedule)  
**Returns**: <code>boolean</code> - 日程是否启动成功  

| Param | Type              | Description                       |
| ----- | ----------------- | --------------------------------- |
| task  | <code>Date</code> | 日程触发时的任务函数 (Date)=>void |

<a name="Schedule+stop"></a>

### schedule.stop()

停止日程

**Kind**: instance method of [<code>Schedule</code>](#Schedule)  
<a name="Channel"></a>

## Channel

邮件发送通道

**Kind**: global class  

* [Channel](#Channel)
  * [.send()](#Channel+send)
  * [.sendQuickly()](#Channel+sendQuickly)

<a name="Channel+send"></a>

### channel.send()

发送邮件

**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+sendQuickly"></a>

### channel.sendQuickly()

发送邮件，参数比send更简洁。

**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Duration"></a>

## Duration

时间段，代表两个时间点之间的时长。

**Kind**: global class  

* [Duration](#Duration)
  * [new Duration(duration)](#new_Duration_new)
  * [.value](#Duration+value)
  * [.accurateMilliseconds](#Duration+accurateMilliseconds)
  * [.accurateSeconds](#Duration+accurateSeconds)
  * [.accurateMinutes](#Duration+accurateMinutes)
  * [.accurateHours](#Duration+accurateHours)
  * [.accurateDays](#Duration+accurateDays)
  * [.accurateMonths](#Duration+accurateMonths)
  * [.accurateYears](#Duration+accurateYears)
  * [.milliseconds](#Duration+milliseconds)
  * [.seconds](#Duration+seconds)
  * [.minutes](#Duration+minutes)
  * [.hours](#Duration+hours)
  * [.days](#Duration+days)
  * [.months](#Duration+months)
  * [.years](#Duration+years)

<a name="new_Duration_new"></a>

### new Duration(duration)

构造器


| Param    | Type                | Description  |
| -------- | ------------------- | ------------ |
| duration | <code>number</code> | 时长的毫秒数 |

<a name="Duration+value"></a>

### duration.value

获取毫秒数

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateMilliseconds"></a>

### duration.accurateMilliseconds

获取精确的毫秒数，如：500.0毫秒。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateSeconds"></a>

### duration.accurateSeconds

获取精确的秒数，如：0.56秒。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateMinutes"></a>

### duration.accurateMinutes

获取精确的分钟数，如：0.54分钟。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateHours"></a>

### duration.accurateHours

获取精确的小时数，如：0.547小时.

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateDays"></a>

### duration.accurateDays

获取精确的天数，如：0.32天。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateMonths"></a>

### duration.accurateMonths

获取精确的月数（每月假设都是30天），如：0.6个月。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+accurateYears"></a>

### duration.accurateYears

获取精确的年数（每年假设是365.25天），如：1.7年。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+milliseconds"></a>

### duration.milliseconds

获取毫秒数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+seconds"></a>

### duration.seconds

获取秒数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+minutes"></a>

### duration.minutes

获取分钟数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+hours"></a>

### duration.hours

获取小时数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+days"></a>

### duration.days

获取天数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+months"></a>

### duration.months

获取月数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="Duration+years"></a>

### duration.years

获取年数，省略精确值的小数部分。

**Kind**: instance property of [<code>Duration</code>](#Duration)  
<a name="TimeSpan"></a>

## TimeSpan

时间区间，时间区间是由两个时间点构成的一段时间。
时间区间（TimeSpan）与时间段（Duration）的区别是
时间区间具有方向性（begin --> end），时间段没有方向性。

**Kind**: global class  

* [TimeSpan](#TimeSpan)
  * [new TimeSpan(begin, end)](#new_TimeSpan_new)
  * [.begin](#TimeSpan+begin)
  * [.end](#TimeSpan+end)
  * [.duration](#TimeSpan+duration)
  * [.include(timePoint)](#TimeSpan+include) ⇒ <code>boolean</code>
  * [.expand()](#TimeSpan+expand) ⇒ [<code>TimePoint</code>](#TimePoint) \| [<code>TimeSpan</code>](#TimeSpan)

<a name="new_TimeSpan_new"></a>

### new TimeSpan(begin, end)

构造器


| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| begin | <code>number</code> | 开始的时间戳 |
| end   | <code>number</code> | 结束时间戳   |

<a name="TimeSpan+begin"></a>

### timeSpan.begin

获取开始时间戳

**Kind**: instance property of [<code>TimeSpan</code>](#TimeSpan)  
<a name="TimeSpan+end"></a>

### timeSpan.end

获取结束时间戳

**Kind**: instance property of [<code>TimeSpan</code>](#TimeSpan)  
<a name="TimeSpan+duration"></a>

### timeSpan.duration

获取时间段

**Kind**: instance property of [<code>TimeSpan</code>](#TimeSpan)  
<a name="TimeSpan+include"></a>

### timeSpan.include(timePoint) ⇒ <code>boolean</code>

检测此时间区间是否包含时间点timePoint。

**Kind**: instance method of [<code>TimeSpan</code>](#TimeSpan)  
**Returns**: <code>boolean</code> - timePoint是否在此时间区间内  

| Param     | Type                   | Description |
| --------- | ---------------------- | ----------- |
| timePoint | <code>timePoint</code> | 时间点      |

<a name="TimeSpan+expand"></a>

### timeSpan.expand() ⇒ [<code>TimePoint</code>](#TimePoint) \| [<code>TimeSpan</code>](#TimeSpan)

将此时间区间扩展到指定的时间点timePoint处。

**Kind**: instance method of [<code>TimeSpan</code>](#TimeSpan)  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 目标时间点[<code>TimeSpan</code>](#TimeSpan) - 扩展后的此时间区间对象  
<a name="TimePoint"></a>

## TimePoint

时间点。表示时钟上一个特定的瞬间时间点。

**Kind**: global class  

* [TimePoint](#TimePoint)
  * [new TimePoint(timestamp)](#new_TimePoint_new)
  * _instance_
    * [.value](#TimePoint+value)
    * [.dateTime](#TimePoint+dateTime)
    * [.thisSecond](#TimePoint+thisSecond)
    * [.thisMinute](#TimePoint+thisMinute)
    * [.thisHour](#TimePoint+thisHour)
    * [.thisDay](#TimePoint+thisDay)
    * [.thisWeek](#TimePoint+thisWeek)
    * [.thisMonth](#TimePoint+thisMonth)
    * [.thisYear](#TimePoint+thisYear)
    * [.toString()](#TimePoint+toString)
    * [.add(duration)](#TimePoint+add) ⇒ [<code>TimePoint</code>](#TimePoint)
    * [.sub(duration)](#TimePoint+sub) ⇒ [<code>TimePoint</code>](#TimePoint)
    * [.from(timePoint)](#TimePoint+from) ⇒ [<code>TimePoint</code>](#TimePoint)
    * [.to(timePoint)](#TimePoint+to) ⇒ [<code>TimePoint</code>](#TimePoint)
  * _static_
    * [.now()](#TimePoint.now)
    * [.utc()](#TimePoint.utc)
    * [.parse()](#TimePoint.parse)

<a name="new_TimePoint_new"></a>

### new TimePoint(timestamp)

构造器


| Param     | Type                | Description                          |
| --------- | ------------------- | ------------------------------------ |
| timestamp | <code>number</code> | 时间戳，默认为创建此对象时的时间戳。 |

<a name="TimePoint+value"></a>

### timePoint.value

获取时间戳数值

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+dateTime"></a>

### timePoint.dateTime

获取日期时间结构

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisSecond"></a>

### timePoint.thisSecond

获取当前时间点所在的秒区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisMinute"></a>

### timePoint.thisMinute

获取当前时间点所在的分钟区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisHour"></a>

### timePoint.thisHour

获取当前时间点所在的小时区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisDay"></a>

### timePoint.thisDay

获取当前时间点所在的日期区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisWeek"></a>

### timePoint.thisWeek

获取当前时间点所在的周时间区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisMonth"></a>

### timePoint.thisMonth

获取当前所在时间点的月时间区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+thisYear"></a>

### timePoint.thisYear

获取当前时间点所在的年时间区间。

**Kind**: instance property of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+toString"></a>

### timePoint.toString()

转换成格式化字符串。格式字符串语法：

```
month/year => 03/2010
hour:minute:second => 08:45:59

完整语法如下：
year: 年份
month: 月份
date: 日期
hour: 小时
minute: 分钟
second: 秒
ms: 毫秒
```

**Kind**: instance method of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint+add"></a>

### timePoint.add(duration) ⇒ [<code>TimePoint</code>](#TimePoint)

加法，计算此时间点加上一段时间的时间点。

**Kind**: instance method of [<code>TimePoint</code>](#TimePoint)  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 结果时间点  

| Param    | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| duration | [<code>Duration</code>](#Duration) | 时间段      |

<a name="TimePoint+sub"></a>

### timePoint.sub(duration) ⇒ [<code>TimePoint</code>](#TimePoint)

减法，计算此时间点减去一段时间的时间点。

**Kind**: instance method of [<code>TimePoint</code>](#TimePoint)  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 结果时间点  

| Param    | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| duration | [<code>Duration</code>](#Duration) | 时间段      |

<a name="TimePoint+from"></a>

### timePoint.from(timePoint) ⇒ [<code>TimePoint</code>](#TimePoint)

计算从某个特定时间点开始到当前时间点结束的的时间区间。

**Kind**: instance method of [<code>TimePoint</code>](#TimePoint)  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 时间区间  

| Param     | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| timePoint | [<code>TimePoint</code>](#TimePoint) | 开始时间点  |

<a name="TimePoint+to"></a>

### timePoint.to(timePoint) ⇒ [<code>TimePoint</code>](#TimePoint)

计算从当前时间点开始到某个特定时间点结束的的时间区间。

**Kind**: instance method of [<code>TimePoint</code>](#TimePoint)  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 时间区间  

| Param     | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| timePoint | [<code>TimePoint</code>](#TimePoint) | 结束时间点  |

<a name="TimePoint.now"></a>

### TimePoint.now()

获取当前时刻的时间点。

**Kind**: static method of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint.utc"></a>

### TimePoint.utc()

获取dateTime结构所描述的UTC时间点。

**Kind**: static method of [<code>TimePoint</code>](#TimePoint)  
<a name="TimePoint.parse"></a>

### TimePoint.parse()

解析时间字符串，相当于Date.parse()。

**Kind**: static method of [<code>TimePoint</code>](#TimePoint)  


<a name="WebApp"></a>

## WebApp

WebApp

* Web服务端应用，从Koa继承而来。

**Kind**: global class  
<a name="hopByHopHeaders"></a>

## hopByHopHeaders

13.5.1 End-to-end and Hop-by-hop Headers

Hop-by-hop headers must be removed by the proxy before passing it on to the
next endpoint. Per-request basis hop-by-hop headers MUST be listed in a
Connection header, (section 14.10) to be introduced into HTTP/1.1 (or later).

**Kind**: global variable  
<a name="isHttps"></a>

## isHttps()

判断url是否是https

**Kind**: global function  
<a name="combineUrlAndParams"></a>

## combineUrlAndParams()

将data对象的数据以key=value的方式合并到url之后，并返回合并之后的url。

**Kind**: global function  
<a name="sign"></a>

## sign(data, secret) ⇒ <code>string</code>

对http请求数据签名，内部采用MD5算法生成签名指纹。

**Kind**: global function  
**Returns**: <code>string</code> - 签名指纹  

| Param  | Type                | Description              |
| ------ | ------------------- | ------------------------ |
| data   | <code>object</code> | 用于签名的http请求数据。 |
| secret | <code>string</code> | 用于签名的密钥。         |

<a name="getRequestOptions"></a>

## getRequestOptions()

将url解析成通用的请求选项参数。

**Kind**: global function  
<a name="request"></a>

## request()

发起一次HTTP请求

**Kind**: global function  
<a name="get"></a>

## get()

发起一次HTTP的GET请求。

**Kind**: global function  
<a name="post"></a>

## post()

发起一次HTTP的POST请求。

**Kind**: global function  
<a name="call"></a>

## call()

调用一次HTTP接口。HTTP接口统一采用POST方式进行通讯。

**Kind**: global function  
<a name="makeRPC"></a>

## makeRPC()

定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。

**Kind**: global function  
<a name="rpc"></a>

## rpc()

定义一组以base地址开头的接口列表，返回接口对象。接口对象会被转换成驼峰命名。

**Kind**: global function  
<a name="setup"></a>

## setup(proxyServer, proxyOptions)

Sets up an `http.Server` or `https.Server` instance with the necessary
"request" and "connect" event listeners in order to make the server act as an
HTTP proxy.

**Kind**: global function  
**Api**: public  

| Param        | Type                                                  |
| ------------ | ----------------------------------------------------- |
| proxyServer  | <code>http.Server</code> \| <code>https.Server</code> |
| proxyOptions | <code>Object</code>                                   |

<a name="eachHeader"></a>

## eachHeader()

Iterator function for the request/response's "headers".
Invokes `fn` for "each" header entry in the request.

**Kind**: global function  
**Api**: private  
<a name="onrequest"></a>

## onrequest()

HTTP GET/POST/DELETE/PUT, etc. proxy requests.

**Kind**: global function  
<a name="onconnect"></a>

## onconnect()

HTTP CONNECT proxy requests.

**Kind**: global function  
<a name="authenticate"></a>

## authenticate(server, req, fn)

Checks `Proxy-Authorization` request headers. Same logic applied to CONNECT
requests as well as regular HTTP requests.

**Kind**: global function  
**Api**: private  

| Param  | Type                            | Description       |
| ------ | ------------------------------- | ----------------- |
| server | <code>http.Server</code>        |                   |
| req    | <code>http.ServerRequest</code> |                   |
| fn     | <code>function</code>           | callback function |

<a name="requestAuthorization"></a>

## requestAuthorization()

Sends a "407 Proxy Authentication Required" HTTP response to the `socket`.

**Kind**: global function  
**Api**: private  
<a name="webapp"></a>

## webapp()

创建一个基于koa2的web应用。

**Kind**: global function  
<a name="body"></a>

## body()

创建一个body解析器中间件，详细选项设置请参考body模块。

**Kind**: global function  
<a name="send"></a>

## send()

发送http响应

**Kind**: global function  
<a name="sendFile"></a>

## sendFile()

发送响应文件。

**Kind**: global function  
<a name="handler"></a>

## handler()

将func函数包装成一个中间件

**Kind**: global function  

<a name="rules"></a>

## rules

数据格式校验规则，其中包含两类：

* 正则表达式
* 接口：{test: (val)=>boolean}

**Kind**: global variable  
<a name="MS_PER_SECOND"></a>

## MS\_PER\_SECOND

常量：每秒钟的毫秒数

**Kind**: global variable  
<a name="MS_PER_MINUTE"></a>

## MS\_PER\_MINUTE

常量：每分钟的毫秒数

**Kind**: global variable  
<a name="MS_PER_HOUR"></a>

## MS\_PER\_HOUR

常量：每小时的毫秒数

**Kind**: global variable  
<a name="MS_PER_DAY"></a>

## MS\_PER\_DAY

常量：每天的毫秒数

**Kind**: global variable  
<a name="MS_PER_WEEK"></a>

## MS\_PER\_WEEK

常量：每周的毫秒数

**Kind**: global variable  
<a name="error"></a>

## error(错误名称，推荐使用形如‘ERR_INVALID_ARGS’的命名规则，具体业务不做强制要求。, message) ⇒ <code>Error</code>

构造一个新的错误对象，一般调用方式形如：throw error('ERR_NAME', 'message');

**Kind**: global function  
**Returns**: <code>Error</code> - 构建的错误对象  

| Param                                                        | Type                | Description |
| ------------------------------------------------------------ | ------------------- | ----------- |
| 错误名称，推荐使用形如‘ERR_INVALID_ARGS’的命名规则，具体业务不做强制要求。 | <code>name</code>   |             |
| message                                                      | <code>string</code> | 错误信息    |

<a name="checkError"></a>

## checkError()

检查错误，此函数会检查形如（err, ret）的错误。检查规则：

* err是一个Error实例，返回true。
* ret.result !== 'ok', 返回true。

**Kind**: global function  
<a name="make"></a>

## make()

包装函数参数到一个通用操作封包对象，此函数可能的使用场景如下：

```
makeCOP(err);
makeCOP(ret);
makeCOP(null, ret);
```

**Kind**: global function  
<a name="hash"></a>

## hash(alg, data) ⇒ <code>string</code>

用指定hash算法计算data的hash编码。

**Kind**: global function  
**Returns**: <code>string</code> - data的hash值  

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| alg   | <code>string</code>                        | hash算法的名称       |
| data  | <code>string</code> \| <code>Buffer</code> | 用来做hash计算的数据 |

<a name="md5"></a>

## md5(data) ⇒ <code>string</code>

计算data的md5值

**Kind**: global function  
**Returns**: <code>string</code> - data的md5值  

| Param | Type                                       | Description         |
| ----- | ------------------------------------------ | ------------------- |
| data  | <code>string</code> \| <code>Buffer</code> | 用于做md5计算的数据 |

<a name="sha256"></a>

## sha256(data) ⇒ <code>string</code>

计算data的sha256值

**Kind**: global function  
**Returns**: <code>string</code> - data的sha256值  

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| data  | <code>string</code> \| <code>Buffer</code> | 用于计算sha256的数据 |

<a name="encode_aes_256_cbc"></a>

## encode\_aes\_256\_cbc(key, content) ⇒ <code>string</code>

使用aes-256-cbc算法对数据进行编码

**Kind**: global function  
**Returns**: <code>string</code> - 加密后的密文  

| Param   | Type                | Description    |
| ------- | ------------------- | -------------- |
| key     | <code>string</code> | 用于加密的密钥 |
| content | <code>string</code> | 被加密的数据   |

<a name="decode_aes_256_cbc"></a>

## decode\_aes\_256\_cbc(key, content) ⇒ <code>string</code>

对一串使用aes-256-cbc算法加密的密文进行解码

**Kind**: global function  
**Returns**: <code>string</code> - 解码后的数据  

| Param   | Type                | Description |
| ------- | ------------------- | ----------- |
| key     | <code>string</code> | 解密密钥    |
| content | <code>string</code> | 密文数据    |

<a name="encode_base64"></a>

## encode\_base64(content) ⇒ <code>string</code>

对数据进行base64编码

**Kind**: global function  
**Returns**: <code>string</code> - base64字符串  

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| content | <code>string</code> | 用于base64编码的数据 |

<a name="decode_base64"></a>

## decode\_base64(content) ⇒ <code>string</code>

对base64编码的字符串进行解码

**Kind**: global function  
**Returns**: <code>string</code> - base64解码后的数据  

| Param   | Type                | Description      |
| ------- | ------------------- | ---------------- |
| content | <code>string</code> | base64编码字符串 |

<a name="encode_hex64"></a>

## encode\_hex64(content) ⇒

将一段十六进制的字符串进行base64编码

**Kind**: global function  
**Returns**: 编码后的数据  

| Param   | Type                | Description    |
| ------- | ------------------- | -------------- |
| content | <code>string</code> | 十六进制字符串 |

<a name="decode_hex64"></a>

## decode\_hex64(content) ⇒ <code>string</code>

对一段被base64编码过的十六进制字符串进行解码

**Kind**: global function  
**Returns**: <code>string</code> - 十六进制字符串  

| Param   | Type                | Description  |
| ------- | ------------------- | ------------ |
| content | <code>string</code> | base64字符串 |

<a name="rs"></a>

## rs(length, characters) ⇒ <code>string</code>

获取一个随机字符串（random string）

**Kind**: global function  
**Returns**: <code>string</code> - 随机字符串  

| Param      | Type                            | Description                                                  |
| ---------- | ------------------------------- | ------------------------------------------------------------ |
| length     | <code>number</code>             | 随机字符串的长度                                             |
| characters | <code>Array.&lt;char&gt;</code> | 随机字符串的字符表，随机字符串中的所有字符将从此自负表中随机抽取。 |

<a name="rsod"></a>

## rsod(len) ⇒ <code>string</code>

获取一个十进制的随机数字字符串（random string of digit）

**Kind**: global function  
**Returns**: <code>string</code> - 随机十进制数字字符串  

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| len   | <code>number</code> | 字符串的长度 |

<a name="rsox"></a>

## rsox(len) ⇒ <code>string</code>

获取一个十六进制的随机数字字符串（random string of hex）

**Kind**: global function  
**Returns**: <code>string</code> - 随机十六进制数字字符串  

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| len   | <code>number</code> | 字符串的长度 |

<a name="rsoa"></a>

## rsoa(len) ⇒ <code>string</code>

获取一个随机字母字符串（random string of alpha）

**Kind**: global function  
**Returns**: <code>string</code> - 随机字母字符串  

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| len   | <code>number</code> | 字符串的长度 |

<a name="rsow"></a>

## rsow(len) ⇒ <code>string</code>

获取一个由数字、字母组成的随机字符串（random string of word）

**Kind**: global function  
**Returns**: <code>string</code> - 由数字、字母组成的随机字符串.  

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| len   | <code>number</code> | 字符串的长度 |

<a name="rsop"></a>

## rsop(len) ⇒ <code>string</code>

获取一个由可打印字符组成的随机字符串（random string of printable)

**Kind**: global function  
**Returns**: <code>string</code> - 一个由可打印字符组成的随机字符串  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| len   | <code>number</code> | 字符串长度  |

<a name="create"></a>

## create() ⇒ [<code>Flake</code>](#Flake)

创建一个flake对象

**Kind**: global function  
**Returns**: [<code>Flake</code>](#Flake) - 雪花算法唯一编码生成器对象  

| Param            | Type                |
| ---------------- | ------------------- |
| 节点编号，0-255. | <code>number</code> |

<a name="has"></a>

## has(obj, field) ⇒ <code>boolean</code>

obj中是否存在field字段

**Kind**: global function  
**Returns**: <code>boolean</code> - 结果  

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| obj   | <code>object</code> | 待检查的对象     |
| field | <code>string</code> | 待检查的字段名称 |

<a name="hasOne"></a>

## hasOne(obj, fields) ⇒ <code>boolean</code>

字段列表中的其中一个字段在obj中是否存在。

**Kind**: global function  
**Returns**: <code>boolean</code> - 结果  

| Param  | Type                              | Description      |
| ------ | --------------------------------- | ---------------- |
| obj    | <code>object</code>               | 待检查的对象     |
| fields | <code>Array.&lt;string&gt;</code> | 待检查的字段列表 |

<a name="hasAll"></a>

## hasAll(obj, fields) ⇒ <code>boolean</code>

字段列表中的字段在obj中是否全部存在。

**Kind**: global function  
**Returns**: <code>boolean</code> - 结果  

| Param  | Type                              | Description      |
| ------ | --------------------------------- | ---------------- |
| obj    | <code>object</code>               | 待检查的对象     |
| fields | <code>Array.&lt;string&gt;</code> | 待检查的字段列表 |

<a name="assertOne"></a>

## assertOne(obj, fields)

断言字段列表fields中的字段在对象obj中至少存在一个。如果断言失败，会抛出错误。

**Kind**: global function  

| Param  | Type                              | Description      |
| ------ | --------------------------------- | ---------------- |
| obj    | <code>object</code>               | 待检查的对象     |
| fields | <code>Array.&lt;string&gt;</code> | 待检查的字段列表 |

<a name="assertAll"></a>

## assertAll(obj, fields)

断言字段列表fields中的全部字段在对象obj中都存在。断言失败会抛出错误。

**Kind**: global function  

| Param  | Type                              | Description      |
| ------ | --------------------------------- | ---------------- |
| obj    | <code>object</code>               | 待检查的对象     |
| fields | <code>Array.&lt;string&gt;</code> | 待检查的字段列表 |

<a name="optional"></a>

## optional(field, format, minlen, maxlen, defaultValue) ⇒ <code>boolean</code>

可选项检查，如果字段存在就进行数据格式校验，如果字段不存在就返回默认值。

**Kind**: global function  
**Returns**: <code>boolean</code> - 字段是否存在  

| Param        | Type                                       | Description    |
| ------------ | ------------------------------------------ | -------------- |
| field        | <code>T</code>                             | 待检查的字段值 |
| format       | <code>string</code> \| <code>RegExp</code> | 校验规则       |
| minlen       | <code>number</code>                        | 最小长度       |
| maxlen       | <code>number</code>                        | 最大长度       |
| defaultValue | <code>T</code>                             | 默认值         |

<a name="required"></a>

## required(field, format, minlen, maxlen) ⇒ <code>boolean</code>

必备项检查，如果字段存在就进行数据格式校验，如果字段不存在就抛出错误。

**Kind**: global function  
**Returns**: <code>boolean</code> - 字段是否存在  

| Param  | Type                                       | Description    |
| ------ | ------------------------------------------ | -------------- |
| field  | <code>T</code>                             | 待检查的字段值 |
| format | <code>string</code> \| <code>RegExp</code> | 校验规则       |
| minlen | <code>number</code>                        | 最小长度       |
| maxlen | <code>number</code>                        | 最大长度       |

<a name="decompress"></a>

## decompress()

对http响应数据进行解压。如果http响应数据采用了gzip压缩，就进行解压，否则什么都不做。

**Kind**: global function  
<a name="decode"></a>

## decode()

对http响应数据进行解码。如果http响应数据采用了特殊编码格式就进行解码，否则什么都不做。

**Kind**: global function  
<a name="escape"></a>

## escape()

对HTML字符串中的特殊字符进行转义。

**Kind**: global function  
<a name="init"></a>

## init(scope)

初始化日志模块

**Kind**: global function  

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| scope | <code>string</code> | 日志的前缀标签 |

<a name="init"></a>

## init()

初始化全局MySql对象

**Kind**: global function  
<a name="connect"></a>

## connect(transaction) ⇒ [<code>Connection</code>](#Connection)

连接数据库

**Kind**: global function  
**Returns**: [<code>Connection</code>](#Connection) - 数据库连接对象  

| Param       | Type                 | Description |
| ----------- | -------------------- | ----------- |
| transaction | <code>boolean</code> | 开启事务    |

<a name="transaction"></a>

## transaction()

连接数据库并开启事务。

**Kind**: global function  
<a name="query"></a>

## query(sql, logsql) ⇒ <code>any</code>

连接数据库，执行一次SQL查询，并自动释放连接。

**Kind**: global function  
**Returns**: <code>any</code> - 查询结果集  

| Param  | Type                 | Description     |
| ------ | -------------------- | --------------- |
| sql    | <code>string</code>  | SQL语句         |
| logsql | <code>boolean</code> | 是否打印SQL语句 |

<a name="page"></a>

## page(sql, page, size) ⇒ <code>any</code>

连接数据库，执行一次分页查询，并自动释放连接。

**Kind**: global function  
**Returns**: <code>any</code> - 查询结果集  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| sql   | <code>string</code> | SQL语句             |
| page  | <code>number</code> | 当前页码，从1开始。 |
| size  | <code>number</code> | 每页的数据条数      |

<a name="exec"></a>

## exec()

执行一条命令

**Kind**: global function  
<a name="execSync"></a>

## execSync()

同步执行一调命令

**Kind**: global function  
<a name="duration"></a>

## duration(ms) ⇒ [<code>Duration</code>](#Duration)

创建一个时间段对象

**Kind**: global function  
**Returns**: [<code>Duration</code>](#Duration) - 时间段对象  

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| ms    | <code>number</code> | 时间段的毫秒数 |

<a name="span"></a>

## span(beginTimeStamp, endTimeStamp) ⇒ [<code>TimeSpan</code>](#TimeSpan)

创建一个时间区间对象。

**Kind**: global function  
**Returns**: [<code>TimeSpan</code>](#TimeSpan) - 时间区间对象  

| Param          | Type                                                        | Description |
| -------------- | ----------------------------------------------------------- | ----------- |
| beginTimeStamp | <code>number</code> \| [<code>TimePoint</code>](#TimePoint) | 开始时刻    |
| endTimeStamp   | <code>number</code> \| [<code>TimePoint</code>](#TimePoint) | 结束时刻    |

<a name="point"></a>

## point(timestamp) ⇒ [<code>TimePoint</code>](#TimePoint)

创建一个时间点对象。

**Kind**: global function  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 时间点对象  

| Param     | Type                | Description |
| --------- | ------------------- | ----------- |
| timestamp | <code>number</code> | 时间戳      |

<a name="now"></a>

## now()

获取现在时刻的时间点对象。

**Kind**: global function  
<a name="utc"></a>

## utc()

获取dateTime结构所描述的UTC时间点。

**Kind**: global function  
<a name="parse"></a>

## parse()

解析时间字符串，相当于Date.parse()。

**Kind**: global function  
<a name="add"></a>

## add(timePoint, duration) ⇒ [<code>TimePoint</code>](#TimePoint)

计算时间点timePoint加上时间段duration的时间点。

**Kind**: global function  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 结果时间点对象  

| Param     | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| timePoint | [<code>TimePoint</code>](#TimePoint) | 时间点对象  |
| duration  | [<code>Duration</code>](#Duration)   | 时间段对象  |

<a name="sub"></a>

## sub(timePoint, duration) ⇒ [<code>TimePoint</code>](#TimePoint)

计算时间点timePoint减去时间段duration的时间点。

**Kind**: global function  
**Returns**: [<code>TimePoint</code>](#TimePoint) - 结果时间点对象  

| Param     | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| timePoint | [<code>TimePoint</code>](#TimePoint) | 时间点对象  |
| duration  | [<code>Duration</code>](#Duration)   | 时间段对象  |

<a name="delay"></a>

## delay(time)

延迟，一般用法为:

``` js
await delay(0.5) // 延迟0.5秒
```

**Kind**: global function  

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| time  | <code>number</code> | 需要延迟的时间，单位为秒。 |

<a name="absolutePath"></a>

## absolutePath()

获取路径p的绝对路径

* 如果p以 '/' 开始，返回相对于当前进程cwd的绝对路径。

**Kind**: global function  
<a name="camelCase"></a>

## camelCase()

获取name的驼峰形式。如：

```
get_user_info => getUserInfo
_get_user_info => GetUserInfo
```

**Kind**: global function  
<a name="camelCaseKeys"></a>

## camelCaseKeys()

将对象obj的key全部变成驼峰形式。

**Kind**: global function  
<a name="compareVersion"></a>

## compareVersion(versionA, versionB) ⇒ <code>number</code>

对两个版本进行比较

* versionA === versionB：返回 0
* versionA < versionB： 返回 -1
* versionA > versionB： 返回 1

**Kind**: global function  

| Param    | Type                | Description        |
| -------- | ------------------- | ------------------ |
| versionA | <code>string</code> | 第一个版本号字符串 |
| versionB | <code>string</code> | 第二个版本号字符串 |

<a name="computeGeoDistance"></a>

## computeGeoDistance()

计算地球球面上两个经纬点之间的地理距离。

**Kind**: global function  