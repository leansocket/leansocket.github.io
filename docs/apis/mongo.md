# Mongo

## Classes

- [Mongo](#Mongo)

  mongo数据库访问对象

<a name="Mongo"></a>

## Mongo

mongo数据库访问对象

**Kind**: global class  

- [Mongo](#Mongo)
  
  - [.connect()](#Mongo+connect)
  
    连接Mongo
  
  - [.quer(*condition*)](#Mongo+query)
  
    *MongoDB查询方法*
  
  - [.close(*force*)](#Mongo+close)
  
    *关闭MongoDB连接*
  
  - [.options()](#Mongo+options)
  
    *获取取当前连接参数*
  
  - [.client()](#Mongo+client)
  
    *获取当前客户端*
  
  - [.isConnected()](#Mongo+isConnected)
  
  *获取当前连接状态*
  <a name="Mongo+connect"></a>

### mongo.connect()

连接数据库

**Kind**: instance method of [Mongo](#Mongo)    

<a name="Mongo+query"></a>

### mySql.query(condition) 

MongoDB查询方法

**Kind**: instance method of  [Mongo](#Mongo)   

| Param  | Type      | Default | Description     |
| ------ | --------- | ------- | --------------- |
| condition    | `function`  |         | 查询语句方法  |

<a name="Mongo+close"></a>

### mySql.close(force) 

关闭MongoDB连接

<a name="Mongo+options"></a>

### mySql.options()

获取当前连接参数

<a name="Mongo+client"></a>

### mySql.client() 

获取当前客户端

<a name="Mongo+isConnected"></a>

### mySql.isConnected() 

获取当前连接状态
