# 时间
框架提供时间段、时间点等对日期时间的处理方法

## 时间点
时间点。表示时钟上一个特定的瞬间时间点。

**new TimePoint(timestamp)** 在构造时间点时可以传入时间戳，生成该时间戳的时间点，如果没有传值，则默认为运行时刻的时间点。

### 创建
如下生成三个时间点，一个为运行时的时间点，另一个则为运行时昨天的时刻。
````js
const libs = require('nodex-libs');
const time = libs.time;

// now
let now = new time.TimePoint();
console.log('now:', now.toString('year-month-date hour:minute:second'));
// yesterday
let yesterday = new time.TimePoint(now.value - time.MS_PER_DAY);
console.log('yesterday:', yesterday.toString());
// timePoint
let timePoint = new time.TimePoint(1518662131277);
console.log('timePoint:', timePoint.toString());

// now: 2021-04-17 20:40:55
// yesterday 2021-04-16 20:40:55
// timePoint: 2018-02-15 10:35:31
````
### 属性和函数
`TimePoint`有很多的属性和函数，如当时的时间戳，日期时间格式，当前时间点所在的秒区间，分钟区间，小时区间，计算此时间点加，减上一段时间的时间点等等。你可以参考我们的文档。

````js
const libs = require('nodex-libs');
const time = libs.time;

let timePoint = new time.TimePoint(1518662131277);
console.log('timePoint:', timePoint.toString());

// 获取时间戳数值
let value = timePoint.value;
// 1518662131277

// 获取日期时间格式
let dateTime = timePoint.dateTime;
// {
//   year: 2018,
//   month: 2,
//   date: 15,
//   day: 4,
//   hour: 10,
//   minute: 35,
//   second: 31,
//   ms: 277
// }

let thisSecond = timePoint.thisSecond;
// TimeSpan {
//   _begin: 1518662131000,
//   _end: 1518662132000,
//   _duration: Duration { duration: 1000 }
// }

````

### 加减时间
当想为一个时间进行加减时，框架也提供了这样的方法，但要加减某个时间段时，需要`new Duration(duration)`，而duration则是加减的时间长度，单位为毫秒。

````js
const libs = require('nodex-libs');
const time = libs.time;

let timePoint = new time.TimePoint(1518662131277);
console.log('timePoint:', timePoint.toString());

let du = new Duration(20);
let add = timePoint.add(du);
console.log(add.value);
// 1518662131297

let sub = timePoint.sub(du);
console.log(sub.value);
// 1518662131257

````

