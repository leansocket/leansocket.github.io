# Crypto

## Functions

- [hash(alg, data)](#hash) ⇒ `string`

  用指定hash算法计算data的hash编码。

- [md5(data)](#md5) ⇒ `string`

  计算data的md5值

- [sha256(data)](#sha256) ⇒ `string`

  计算data的sha256值

- [encode_aes_256_cbc(key, content)](#encode_aes_256_cbc) ⇒ `string`

  使用aes-256-cbc算法对数据进行编码

- [decode_aes_256_cbc(key, content)](#decode_aes_256_cbc) ⇒ `string`

  对一串使用aes-256-cbc算法加密的密文进行解码

- [encode_base64(content)](#encode_base64) ⇒ `string`

  对数据进行base64编码

- [decode_base64(content)](#decode_base64) ⇒ `string`

  对base64编码的字符串进行解码

- [encode_hex64(content)](#encode_hex64) ⇒

  将一段十六进制的字符串进行base64编码

- [decode_hex64(content)](#decode_hex64) ⇒ `string`

  对一段被base64编码过的十六进制字符串进行解码

- [rs(length, characters)](#rs) ⇒ `string`

  获取一个随机字符串（random string）

- [rsod(len)](#rsod) ⇒ `string`

  获取一个十进制的随机数字字符串（random string of digit）

- [rsox(len)](#rsox) ⇒ `string`

  获取一个十六进制的随机数字字符串（random string of hex）

- [rsoa(len)](#rsoa) ⇒ `string`

  获取一个随机字母字符串（random string of alpha）

- [rsow(len)](#rsow) ⇒ `string`

  获取一个由数字、字母组成的随机字符串（random string of word）

- [rsop(len)](#rsop) ⇒ `string`

  获取一个由可打印字符组成的随机字符串（random string of printable)

## hash(alg, data) ⇒ `string`

用指定hash算法计算data的hash编码。

**Kind**: global function   **Returns**: `string` - data的hash值  

| Param | Type     | Description    |
| ----- | -------- | -------------- |
| alg   | `string` | hash算法的名称 |
| data  | `string` | `Buffer`       |

<a name="md5"></a>

## md5(data) ⇒ `string`

计算data的md5值

**Kind**: global function   **Returns**: `string` - data的md5值  

| Param | Type     | Description |
| ----- | -------- | ----------- |
| data  | `string` | `Buffer`    |

<a name="sha256"></a>

## sha256(data) ⇒ `string`

计算data的sha256值

**Kind**: global function   **Returns**: `string` - data的sha256值  

| Param | Type     | Description |
| ----- | -------- | ----------- |
| data  | `string` | `Buffer`    |

<a name="encode_aes_256_cbc"></a>

## encode_aes_256_cbc(key, content) ⇒ `string`

使用aes-256-cbc算法对数据进行编码

**Kind**: global function   **Returns**: `string` - 加密后的密文  

| Param   | Type     | Description    |
| ------- | -------- | -------------- |
| key     | `string` | 用于加密的密钥 |
| content | `string` | 被加密的数据   |

<a name="decode_aes_256_cbc"></a>

## decode_aes_256_cbc(key, content) ⇒ `string`

对一串使用aes-256-cbc算法加密的密文进行解码

**Kind**: global function   **Returns**: `string` - 解码后的数据  

| Param   | Type     | Description |
| ------- | -------- | ----------- |
| key     | `string` | 解密密钥    |
| content | `string` | 密文数据    |

<a name="encode_base64"></a>

## encode_base64(content) ⇒ `string`

对数据进行base64编码

**Kind**: global function   **Returns**: `string` - base64字符串  

| Param   | Type     | Description          |
| ------- | -------- | -------------------- |
| content | `string` | 用于base64编码的数据 |

<a name="decode_base64"></a>

## decode_base64(content) ⇒ `string`

对base64编码的字符串进行解码

**Kind**: global function   **Returns**: `string` - base64解码后的数据  

| Param   | Type     | Description      |
| ------- | -------- | ---------------- |
| content | `string` | base64编码字符串 |

<a name="encode_hex64"></a>

## encode_hex64(content) ⇒

将一段十六进制的字符串进行base64编码

**Kind**: global function   **Returns**: 编码后的数据  

| Param   | Type     | Description    |
| ------- | -------- | -------------- |
| content | `string` | 十六进制字符串 |

<a name="decode_hex64"></a>

## decode_hex64(content) ⇒ `string`

对一段被base64编码过的十六进制字符串进行解码

**Kind**: global function   **Returns**: `string` - 十六进制字符串  

| Param   | Type     | Description  |
| ------- | -------- | ------------ |
| content | `string` | base64字符串 |

<a name="rs"></a>

## rs(length, characters) ⇒ `string`

获取一个随机字符串（random string）

**Kind**: global function   **Returns**: `string` - 随机字符串  

| Param      | Type           | Description                                                  |
| ---------- | -------------- | ------------------------------------------------------------ |
| length     | `number`       | 随机字符串的长度                                             |
| characters | `Array.<char>` | 随机字符串的字符表，随机字符串中的所有字符将从此自负表中随机抽取。 |

<a name="rsod"></a>

## rsod(len) ⇒ `string`

获取一个十进制的随机数字字符串（random string of digit）

**Kind**: global function   **Returns**: `string` - 随机十进制数字字符串  

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| len   | `number` | 字符串的长度 |

<a name="rsox"></a>

## rsox(len) ⇒ `string`

获取一个十六进制的随机数字字符串（random string of hex）

**Kind**: global function   **Returns**: `string` - 随机十六进制数字字符串  

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| len   | `number` | 字符串的长度 |

<a name="rsoa"></a>

## rsoa(len) ⇒ `string`

获取一个随机字母字符串（random string of alpha）

**Kind**: global function   **Returns**: `string` - 随机字母字符串  

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| len   | `number` | 字符串的长度 |

<a name="rsow"></a>

## rsow(len) ⇒ `string`

获取一个由数字、字母组成的随机字符串（random string of word）

**Kind**: global function   **Returns**: `string` - 由数字、字母组成的随机字符串.  

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| len   | `number` | 字符串的长度 |

<a name="rsop"></a>

## rsop(len) ⇒ `string`

获取一个由可打印字符组成的随机字符串（random string of printable)

**Kind**: global function   **Returns**: `string` - 一个由可打印字符组成的随机字符串  

| Param | Type     | Description |
| ----- | -------- | ----------- |
| len   | `number` | 字符串长度  |