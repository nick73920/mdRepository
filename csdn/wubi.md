参考的相关网上教程

https://blog.csdn.net/areigninhell/article/details/79696751

https://www.cnblogs.com/rivergo/p/9304424.html

- 安装搜狗输入法

  - 下载

    https://pinyin.sogou.com/linux/

  - 安装

    > sudo dpkg -i sogou***.deb

- 设置系统使用搜狗输入法

  - 进入language support

    如果出现报错则执行下面的命令

    > sudo apt-get install -f

    再次进入language support点击install按钮进行安装。

  - 将Ibus切换成fcitx,如果没有小企鹅需执行下面命令

    >  sudo apt-get update
    >
    >  sudo apt-get upgrade

- 重启电脑电脑上会出现fcitx，右键输入法，点击configure按钮

  添加Sogou输入法

  添加Keyboard - English(US)

  

  

  