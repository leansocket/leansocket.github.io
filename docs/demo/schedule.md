# 定时任务
日程是为了解决在特定的时刻执行任务的需求，例如：每周星期二上午九点执行任务A。

日程不是解决每隔单位时间执行任务的需求，如：每隔30秒执行任务B，你可以用计时器 setInterval之类的方法完成这类需求。

## Schedule
**new Schedule(schedule, precision)**
新建一个计划时，需要传入日程规则选项`schedule`，即执行的时间，而`precision`则是日程检测精度，单位为毫秒，也可以不设置，默认位333ms。

### 日程规则
通过 Schedule.schedule 参数来配置定时任务的执行时机，定时任务将会按照 schedule 表达式在特定的时间点执行，执行的时机可以精确到秒。
````JS
{Y:'*',M:'*',D:'*',d:'*',h:'*',m:'*',s:'*'}
 ┬     ┬     ┬     ┬     ┬     ┬     ┬ 
 |     |     |     |     |     |     |
 |     |     |     |     |     |     └ second (0 - 59, optional) 秒
 |     |     |     |     |     └────── minute (0 - 59，optional) 分
 |     |     |     |     └──────────── hour (0 - 23, optional) 时
 |     |     |     └────────────────── day (0-6, optional) 星期
 |     |     └──────────────────────── Date (1 - 31, optional) 日期
 |     └────────────────────────────── month (1 - 12, optional) 月份
 └──────────────────────────────────── Year optional 年份
````

如下创建一个日程，然其在每分钟的第10秒执行task()方法。
````js
const libs = require('nodex-libs');
const time = libs.time
const { default: Schedule } = libs.schedule;

// 输出执行时刻的时间点对象
const task = function(){
  let now = time.now();
  console.log(now);
}

const scheduleTest = new Schedule({Y:'*',M:'*',D:'*',d:'*',h:'*',m:'*',s: 10});
scheduleTest.start(task);
// TimePoint { timestamp: 1618661710218, now: 2021-04-17T12:15:10.218Z }
// TimePoint { timestamp: 1618661770244, now: 2021-04-17T12:16:10.244Z }
// TimePoint { timestamp: 1618661830324, now: 2021-04-17T12:17:10.324Z }

// 获取日程执行的状态
console.log(scheduleTest.running); // true
````
