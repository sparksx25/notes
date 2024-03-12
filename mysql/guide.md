# getting start

## 创建数据库
```sql
-- 创建数据库 dev_english:
CREATE DATABASE IF NOT EXISTS dev_english;

-- 创建登录 用户 sparkx/口令 abc123,并允许在其它主机通过该账号登录
CREATE USER IF NOT EXISTS sparkx@'%' IDENTIFIED BY 'abc123';

-- 授予 sparkx 用户操作 dev_english 下所有表的权限。然后刷新授权
GRANT ALL PRIVILEGES ON dev_english.* TO sparkx@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- 创建表users:
USE dev_english;
CREATE TABLE users (
  id BIGINT AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  tel VARCHAR(11) NOT NULL,
  PRIMARY KEY(id)
) Engine=INNODB DEFAULT CHARSET=UTF8;

-- 插入初始数据:
INSERT INTO users (name, tel) VALUES ('小明', 15083749941);
INSERT INTO users (name, tel) VALUES ('小红', 15083749942);
INSERT INTO users (name, tel) VALUES ('小军', 15083749943);
INSERT INTO users (name, tel) VALUES ('小白', 15083749944);
INSERT INTO users (name, tel) VALUES ('小牛', 15083749945);
INSERT INTO users (name, tel) VALUES ('小兵', 15083749946);
INSERT INTO users (name, tel) VALUES ('小强', 15083749947);
INSERT INTO users (name, tel) VALUES ('小乔', 15083749948);
INSERT INTO users (name, tel) VALUES ('小青', 15083749949);
INSERT INTO users (name, tel) VALUES ('小王', 15083749950);
INSERT INTO users (name, tel) VALUES ('小林', 15083749951);
INSERT INTO users (name, tel) VALUES ('小贝', 15083749952);
```

## 执行 sql 脚本文件
```mysql
source /user/home/english.sql
```

## 删除
```sql
DELETE FROM users WHERE id < 13;
```
