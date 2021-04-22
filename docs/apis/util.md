# Util

## Functions

- [delay(time)](#delay)

  延迟，一般用法为:`await delay(0.5) // 延迟0.5秒 `

- [absolutePath()](#absolutePath)

  获取路径p的绝对路径如果p以 '/' 开始，返回相对于当前进程cwd的绝对路径。

- [camelCase()](#camelCase)

  获取name的驼峰形式。如：`get_user_info => getUserInfo _get_user_info => GetUserInfo `

- [camelCaseKeys()](#camelCaseKeys)

  将对象obj的key全部变成驼峰形式。

- [compareVersion(versionA, versionB)](#compareVersion) ⇒ `number`

  对两个版本进行比较versionA === versionB：返回 0versionA < versionB： 返回 -1versionA > versionB： 返回 1

- [computeGeoDistance()](#computeGeoDistance)

  计算地球球面上两个经纬点之间的地理距离。

<a name="delay"></a>

## delay(time)

延迟，一般用法为:

```
await delay(0.5) // 延迟0.5秒
```

**Kind**: global function  

| Param | Type     | Description                |
| ----- | -------- | -------------------------- |
| time  | `number` | 需要延迟的时间，单位为秒。 |

<a name="absolutePath"></a>

## absolutePath()

获取路径p的绝对路径

- 如果p以 '/' 开始，返回相对于当前进程cwd的绝对路径。

**Kind**: global function   <a name="camelCase"></a>

## camelCase()

获取name的驼峰形式。如：

```
get_user_info => getUserInfo
```

```
_get_user_info => GetUserInfo
```

**Kind**: global function   <a name="camelCaseKeys"></a>

## camelCaseKeys()

将对象obj的key全部变成驼峰形式。

**Kind**: global function   <a name="compareVersion"></a>

## compareVersion(versionA, versionB) ⇒ `number`

对两个版本进行比较

- versionA === versionB：返回 0
- versionA < versionB： 返回 -1
- versionA > versionB： 返回 1

**Kind**: global function  

| Param    | Type     | Description        |
| -------- | -------- | ------------------ |
| versionA | `string` | 第一个版本号字符串 |
| versionB | `string` | 第二个版本号字符串 |

<a name="computeGeoDistance"></a>

## computeGeoDistance()

计算地球球面上两个经纬点之间的地理距离。

**Kind**: global function 