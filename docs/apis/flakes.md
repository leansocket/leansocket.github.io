# Flakes

## Classes

- [Flake](#Flake)

  雪花算法唯一编码生成器此类采用flake算法生成唯一编码。此类能同时支持156个节点，每个节点每毫秒生成2^24个唯一编码。此类生成的唯一编码是一个由20个十六进制字符组成的串。

## Functions

- [create()](#create) ⇒ `Flake`

  创建一个flake对象

<a name="Flake"></a>

## Flake

雪花算法唯一编码生成器

- 此类采用flake算法生成唯一编码。
- 此类能同时支持156个节点，每个节点每毫秒生成2^24个唯一编码。
- 此类生成的唯一编码是一个由20个十六进制字符组成的串。

**Kind**: global class  

- [Flake](#Flake)
  - [new Flake(nodeId)](#new_Flake_new)
  - [.get()](#Flake+get)

<a name="new_Flake_new"></a>

### new Flake(nodeId)

构造器

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| nodeId | `number` | 节点ID，0-255. |

<a name="Flake+get"></a>

### flake.get()

获取编号

**Kind**: instance method of [`Flake`](#Flake)  

<a name="create"></a>

## create() ⇒ [`Flake`](#Flake)

创建一个flake对象

**Kind**: global function   **Returns**: [`Flake`](#Flake) - 雪花算法唯一编码生成器对象  

| Param            | Type     |
| ---------------- | -------- |
| 节点编号，0-255. | `number` |