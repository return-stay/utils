### git常用命令

* 下载制定分支
  > * git pull <远程库名> <远程分支名>:<本地分支名>

* 版本回退：可以将当前仓库回退到历史的某个版本
  > * git reset 
  > * 第一种用法：回退到上一个版本（HEAD代表当前版本，有一个^代表上一个版本，以此类推）
  > * git reset --hard HEAD^
  > * 第二种用法：回退到指定版本(其中d7b5是想回退的指定版本号的前几位)
  > * git reset --hard d7b5



* git远端库相关

  > * git remote add origin git://127.0.0.1/abc.git 这样就增加了远程仓库abc。
  > * git remote remove origin移除远端仓库

  > * 将本地仓库内容推送到远端仓库(-u 表示第一次推送master分支的所有内容，后面再推送就不需要-u了)，跟commit的区别在于一个是提交到本地仓库，一个是提交到远程仓库
    >> * git push -u origin master