# 子进程

创建一个子进程，并最终输出子进程执行结果

````js
const libs = require('nodex-libs');
const spawn = libs.spawn;

let s1 = await spawn.exec(`npm`, [`--version`]);
console.log(s1);
// {"stdout":"6.14.7\n","stderr":"","exitcode":0}}
````