# 数据校验
框架提供简洁的数据格式/表单校验方法，其中必备项检查，如果字段存在就进行数据格式校验，如果字段不存在就抛出错误。当数据不符合格式，则自动抛出异常，符合格式则返回`true`；

**required(field, format, minlen, maxlen)**
- field	T	待检查的字段值
- format	string	RegExp
- minlen	number	最小长度
- maxlen	number	最大长度

如下校验一个字段，其格式为最小长度为0，最大长度为30的string类型。
````js
const libs = require('nodex-libs');
const fmt = libs.fmt;

let title = "test";
fmt.required(title,'string',0,30); // true
````