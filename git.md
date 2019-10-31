# git

https://blog.csdn.net/weixin_41836744/article/details/101838960

git checkout -b test

git remote update origin -p

git tag -d testtag

// 列出本地标签
git tag --list
// 创建标签
git tag -a v1.0.1 -m "创建v1.0.1"
// 推送本地标签到远程库
git push origin v1.0.1
// 删除本地标签
git tag -d v1.0.1
// 删除远程标签
git push origin  :refs/tags/v1.0.1

# 批量删除tag
https://segmentfault.com/a/1190000015380270
git tag -l| awk '/^.*$/ {print $1}' | xargs git tag -d
git show-ref --tag | awk '/^.*$/ {print ":" $2}' | xargs git push origin

git tag -d v0.9
git push origin :refs/tags/v0.9

git restore .

# git命令
https://blog.csdn.net/wei371522/article/details/83186077

# 删除所有本地分支
git tag -l | xargs git tag -d

# 从远程拉取所有信息`
git fetch origin --prune

# something in devbranch

查看本地: 
git tag -l
查看远程: 
git show-ref --tag

# 清除未跟踪的文件
git  clean  -f

# 查询远程地址
git  remote -v
