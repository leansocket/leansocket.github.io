# Common

## Functions

- [error(错误名称，推荐使用形如‘ERR_INVALID_ARGS’的命名规则，具体业务不做强制要求。, message)](#error) ⇒ `Error`

  构造一个新的错误对象，一般调用方式形如：throw error('ERR_NAME', 'message');

- [checkError()](#checkError)

  检查错误，此函数会检查形如（err, ret）的错误。检查规则：err是一个Error实例，返回true。ret.result !== 'ok', 返回true。

- [make()](#make)

  包装函数参数到一个通用操作封包对象，此函数可能的使用场景如下：`makeCOP(err); makeCOP(ret); makeCOP(null, ret); `

<a name="error"></a>

## error(错误名称, message) ⇒ `Error`

构造一个新的错误对象，一般调用方式形如：throw error('ERR_NAME', 'message');

**Kind**: global function   **Returns**: `Error` - 构建的错误对象  

| Param                                                        | Type     | Description |
| ------------------------------------------------------------ | -------- | ----------- |
| 错误名称，推荐使用形如‘ERR_INVALID_ARGS’的命名规则，具体业务不做强制要求。 | `name`   |             |
| message                                                      | `string` | 错误信息    |

<a name="checkError"></a>

## checkError()

检查错误，此函数会检查形如（err, ret）的错误。检查规则：

- err是一个Error实例，返回true。
- ret.result !== 'ok', 返回true。

**Kind**: global function   <a name="make"></a>

## make()

包装函数参数到一个通用操作封包对象，此函数可能的使用场景如下：

```
makeCOP(err);
```

```
makeCOP(ret);
```

```
makeCOP(null, ret);
```

**Kind**: global function   