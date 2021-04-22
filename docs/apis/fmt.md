# Fmt

## Members

<a name="rules"></a>

#### rules

数据格式校验规则，其中包含两类：

* 正则表达式
* 接口：{test: (val)=>boolean}

**Kind**: global variable  

```typescript
export const rules = {
    'string': {
        test: function (val) {
            return typeof (val) === 'string';
        }
    },
    'number': {
        test: function (val) {
            return typeof (val) === 'number';
        }
    },
    'boolean': {
        test: function (val) {
            return typeof (val) === 'boolean';
        }
    },
    'function': {
        test: function (val) {
            return typeof (val) === 'function';
        }
    },
    'object': {
        test: function (val) {
            return typeof (val) === 'object';
        }
    },
    'array': {
        test: function (val) {
            return Array.isArray(val);
        }
    },
    'integer': {
        test: function (val) {
            return typeof (val) === 'number' && rules['integer_str'].test(val.toString());
        }
    },
    'float': {
        test: function (val) {
            return typeof (val) === 'number' && rules['float_str'].test(val.toString());
        }
    },

    'alpha': /^[a-zA-Z]+$/,
    'number_str': /^\d+$/,
    'integer_str': /^[-+]?\d+$/,
    'float_str': /^[-+]?\d+(\.\d+)?$/,
    'hex': /^(0x|0X)?[a-fA-F\d]+$/,
    'word': /^\w+$/,
    'chinese': /^[\u4E00-\u9FA5]+$/,

    'name': /^[\w-.]+$/,
    'identifier': /^[A-Za-z_]\w*$/,

    'username': /^[\w@+\-.]+$/,
    
    'password': /^[\w~!@#$%^&*()+=\-.,:{}\[\]|\\]+$/,
    'email': /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)+$/,
    'url': /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/,
    'ipv4': /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/,
    'ipv6': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    'html': /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
};
```

## Functions

- [has(obj, field)](#has) ⇒ `boolean`

  obj中是否存在field字段

- [hasOne(obj, fields)](#hasOne) ⇒ `boolean`

  字段列表中的其中一个字段在obj中是否存在。

- [hasAll(obj, fields)](#hasAll) ⇒ `boolean`

  字段列表中的字段在obj中是否全部存在。

- [assertOne(obj, fields)](#assertOne)

  断言字段列表fields中的字段在对象obj中至少存在一个。如果断言失败，会抛出错误。

- [assertAll(obj, fields)](#assertAll)

  断言字段列表fields中的全部字段在对象obj中都存在。断言失败会抛出错误。

- [optional(field, format, minlen, maxlen, defaultValue)](#optional) ⇒ `boolean`

  可选项检查，如果字段存在就进行数据格式校验，如果字段不存在就返回默认值。

- [required(field, format, minlen, maxlen)](#required) ⇒ `boolean`

  必备项检查，如果字段存在就进行数据格式校验，如果字段不存在就抛出错误。

<a name="has"></a>

## has(obj, field) ⇒ `boolean`

obj中是否存在field字段

**Kind**: global function   **Returns**: `boolean` - 结果  

| Param | Type     | Description      |
| ----- | -------- | ---------------- |
| obj   | `object` | 待检查的对象     |
| field | `string` | 待检查的字段名称 |

<a name="hasOne"></a>

## hasOne(obj, fields) ⇒ `boolean`

字段列表中的其中一个字段在obj中是否存在。

**Kind**: global function   **Returns**: `boolean` - 结果  

| Param  | Type             | Description      |
| ------ | ---------------- | ---------------- |
| obj    | `object`         | 待检查的对象     |
| fields | `Array.<string>` | 待检查的字段列表 |

<a name="hasAll"></a>

## hasAll(obj, fields) ⇒ `boolean`

字段列表中的字段在obj中是否全部存在。

**Kind**: global function   **Returns**: `boolean` - 结果  

| Param  | Type             | Description      |
| ------ | ---------------- | ---------------- |
| obj    | `object`         | 待检查的对象     |
| fields | `Array.<string>` | 待检查的字段列表 |

<a name="assertOne"></a>

## assertOne(obj, fields)

断言字段列表fields中的字段在对象obj中至少存在一个。如果断言失败，会抛出错误。

**Kind**: global function  

| Param  | Type             | Description      |
| ------ | ---------------- | ---------------- |
| obj    | `object`         | 待检查的对象     |
| fields | `Array.<string>` | 待检查的字段列表 |

<a name="assertAll"></a>

## assertAll(obj, fields)

断言字段列表fields中的全部字段在对象obj中都存在。断言失败会抛出错误。

**Kind**: global function  

| Param  | Type             | Description      |
| ------ | ---------------- | ---------------- |
| obj    | `object`         | 待检查的对象     |
| fields | `Array.<string>` | 待检查的字段列表 |

<a name="optional"></a>

## optional(field, format, minlen, maxlen, defaultValue) ⇒ `boolean`

可选项检查，如果字段存在就进行数据格式校验，如果字段不存在就返回默认值。

**Kind**: global function   **Returns**: `boolean` - 字段是否存在  

| Param        | Type     | Description    |
| ------------ | -------- | -------------- |
| field        | `T`      | 待检查的字段值 |
| format       | `string` | `RegExp`       |
| minlen       | `number` | 最小长度       |
| maxlen       | `number` | 最大长度       |
| defaultValue | `T`      | 默认值         |

<a name="required"></a>

## required(field, format, minlen, maxlen) ⇒ `boolean`

必备项检查，如果字段存在就进行数据格式校验，如果字段不存在就抛出错误。

**Kind**: global function   **Returns**: `boolean` - 字段是否存在  

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| field  | `T`      | 待检查的字段值 |
| format | `string` | `RegExp`       |
| minlen | `number` | 最小长度       |
| maxlen | `number` | 最大长度       |

# HTML

## Functions

- [decompress()](#decompress)

  对http响应数据进行解压。如果http响应数据采用了gzip压缩，就进行解压，否则什么都不做。

- [decode()](#decode)

  对http响应数据进行解码。如果http响应数据采用了特殊编码格式就进行解码，否则什么都不做。

- [escape()](#escape)

  对HTML字符串中的特殊字符进行转义。

<a name="decompress"></a>

## decompress()

对http响应数据进行解压。如果http响应数据采用了gzip压缩，就进行解压，否则什么都不做。

**Kind**: global function   <a name="decode"></a>

## decode()

对http响应数据进行解码。如果http响应数据采用了特殊编码格式就进行解码，否则什么都不做。

**Kind**: global function   <a name="escape"></a>

## escape()

对HTML字符串中的特殊字符进行转义。

**Kind**: global function  