# MailList
学生通讯录的简单实现

 - 前台实现
    - 用户注册
    - 用户添加自己的信息
        - 学号
        - 姓名
        - 班级
        - 家庭住址
        - 联系电话
    - 后台管理员对所有数据的增删改查，用户只有查看和录入的权限

## 使用指南

该程序由node和vue搭建
运行该程序，本地必须有
- mongodb数据库
    - 安装mongodb的服务端，网址：https://www.mongodb.com/
- node
    - node安装nestjs框架`npm i -g @nestjs/cli`
- vuejs
    - 安装vue脚手架`npm install -g vue/cli`

## 运行该程序的步骤与功能：
1.  进入server文件夹， 运行`nest start -w admin`启动后台，并连接数据库（数据库的连接，在后台集成）
2. 进入admin文件夹，运行`npm run serve`启动后台管理页面，可以实现数据的增删改查，支持学号和姓名模糊查询与排序，支持数据分页