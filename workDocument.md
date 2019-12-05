# workDocument

# 164 orcl 数据库连接信息
192.168.95.162/orcl
lw10/supcon
system/supcon

# 作业数据库
10.10.90.200/orcl
WTS_CP/1

# 164 服务器密码
192.168.95.164
mes!2013

# 报错日志路径
C:\bap\MisServer\MsLogs\sesWssORMs\MS-Manage.log

# 代码目录
\\192.168.95.165\VxBAP\bap-server\bap-workspace\generate

\\192.168.95.164

1、报警服务是否正常 ，可以查看报警日志
2、通知中心SES业务规则服务地址配置是否正
3、通知中心是否正常，可以用通知中心自带的消息推送进行测试
4、查看通知服务日志，一般是找不到推送用户或服务异常
5、查看提醒人配置，是否绑定有报警的报警设备或危险源
6、查看提醒规则服务日志

# customer地址
\\192.168.95.164\bap\bap-server\bap-workspace\generate\SESWssKPI_1.0.0\service\src\main

C:\Windows\System32\cmd.exe
C:\bap\bap-server\bap-workspace\generate\SESWssFee\target

# 费用项目
java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=12100 -jar C:\bap\bap-server\bap-workspace\generate\SESWssFee\target\SESWssFee-1.0.0.jar

# 考核项目
java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=12100 -jar C:\bap\bap-server\bap-workspace\generate\SESWssFee\target\SESWssFee-1.0.0.jar

# 计划项目
java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=12100 -jar C:\bap\bap-server\bap-workspace\generate\sesWssPlanWs\target\sesWssPlanWs-1.0.0.jar

# 部门职责
java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=12100 -jar C:\bap\bap-server\bap-workspace\generate\sesWssORMs\target\sesWssORMs-1.0.0.jar

java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=9527 -jar 