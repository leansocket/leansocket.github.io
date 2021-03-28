# 使用样例

## 采用npm 安装
可以直接在自己项目里面安装 [nodex-libs](https://github.com/leansocket/nodex-libs)，然后在自己的项目里面直接引入并使用nodex-libs的功能。

以下为` nodex-libs `部分使用样例，如果使用 ` nodex-cli `搭建的项目可以参考 [CLI](cli.md)

### import

```js
const libs = require('nodex-libs');
```

### logger apis

```js
const libs = require('nodex-libs');

libs.log.init('scope-name');

console.log(`log message`);
console.info(`info message`);
console.warn(`warning message`);
console.error(`error message`);
```

### http server

```js
const libs = require('nodex-libs');
const http = libs.http;

const args = {
    body: {},
    host: '127.0.0.1',
    port: 80,
    corn: true,
    log: true
};

let hello = (ctx) => {
    http.send(ctx, 'hello world.');
};

let about = (ctx) => {
    let ret = {
        name: 'nodex-libs test',
        info: 0
    };
    
    http.send(ctx, info);
};

let app = libs.http.webapp(args);

app.route((r)=>{
    r.get('/hello', hello);
    r.get('/about', about);
});

app.start();

```

### mysql db

```js
const libs = require('nodex-libs');
const mysql = libs.mysql;

mysql.init({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    pswd: 'root'
});

{
    let sql = 'select * from test';
    let list = await mysql.query(sql);
    console.log(JSON.stringify(list));
}

{
    let sql = 'delete from test where id = 0';
    let ret = await mysql.query(sql);
    console.log(ret.affectedRows);
}

// transaction
do
{
    let tx = mysql.transaction();
    
    let ret = await tx.query('update test set status = 0 where id = 10');
    if(ret.affectedRows !== 1){
        tx.rollback();
        tx.release();
        break;
    }
    
    ret = await tx.query('update test data = 1 where id = 10');
    if(ret.affectedRows !== 1){
         tx.rollback();
         tx.release();
         break;
    }
    
    tx.commit();
    tx.release();
}
while(0);
```

### MongoDB

```js
const libs = require('nodex-libs');
const { Mongo } = libs.mongo;

const mongo = new Mongo({
    uri: 'mongodb://127.0.0.1:27017',
    database: 'test',
    useUnifiedTopology: true,
    useNewUrlParser: true
})
await mongo.connect();

const result = await mongo.query(db => db.collection('user').find().toArray());
console.log(result);
```

### flakes unique ID:

```js
const libs = require('nodex-libs');
const flakes = libs.flakes;

let f = flakes.create();
for(let i = 0; i < 10; i++){
    console.log(f.get());
}
```

### Date and Time Operations:
```js
const libs = require('nodex-libs');
const time = libs.time;

// now
let now = new time.TimePoint();
now = time.now();
console.log(now.toString('year-month-date hour:minute:second'));

let yesterday = new time.TimePoint(now.value() - time.MS_PER_DAY);
console.log(yesterday.toString());

let span = now.sub(yesterday);
console.log(`begin=${span.begin()}, end=${span.end()}`);

let thisWeek = now.thisWeek();
console.log(`begin=${thisWeek.begin()}, end=${thisWeek.end()}`);

let duration = new time.Duration(time.MS_PER_DAY);
console.log(`minutes: ${duration.accurateMinutes()}`)
```

### Spawn
```js
const libs = require('nodex-libs');
const spawn = libs.spawn;

let p = spawn.process();
p.on('out', (code, out, err) => {
    console.log(`${code} ${out} ${err}`);
});

for(let i = 0; i < 10; i++) {
    p.post(`echo`, [`command`, `${i}`]);
}
p.post(`npm`, [`--version`]);
```

### fmt
```js
const libs = require('nodex-libs');
const fmt = libs.fmt;

let title = "test";
let isString = fmt.required(title,'string',0,30);
console.log(isString); // true

```
