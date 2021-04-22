# Authes

## Classes

- [Token](#Token)

  Token,这是一个简易的对称加密token工具类。用于实现用户身份的鉴别。 一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和 安全校验的信息。

- [Code](#Code)

  验证码此类用于创建验证码对象。验证码对象可识别用户操作是否属于本人。验证码是一串有限长度（通常是4-8个）的数字字符串。验证码生成后可发到用户信任的手机或邮箱。验证码都有时效性，超时后验证码将会失效，失效的验证码将不会通过检查。此类只用于生成验证码字符串或检查验证码字符串的合法性。如果期望发送手机短信或邮件需要专门 的模块（sms或smtp）进行。

- [Key](#Key)

  验证键验证键是一种特殊的验证码。它和普通验证码的区别是能保证唯一性。这种唯一性不是全局唯一，是在所有已经生成但未检查的编码中的唯一， 即如果现已经生成1000个编码都还未检查也未失效，新生成的验证键值能保证与 当前这1000个键值都不同。

<a name="Token"></a>

## Token

Token,这是一个简易的对称加密token工具类。用于实现用户身份的鉴别。 一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和 安全校验的信息。

**Kind**: global class  

- [Token](#Token)
  - [new Token(secret, timeout)](#new_Token_new)
  - [.sign()](#Token+sign)
  - [.make(data)](#Token+make) ⇒ `string`
  - [.check(token)](#Token+check) ⇒ `TokenSession`

<a name="new_Token_new"></a>

### new Token(secret, timeout)

构造器

| Param   | Type     | Description                 |
| ------- | -------- | --------------------------- |
| secret  | `string` | 用于加密的密钥              |
| timeout | `number` | token的过期时长，单位为秒。 |

<a name="Token+sign"></a>

### token.sign()

对数据进行签名

**Kind**: instance method of [`Token`](#Token)   <a name="Token+make"></a>

### token.make(data) ⇒ `string`

生成token字符串

**Kind**: instance method of [`Token`](#Token)   **Returns**: `string` - token密文字符串，可以传递给客户端。  

| Param | Type  | Description                     |
| ----- | ----- | ------------------------------- |
| data  | `any` | 暂存在token中的数据，尽量简短。 |

<a name="Token+check"></a>

### token.check(token) ⇒ `TokenSession`

解密并验证token。如果验证成功，返回token中保存的数据。 如果验证失败，则返回undefined。

**Kind**: instance method of [`Token`](#Token)   **Returns**: `TokenSession` - token的sessio信息  

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| token | `string` | 待验证的token字符串 |

<a name="Code"></a>

## Code

验证码

- 此类用于创建验证码对象。验证码对象可识别用户操作是否属于本人。
- 验证码是一串有限长度（通常是4-8个）的数字字符串。验证码生成后可发到用户信任的手机或邮箱。
- 验证码都有时效性，超时后验证码将会失效，失效的验证码将不会通过检查。
- 此类只用于生成验证码字符串或检查验证码字符串的合法性。如果期望发送手机短信或邮件需要专门 的模块（sms或smtp）进行。

**Kind**: global class  

- [Code](#Code)
  - [new Code(length, timeout)](#new_Code_new)
  - [.make(type, to)](#Code+make) ⇒ `string`
  - [.check(type, to)](#Code+check) ⇒ `CodeSession`
  - [.clear()](#Code+clear)

<a name="new_Code_new"></a>

### new Code(length, timeout)

构造器

| Param   | Type     | Description                |
| ------- | -------- | -------------------------- |
| length  | `number` | 验证码的长度，一般为4-8.   |
| timeout | `number` | 验证码的有效期，单位为秒。 |

<a name="Code+make"></a>

### code.make(type, to) ⇒ `string`

生成验证码

**Kind**: instance method of [`Code`](#Code)   **Returns**: `string` - 生成的验证码字符串。  

| Param | Type     | Description                                                  |
| ----- | -------- | ------------------------------------------------------------ |
| type  | `string` | 验证码的发送类型，email                                      |
| to    | `string` | 发送目标，如果验证发的发送类型是email，这里是 对应的邮箱地址，如果验证码发送类型为sms，这里就是对应的手机号码。 |

<a name="Code+check"></a>

### code.check(type, to) ⇒ `CodeSession`

检查验证码

**Kind**: instance method of [`Code`](#Code)   **Returns**: `CodeSession` - 如果通过检查，返回此发送目标对应验证码的session信息。  

| Param | Type     | Description                                                  |
| ----- | -------- | ------------------------------------------------------------ |
| type  | `string` | 验证码的发送类型，email                                      |
| to    | `string` | 发送目标，如果验证发的发送类型是email，这里是 对应的邮箱地址，如果验证码发送类型为sms，这里就是对应的手机号码。 |

<a name="Code+clear"></a>

### code.clear()

清空所有验证码，此操作会让暂存的待检查的验证码全部丢失， 后续基于这些验证码的检查操作都会失败。

**Kind**: instance method of [`Code`](#Code)   <a name="Key"></a>

## Key

验证键

- 验证键是一种特殊的验证码。它和普通验证码的区别是能保证唯一性。
- 这种唯一性不是全局唯一，是在所有已经生成但未检查的编码中的唯一， 即如果现已经生成1000个编码都还未检查也未失效，新生成的验证键值能保证与 当前这1000个键值都不同。

**Kind**: global class  

- [Key](#Key)
  - [new Key(length, timeout)](#new_Key_new)
  - [.make(data)](#Key+make) ⇒ `string`
  - [.check(key)](#Key+check) ⇒ `KeySession`
  - [.clear()](#Key+clear)

<a name="new_Key_new"></a>

### new Key(length, timeout)

构造器

| Param   | Type     | Description                                    |
| ------- | -------- | ---------------------------------------------- |
| length  | `number` | 长度，为了保证唯一，在特定的场景可以自行设定。 |
| timeout | `number` | 有效时长，单位为秒。                           |

<a name="Key+make"></a>

### key.make(data) ⇒ `string`

生成键值

**Kind**: instance method of [`Key`](#Key)   **Returns**: `string` - 键值字符串  

| Param | Type  | Description        |
| ----- | ----- | ------------------ |
| data  | `any` | 与键值绑定的信息。 |

<a name="Key+check"></a>

### key.check(key) ⇒ `KeySession`

检查键值

**Kind**: instance method of [`Key`](#Key)   **Returns**: `KeySession` - 与此键值的session数据，如果检查失败返回undefined。  

| Param | Type     | Description        |
| ----- | -------- | ------------------ |
| key   | `string` | 待检查的键值字符串 |

<a name="Key+clear"></a>

### key.clear()

清空所有键值，此操作会让所有已经生成但未检查的键值全部丢失， 后续针对这些键值的检查操作都会失败。

**Kind**: instance method of [`Key`](#Key)  