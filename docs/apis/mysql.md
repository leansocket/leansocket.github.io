# Mysql

## Classes

- [Connection](#Connection)

  数据库链接对象

- [MySql](#MySql)

  mysql数据库访问对象

## Functions

- [init()](#init)

  初始化全局MySql对象

- [connect(transaction)](#connect) ⇒ `Connection`

  连接数据库

- [transaction()](#transaction)

  连接数据库并开启事务。

- [query(sql, logsql)](#query) ⇒ `any`

  连接数据库，执行一次SQL查询，并自动释放连接。

- [page(sql, page, size)](#page) ⇒ `any`

  连接数据库，执行一次分页查询，并自动释放连接。

<a name="Connection"></a>

## Connection

数据库链接对象

**Kind**: global class  

- [Connection](#Connection)
  - [.query(sql, logsql)](#Connection+query) ⇒ `any`
  - [.page(sql, page, size)](#Connection+page) ⇒ `any`
  - [.transaction()](#Connection+transaction)
  - [.commit()](#Connection+commit)
  - [.rollback()](#Connection+rollback)
  - [.release()](#Connection+release)

<a name="Connection+query"></a>

### connection.query(sql, logsql) ⇒ `any`

执行一次sql查询

**Kind**: instance method of [`Connection`](#Connection)   **Returns**: `any` - 查询结果集  

| Param  | Type      | Default | Description     |
| ------ | --------- | ------- | --------------- |
| sql    | `string`  |         | SQL语句         |
| logsql | `boolean` | `true`  | 是否打印SQL语句 |

<a name="Connection+page"></a>

### connection.page(sql, page, size) ⇒ `any`

执行一次分页查询

**Kind**: instance method of [`Connection`](#Connection)   **Returns**: `any` - 查询结果集  

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| sql   | `string` | SQL语句             |
| page  | `number` | 当前页码，从1开始。 |
| size  | `number` | 每页的数据条数      |

<a name="Connection+transaction"></a>

### connection.transaction()

开启事务

**Kind**: instance method of [`Connection`](#Connection)   <a name="Connection+commit"></a>

### connection.commit()

提交事务

**Kind**: instance method of [`Connection`](#Connection)   <a name="Connection+rollback"></a>

### connection.rollback()

回滚事务

**Kind**: instance method of [`Connection`](#Connection)   <a name="Connection+release"></a>

### connection.release()

释放连接

**Kind**: instance method of [`Connection`](#Connection)   <a name="MySql"></a>

## MySql

mysql数据库访问对象

**Kind**: global class  

- [MySql](#MySql)
  - [.init()](#MySql+init)
  - [.connect(transaction)](#MySql+connect) ⇒ [`Connection`](#Connection)
  - [.transaction()](#MySql+transaction)
  - [.query(sql, logsql)](#MySql+query) ⇒ `any`
  - [.page(sql, page, size)](#MySql+page) ⇒ `any`

<a name="MySql+init"></a>

### mySql.init()

构造器

**Kind**: instance method of [`MySql`](#MySql)   <a name="MySql+connect"></a>

### mySql.connect(transaction) ⇒ [`Connection`](#Connection)

连接数据库

**Kind**: instance method of [`MySql`](#MySql)   **Returns**: [`Connection`](#Connection) - 数据库连接对象  

| Param       | Type      | Default | Description |
| ----------- | --------- | ------- | ----------- |
| transaction | `boolean` | `false` | 开启事务    |

<a name="MySql+transaction"></a>

### mySql.transaction()

连接数据库并开启事务。

**Kind**: instance method of [`MySql`](#MySql)   <a name="MySql+query"></a>

### mySql.query(sql, logsql) ⇒ `any`

连接数据库，执行一次SQL查询，并自动释放连接。

**Kind**: instance method of [`MySql`](#MySql)   **Returns**: `any` - 查询结果集  

| Param  | Type      | Default | Description     |
| ------ | --------- | ------- | --------------- |
| sql    | `string`  |         | SQL语句         |
| logsql | `boolean` | `true`  | 是否打印SQL语句 |

<a name="MySql+page"></a>

### mySql.page(sql, page, size) ⇒ `any`

连接数据库，执行一次分页查询，并自动释放连接。

**Kind**: instance method of [`MySql`](#MySql)   **Returns**: `any` - 查询结果集  

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| sql   | `string` | SQL语句             |
| page  | `number` | 当前页码，从1开始。 |
| size  | `number` | 每页的数据条数      |

<a name="init"></a>

## init()

初始化全局MySql对象

**Kind**: global function   <a name="connect"></a>

## connect(transaction) ⇒ [`Connection`](#Connection)

连接数据库

**Kind**: global function   **Returns**: [`Connection`](#Connection) - 数据库连接对象  

| Param       | Type      | Description |
| ----------- | --------- | ----------- |
| transaction | `boolean` | 开启事务    |

<a name="transaction"></a>

## transaction()

连接数据库并开启事务。

**Kind**: global function   <a name="query"></a>

## query(sql, logsql) ⇒ `any`

连接数据库，执行一次SQL查询，并自动释放连接。

**Kind**: global function   **Returns**: `any` - 查询结果集  

| Param  | Type      | Description     |
| ------ | --------- | --------------- |
| sql    | `string`  | SQL语句         |
| logsql | `boolean` | 是否打印SQL语句 |

<a name="page"></a>

## page(sql, page, size) ⇒ `any`

连接数据库，执行一次分页查询，并自动释放连接。

**Kind**: global function   **Returns**: `any` - 查询结果集  

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| sql   | `string` | SQL语句             |
| page  | `number` | 当前页码，从1开始。 |
| size  | `number` | 每页的数据条数      |