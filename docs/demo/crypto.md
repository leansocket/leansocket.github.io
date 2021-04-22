# 加密
在 Web 应用中对于数据的加密，解密也是十分的常见，比如存入数据库的账户密码,token等都会用到数据的加密与解密。

同样框架也提供了常用的加hash算法、加密解密算法的接口。其用法也大同小异，您可以参考我们的API文档。

## md5
计算data的md5值
````js
const libs = require('nodex-libs');
const crypto = libs.crypto;

let md5Test = crypto.md5('123456');
console.log(md5Test);
// e10adc3949ba59abbe56e057f20f883e
````

## sha256
计算data的sha256值
````js
const libs = require('nodex-libs');
const crypto = libs.crypto;

let sha256Test = crypto.sha256('123456');
console.log(sha256Test);
// 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
````

## encode_aes_256_cbc
使用aes-256-cbc算法对数据进行编码
````js
const libs = require('nodex-libs');
const crypto = libs.crypto;

let test = crypto.encode_aes_256_cbc('^dU~sTmYV$DjC&b*', '123456');
console.log(test);
/// ce51bdc7459e539514f5ddc01f6c51a8.
````

对刚刚通过aes-256-cbc算法加密的密文进行解码
````js
const libs = require('nodex-libs');
const crypto = libs.crypto;

let decode = crypto.decode_aes_256_cbc('^dU~sTmYV$DjC&b*', 'ce51bdc7459e539514f5ddc01f6c51a8');
console.log(decode);
// 123456
````


`nodex-libs`还支持许多常用的加hash算法、加密解密算法的接口，其用法也大同小异，您可以参考我们的API文档。

## 获取随机字符串
框架还提供获取各种内容的随机字符串的接口。`crypto.rs(length, character)`,其中character为字符表，随机字符串中的所有字符将从此字符表中随机抽取。

框架也封装了一些常用的字符表的方法，如十进制，十六进制，随机字母等，您可以参考我们的API文档。

如下从传入的字符表中，获取一个8为长度的随机字符串。

````js
const libs = require('nodex-libs');
const crypto = libs.crypto;

let rss = crypto.rs(8, ['d', 'f', 5, 4, 's', 'w']);
console.log(rss); 
// 5dwss5d

// 获取一个长8位的十进制的随机数字字符串
let rsods = crypto.rsod(8);
console.log(rsods);
// 49313168
````



