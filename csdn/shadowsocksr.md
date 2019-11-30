相关网上资源

https://www.cnblogs.com/yangleda/p/8320766.html



- 更新系统

  > sudo apt-get update

  *用163源会比较多。*

  *用清华源有时候有些文件会下载不到。*

  *用官方源速度会慢一点，基本都可以下载到，有些资源可能需要翻墙。*

- 安装python2.7

  > sudo apt-get install python

- 安装python-pip

  > sudo apt-get install python-pip

- 下载shadow程序

  > pip install shadow

- 新建配置文件

  > sudo nano /etc/shadowsocksr/config.json

  > sudo gedit /etc/shadowsocker/config.json

  > {
  >     "server":"38.100.229.84",
  >     "server_port":39,
  >     "local_address": "127.0.0.1",
  >     "local_port":1080,
  >     "password":"bannedbook.org",
  >     "timeout":300,
  >     "method":"aes-256-cfb"
  > }

- 运行shadow

  - 前台运行

  > sslocal -c /etc/shadowsocksr/config.json

  - 后台运行

  > nohup sslocal -c /etc/shadowsocksr/config.json

- 安装proxychains(用proxychains实现命令行翻墙代理)

  > sudo apt-get install proxychains

- 查看配置文件地址，配置配置文件

  - 查看配置文件地址

  > proxychains -h

  - 编辑配置文件

  > sudo gedit /etc/proxychains4.conf

  - 配置配置文件最后加上这一行，端口应与shadowsock中配置的本地端口一致

  > sock5 127.0.0.1 1080

- 至此就可以进行代理了

  - 代理更新

    sudo proxychains apt-get update

  - 代理测试www.google.com

    proxychains curl www.google.com

  - 代理chrome浏览器(最新的google浏览器有报错不能进行代理，浏览器版本号为75，但是可以代理Firefox浏览器)

    > proxychains google-chrome

  - 代理Firefox浏览器

    > proxychains firefox

- 在firefox中使用SwitchyOmega插件，并进行配置

  proxy模式设置为socks5， 127.0.0.1， 1080。
  auto-switch模式设置AutoProxy URL:
  http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt
  开启auto switch功能。

  

  