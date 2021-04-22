# 身份识别
**登录鉴权** 是一个常见的业务场景，包括`账号密码登录方式`,`邮箱手机号验证码登录`等方式,都可以用于实现用户身份的鉴别或识别用户操作是否属于本人。

同时，框架提供了基于Token、验证码、验证键的用户身份识别方法。

## Token
 一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和 安全校验的信息。
### 生成
在生成一个token工具类，需要设置token用于加密的密钥`secret`,以及token的过期时长`timeout`,单位为秒。

如下生成一个密钥为`^dU~sTmYV$DjC&b*`，过期时间为10分钟的token。

````js
const libs = require('nodex-libs');
const authes = libs.authes;

let token = new authes.Token('^dU~sTmYV$DjC&b*', 600);
// 生成token字符串，make()可以暂存一些数据在token中
let newToken = token.make('暂存');
console.log(newToken);
// 5KvC7IsK2HGIcRCu/cB+YZlfDqjbFr3OBzO74qiScMEkR5CkiRAZd2TQC6Qwul5R
````

### 验证
`check()`用于解密并验证token。如果验证成功，返回token中保存的数据。 如果验证失败，则返回undefined。

如下验证刚才上面生成的token
````js
const libs = require('nodex-libs');
const authes = libs.authes;

let token = new authes.Token('^dU~sTmYV$DjC&b*', 600);
// 验证刚才生成的token
let res = token.check('5KvC7IsK2HGIcRCu/cB+YZlfDqjbFr3OBzO74qiScMEkR5CkiRAZd2TQC6Qwul5R');
console.log(res);
// { data: '暂存', time: 1618645895000, life: 600000 }
````