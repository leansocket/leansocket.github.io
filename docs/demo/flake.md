# 唯一编码生成器

框架提供基于flake的唯一编码生成方法,可以在往数据库里添加数据时，用于生成唯一的id号。

如下使用`flakes.create`生成10个不重复的id。

````js
const libs = require('nodex-libs');
const flakes = libs.flakes;

let f = flakes.create();
for(let i = 0; i < 10; i++){
    console.log(f.get());
}

// 00097cf9b37600000001
// 00097cf9b37700000002
// 00097cf9b37700000003
// 00097cf9b37700000004
// 00097cf9b37800000005
// 00097cf9b37800000006
// 00097cf9b37800000007
// 00097cf9b37800000008
// 00097cf9b37900000009
// 00097cf9b3790000000a

````