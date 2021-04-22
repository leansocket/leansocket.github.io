# Time

## Members

### MS\_PER\_SECOND

常量：每秒钟的毫秒数

**Kind**: global variable  

### MS\_PER\_MINUTE

常量：每分钟的毫秒数

**Kind**: global variable  

### MS\_PER\_HOUR

常量：每小时的毫秒数

**Kind**: global variable  

### MS\_PER\_DAY

常量：每天的毫秒数

**Kind**: global variable  

### MS\_PER\_WEEK

常量：每周的毫秒数

**Kind**: global variable  

```typescript
/**
 * 常量：每秒钟的毫秒数
*/
export const MS_PER_SECOND = 1000;
/**
 * 常量：每分钟的毫秒数
*/
export const MS_PER_MINUTE = 60000;
/**
 * 常量：每小时的毫秒数
*/
export const MS_PER_HOUR = 3600000;
/**
 * 常量：每天的毫秒数
 */
export const MS_PER_DAY = 86400000;
/**
 * 常量：每周的毫秒数
*/
export const MS_PER_WEEK = 86400 * 7;
```



## Classes

- [Duration](#Duration)

  时间段，代表两个时间点之间的时长。

- [TimeSpan](#TimeSpan)

  时间区间，时间区间是由两个时间点构成的一段时间。 时间区间（TimeSpan）与时间段（Duration）的区别是 时间区间具有方向性（begin --> end），时间段没有方向性。

- [TimePoint](#TimePoint)

  时间点。表示时钟上一个特定的瞬间时间点。
  <a name="Duration"></a>

## Duration

时间段，代表两个时间点之间的时长。

**Kind**: global class  

- [Duration](#Duration)
  - [new Duration(duration)](#new_Duration_new)
  - [.value](#Duration+value)
  - [.accurateMilliseconds](#Duration+accurateMilliseconds)
  - [.accurateSeconds](#Duration+accurateSeconds)
  - [.accurateMinutes](#Duration+accurateMinutes)
  - [.accurateHours](#Duration+accurateHours)
  - [.accurateDays](#Duration+accurateDays)
  - [.accurateMonths](#Duration+accurateMonths)
  - [.accurateYears](#Duration+accurateYears)
  - [.milliseconds](#Duration+milliseconds)
  - [.seconds](#Duration+seconds)
  - [.minutes](#Duration+minutes)
  - [.hours](#Duration+hours)
  - [.days](#Duration+days)
  - [.months](#Duration+months)
  - [.years](#Duration+years)

<a name="new_Duration_new"></a>

### new Duration(duration)

构造器

| Param    | Type     | Description  |
| -------- | -------- | ------------ |
| duration | `number` | 时长的毫秒数 |

<a name="Duration+value"></a>

### duration.value

获取毫秒数

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateMilliseconds"></a>

### duration.accurateMilliseconds

获取精确的毫秒数，如：500.0毫秒。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateSeconds"></a>

### duration.accurateSeconds

获取精确的秒数，如：0.56秒。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateMinutes"></a>

### duration.accurateMinutes

获取精确的分钟数，如：0.54分钟。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateHours"></a>

### duration.accurateHours

获取精确的小时数，如：0.547小时.

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateDays"></a>

### duration.accurateDays

获取精确的天数，如：0.32天。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateMonths"></a>

### duration.accurateMonths

获取精确的月数（每月假设都是30天），如：0.6个月。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+accurateYears"></a>

### duration.accurateYears

获取精确的年数（每年假设是365.25天），如：1.7年。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+milliseconds"></a>

### duration.milliseconds

获取毫秒数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+seconds"></a>

### duration.seconds

获取秒数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+minutes"></a>

### duration.minutes

获取分钟数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+hours"></a>

### duration.hours

获取小时数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+days"></a>

### duration.days

获取天数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+months"></a>

### duration.months

获取月数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="Duration+years"></a>

### duration.years

获取年数，省略精确值的小数部分。

**Kind**: instance property of [`Duration`](#Duration)   <a name="TimeSpan"></a>

## TimeSpan

时间区间，时间区间是由两个时间点构成的一段时间。 时间区间（TimeSpan）与时间段（Duration）的区别是 时间区间具有方向性（begin --> end），时间段没有方向性。

**Kind**: global class  

- [TimeSpan](#TimeSpan)
  - [new TimeSpan(begin, end)](#new_TimeSpan_new)
  - [.begin](#TimeSpan+begin)
  - [.end](#TimeSpan+end)
  - [.duration](#TimeSpan+duration)
  - [.include(timePoint)](#TimeSpan+include) ⇒ `boolean`
  - [.expand()](#TimeSpan+expand) ⇒ [`TimePoint`](#TimePoint) | [`TimeSpan`](#TimeSpan)

<a name="new_TimeSpan_new"></a>

### new TimeSpan(begin, end)

构造器

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| begin | `number` | 开始的时间戳 |
| end   | `number` | 结束时间戳   |

<a name="TimeSpan+begin"></a>

### timeSpan.begin

获取开始时间戳

**Kind**: instance property of [`TimeSpan`](#TimeSpan)   <a name="TimeSpan+end"></a>

### timeSpan.end

获取结束时间戳

**Kind**: instance property of [`TimeSpan`](#TimeSpan)   <a name="TimeSpan+duration"></a>

### timeSpan.duration

获取时间段

**Kind**: instance property of [`TimeSpan`](#TimeSpan)   <a name="TimeSpan+include"></a>

### timeSpan.include(timePoint) ⇒ `boolean`

检测此时间区间是否包含时间点timePoint。

**Kind**: instance method of [`TimeSpan`](#TimeSpan)   **Returns**: `boolean` - timePoint是否在此时间区间内  

| Param     | Type        | Description |
| --------- | ----------- | ----------- |
| timePoint | `timePoint` | 时间点      |

<a name="TimeSpan+expand"></a>

### timeSpan.expand() ⇒ [`TimePoint`](#TimePoint) | [`TimeSpan`](#TimeSpan)

将此时间区间扩展到指定的时间点timePoint处。

**Kind**: instance method of [`TimeSpan`](#TimeSpan)   **Returns**: [`TimePoint`](#TimePoint) - 目标时间点[`TimeSpan`](#TimeSpan) - 扩展后的此时间区间对象   <a name="TimePoint"></a>

## TimePoint

时间点。表示时钟上一个特定的瞬间时间点。

**Kind**: global class  

- [TimePoint](#TimePoint)
  - [new TimePoint(timestamp)](#new_TimePoint_new)
  - *instance*
    - [.value](#TimePoint+value)
    - [.dateTime](#TimePoint+dateTime)
    - [.thisSecond](#TimePoint+thisSecond)
    - [.thisMinute](#TimePoint+thisMinute)
    - [.thisHour](#TimePoint+thisHour)
    - [.thisDay](#TimePoint+thisDay)
    - [.thisWeek](#TimePoint+thisWeek)
    - [.thisMonth](#TimePoint+thisMonth)
    - [.thisYear](#TimePoint+thisYear)
    - [.toString()](#TimePoint+toString)
    - [.add(duration)](#TimePoint+add) ⇒ [`TimePoint`](#TimePoint)
    - [.sub(duration)](#TimePoint+sub) ⇒ [`TimePoint`](#TimePoint)
    - [.from(timePoint)](#TimePoint+from) ⇒ [`TimePoint`](#TimePoint)
    - [.to(timePoint)](#TimePoint+to) ⇒ [`TimePoint`](#TimePoint)
  - *static*
    - [.now()](#TimePoint.now)
    - [.utc()](#TimePoint.utc)
    - [.parse()](#TimePoint.parse)

<a name="new_TimePoint_new"></a>

### new TimePoint(timestamp)

构造器

| Param     | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| timestamp | `number` | 时间戳，默认为创建此对象时的时间戳。 |

<a name="TimePoint+value"></a>

### timePoint.value

获取时间戳数值

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+dateTime"></a>

### timePoint.dateTime

获取日期时间结构

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisSecond"></a>

### timePoint.thisSecond

获取当前时间点所在的秒区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisMinute"></a>

### timePoint.thisMinute

获取当前时间点所在的分钟区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisHour"></a>

### timePoint.thisHour

获取当前时间点所在的小时区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisDay"></a>

### timePoint.thisDay

获取当前时间点所在的日期区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisWeek"></a>

### timePoint.thisWeek

获取当前时间点所在的周时间区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisMonth"></a>

### timePoint.thisMonth

获取当前所在时间点的月时间区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+thisYear"></a>

### timePoint.thisYear

获取当前时间点所在的年时间区间。

**Kind**: instance property of [`TimePoint`](#TimePoint)   <a name="TimePoint+toString"></a>

### timePoint.toString()

转换成格式化字符串。格式字符串语法：

```
month/year => 03/2010
```

```
hour:minute:second => 08:45:59
```

```

```

```
完整语法如下：
```

```
year: 年份
```

```
month: 月份
```

```
date: 日期
```

```
hour: 小时
```

```
minute: 分钟
```

```
second: 秒
```

```
ms: 毫秒
```

**Kind**: instance method of [`TimePoint`](#TimePoint)   <a name="TimePoint+add"></a>

### timePoint.add(duration) ⇒ [`TimePoint`](#TimePoint)

加法，计算此时间点加上一段时间的时间点。

**Kind**: instance method of [`TimePoint`](#TimePoint)   **Returns**: [`TimePoint`](#TimePoint) - 结果时间点  

| Param    | Type                    | Description |
| -------- | ----------------------- | ----------- |
| duration | [`Duration`](#Duration) | 时间段      |

<a name="TimePoint+sub"></a>

### timePoint.sub(duration) ⇒ [`TimePoint`](#TimePoint)

减法，计算此时间点减去一段时间的时间点。

**Kind**: instance method of [`TimePoint`](#TimePoint)   **Returns**: [`TimePoint`](#TimePoint) - 结果时间点  

| Param    | Type                    | Description |
| -------- | ----------------------- | ----------- |
| duration | [`Duration`](#Duration) | 时间段      |

<a name="TimePoint+from"></a>

### timePoint.from(timePoint) ⇒ [`TimePoint`](#TimePoint)

计算从某个特定时间点开始到当前时间点结束的的时间区间。

**Kind**: instance method of [`TimePoint`](#TimePoint)   **Returns**: [`TimePoint`](#TimePoint) - 时间区间  

| Param     | Type                      | Description |
| --------- | ------------------------- | ----------- |
| timePoint | [`TimePoint`](#TimePoint) | 开始时间点  |

<a name="TimePoint+to"></a>

### timePoint.to(timePoint) ⇒ [`TimePoint`](#TimePoint)

计算从当前时间点开始到某个特定时间点结束的的时间区间。

**Kind**: instance method of [`TimePoint`](#TimePoint)   **Returns**: [`TimePoint`](#TimePoint) - 时间区间  

| Param     | Type                      | Description |
| --------- | ------------------------- | ----------- |
| timePoint | [`TimePoint`](#TimePoint) | 结束时间点  |

<a name="TimePoint.now"></a>

### TimePoint.now()

获取当前时刻的时间点。

**Kind**: static method of [`TimePoint`](#TimePoint)   <a name="TimePoint.utc"></a>

### TimePoint.utc()

获取dateTime结构所描述的UTC时间点。

**Kind**: static method of [`TimePoint`](#TimePoint)   <a name="TimePoint.parse"></a>

### TimePoint.parse()

解析时间字符串，相当于Date.parse()。

**Kind**: static method of [`TimePoint`](#TimePoint)  

<a name="duration"></a>

## duration(ms) ⇒ [`Duration`](#Duration)

创建一个时间段对象

**Kind**: global function   **Returns**: [`Duration`](#Duration) - 时间段对象  

| Param | Type     | Description    |
| ----- | -------- | -------------- |
| ms    | `number` | 时间段的毫秒数 |

<a name="span"></a>

## span(beginTimeStamp, endTimeStamp) ⇒ [`TimeSpan`](#TimeSpan)

创建一个时间区间对象。

**Kind**: global function   **Returns**: [`TimeSpan`](#TimeSpan) - 时间区间对象  

| Param          | Type     | Description               |
| -------------- | -------- | ------------------------- |
| beginTimeStamp | `number` | [`TimePoint`](#TimePoint) |
| endTimeStamp   | `number` | [`TimePoint`](#TimePoint) |

<a name="point"></a>

## point(timestamp) ⇒ [`TimePoint`](#TimePoint)

创建一个时间点对象。

**Kind**: global function   **Returns**: [`TimePoint`](#TimePoint) - 时间点对象  

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| timestamp | `number` | 时间戳      |

<a name="now"></a>

## now()

获取现在时刻的时间点对象。

**Kind**: global function   <a name="utc"></a>

## utc()

获取dateTime结构所描述的UTC时间点。

**Kind**: global function   <a name="parse"></a>

## parse()

解析时间字符串，相当于Date.parse()。

**Kind**: global function   <a name="add"></a>

## add(timePoint, duration) ⇒ [`TimePoint`](#TimePoint)

计算时间点timePoint加上时间段duration的时间点。

**Kind**: global function   **Returns**: [`TimePoint`](#TimePoint) - 结果时间点对象  

| Param     | Type                      | Description |
| --------- | ------------------------- | ----------- |
| timePoint | [`TimePoint`](#TimePoint) | 时间点对象  |
| duration  | [`Duration`](#Duration)   | 时间段对象  |

<a name="sub"></a>

## sub(timePoint, duration) ⇒ [`TimePoint`](#TimePoint)

计算时间点timePoint减去时间段duration的时间点。

**Kind**: global function   **Returns**: [`TimePoint`](#TimePoint) - 结果时间点对象  

| Param     | Type                      | Description |
| --------- | ------------------------- | ----------- |
| timePoint | [`TimePoint`](#TimePoint) | 时间点对象  |
| duration  | [`Duration`](#Duration)   | 时间段对象  |