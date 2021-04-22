# Schedule

## Classes

- [Schedule](#Schedule)

  日程日程是为了解决在特定的时刻执行任务的需求，例如：每周星期二上午九点执行任务A。日程不是解决每隔单位时间执行任务的需求，如：每隔30秒执行任务B，你可以用计时器 setInterval之类的方法完成这类需求。

## Functions

- [duration(ms)](#duration) ⇒ `Duration`

  创建一个时间段对象

- [span(beginTimeStamp, endTimeStamp)](#span) ⇒ `TimeSpan`

  创建一个时间区间对象。

- [point(timestamp)](#point) ⇒ `TimePoint`

  创建一个时间点对象。

- [now()](#now)

  获取现在时刻的时间点对象。

- [utc()](#utc)

  获取dateTime结构所描述的UTC时间点。

- [parse()](#parse)

  解析时间字符串，相当于Date.parse()。

- [add(timePoint, duration)](#add) ⇒ `TimePoint`

  计算时间点timePoint加上时间段duration的时间点。

- [sub(timePoint, duration)](#sub) ⇒ `TimePoint`

  计算时间点timePoint减去时间段duration的时间点。

<a name="Schedule"></a>

## Schedule

日程

- 日程是为了解决在特定的时刻执行任务的需求，例如：每周星期二上午九点执行任务A。
- 日程不是解决每隔单位时间执行任务的需求，如：每隔30秒执行任务B，你可以用计时器 setInterval之类的方法完成这类需求。

**Kind**: global class  

- [Schedule](#Schedule)
  - [new Schedule(schedule, precision)](#new_Schedule_new)
  - [.running](#Schedule+running)
  - [.start(task)](#Schedule+start) ⇒ `boolean`
  - [.stop()](#Schedule+stop)

<a name="new_Schedule_new"></a>

### new Schedule(schedule, precision)

构造器

| Param     | Type              | Description                |
| --------- | ----------------- | -------------------------- |
| schedule  | `ScheduleOptions` | 日程规则选项               |
| precision | `number`          | 日程检测精度，单位为毫秒。 |

<a name="Schedule+running"></a>

### schedule.running

获取日程是否在运行

**Kind**: instance property of [`Schedule`](#Schedule)   <a name="Schedule+start"></a>

### schedule.start(task) ⇒ `boolean`

启动日程

**Kind**: instance method of [`Schedule`](#Schedule)   **Returns**: `boolean` - 日程是否启动成功  

| Param | Type   | Description                       |
| ----- | ------ | --------------------------------- |
| task  | `Date` | 日程触发时的任务函数 (Date)=>void |

<a name="Schedule+stop"></a>

### schedule.stop()

停止日程

**Kind**: instance method of [`Schedule`](#Schedule)   