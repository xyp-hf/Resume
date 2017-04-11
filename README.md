# Resume
<a href="http://www.xuyupeng.com">我是xyp-hf,欢迎访问我的网站</a>
#
#git命令 和 gulp入门
#
#开始：
#git config --global user.name "Github用户名"
#git config --global user.email "邮箱地址"
#
#git config  –global 参数，有了这个参数，表示你这台机器上所有
#的Git仓库都会使用这个配置，当然你也可以对某个仓库指定的不同的
#用户名和邮箱。
#-------------------------------------------------------------
#
#创建版本库：
#选择盘及路径：如
#cd D:
#选择路径：如
#cd www
#创建版本库:如
#mkdir testgit
#取得路径:如
#cd testgit
#
#显示当前目录：如
#pwd
#
#把目录编程git可管理的仓库：
#git init   //testgit目录下会多一个隐藏的.git文件
#
#-------------------------------------------------------------
#
#在testgit目录下新建记事本，命名：文件名
#添加到暂存区
#git add 文件名
#提交到仓库
#git commit -m '你要添加的注释'
#查看是否有文件未提交，查看状态
#git status
#查看文件改了什么
#git diff 文件名
#
#-------------------------------------------------------------
#版本回退
#查看提交的版本及版本号:
#git log
#仅查看版本号及注释
#git log --pretty=oneline
#
#版本回退：
#回到上一个版本：
#git reset --hard HEAD^
#回退到上上个版本:
#git reset --hard HEAD^^
#回到前100个版本
#git reset  --hard HEAD~100
#
#-------------------------------------------------------------
#查看版本的内容：
#cat 文件名
#获取版本号:
#git reflog
#恢复之前指定的版本号：
#git reset --hard 之前的版本号
#
#-------------------------------------------------------------
#
#将git提交到版本库:
#第一步：将文件添加到暂存区
#git add 文件名
#第二步：把暂存区所有内容提交到当前分支上
#git commit "-m" "注释"
#
#-------------------------------------------------------------
#撤销修改和删除文件
#修改：
#第一：如果我知道要删掉那些内容的话，直接手动更改去掉那些需要的文件，
#然后add添加到暂存区，最后commit掉。
#第二：我可以按以前的方法直接恢复到上一个版本。使用 git reset  –hard HEAD^
#
#修改：
#将文件在工作区的修改全部撤销
#git checkout -- 文件名
#
#删除：
#添加文件：
#git add 文件名
#删除文件：
#rm 文件名
#
#恢复文件：
#git checkout -- b.txt
#提交：
#git commit -m "注释"
#
#-------------------------------------------------------------
#远程仓库：
#在了解之前，先注册github账号，由于你的本地Git仓库和github仓库
#之间的传输是通过SSH加密的，所以需要一点设置：
#
#第一步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，
#再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果有的话，
#直接跳过此如下命令，如果没有的话，打开命令行，输入如下命令：
#
#ssh-keygen -t rsa -C "你的邮箱"
#id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。
#
#第二步：登录github,打开” settings”中的SSH Keys页面，然后点击
#“Add SSH Key”,填上任意title，在Key文本框里黏贴id_rsa.pub文件的内容。
#
#点击 Add Key，你就应该可以看到已经添加的key。
#
-------------------------------------------------------------
#远程仓库同步：
#创建新仓库：
#第一步：登录github上，然后在右上角找到“create a new repo”创建一个
#新的仓库
#
#第二步：在Repository name填入testgit，其他保持默认设置，点击
#“Create repository”按钮，就成功地创建了一个新的Git仓库：
#
#第三步：链接上远程仓库：
#git remote add origin 仓库地址
#
#第四步：将本地仓库分支master内容推送到远程仓库
#git push -u origin master
#
#由于远程库是空的，我们第一次推送master分支时，加上了 –u参数，
#Git不但会把本地的master分支内容推送的远程新的master分支，还会
#把本地的master分支和远程的master分支关联起来，在以后的推送或
#者拉取时就可以简化命令。推送成功后，可以立刻在github页面中看
#到远程库的内容已经和本地一模一样了，上面的要输入github的用户
#名和密码如下所示：
#
#简化后本地提交：
#git push origin master
#
#-------------------------------------------------------------
#
#远程仓库克隆到本地：
#克隆到本地：
#git clone 远程仓库地址
#
#-------------------------------------------------------------
#创建与合并分支：
#
#创建并切换分支：
#git checkout -b 分支名称
#查看当前分支名称：//当前分支前面会打*号
#git branch 
#
#git checkout 命令加上 –b参数表示创建并切换，相当于如下2条命令
#
#git branch 分支名称 创建分支
#
#git checkout 分支名称 切换分支
#
#合并分支：
#
#将分支1合并到当前分支上：
#git merge 分支1
#
#删除分支：
#git branch -d 分支1
#
#总结创建与合并分支命令如下：
#   查看分支：git branch
#   创建分支：git branch name
#   切换分支：git checkout name
#创建+切换分支：git checkout –b name
#合并某分支到当前分支：git merge name
#删除分支：git branch –d name
#
#-------------------------------------------------------------
#
#解决冲突
#
#分支管理策略
#创建一个 分支名称 分支;
#git checkout -b 分支名称
#修改 文件内容
#添加到暂存区
#git add 文件名称
#git commit -m "注释"
#切换回主分支
#git checkout 要切换到的分支名称
#
#合并dev分支:禁用”Fast forward”模式
#git merge –no-ff  -m “注释” dev
#
#删除分支：
#git branch -d 分支名称
#
#查看历史注释及版本号：
#git log --graph -- prstty = oneline --abbrev-commit
#
#分支策略：首先master主分支应该是非常稳定的，也就是用
#来发布新版本，一般情况下不允许在上面干活，干活一般情
#况下在新建的dev分支上干活，干完后，比如上要发布，或者
#说dev分支代码稳定后可以合并到主分支master上来。
#
#
-------------------------------------------------------------
#bug分支：
#隐藏当前工作现场:
#git stash
#查看状态：
#git status
#
#创建临时分支
#git checkout -b issue-404
#修改bug文件
#git add 文件名
#git commit -m "注释：修复了404bug"
#
#切换回主分支
#git checkout 主分支名称
#
#将bug修复分支合并到主分支
#git merge --no-ff -m "merge bug fix 404" issue-404
#
#查看修改后的分支
#cat 文件名
#
#删除临时分支：
#git branch -d issue-404
#-------------------------------------------------------------
#回到原来工作分支：
#git checkout 分支名称
#git status
#
#查看工作现场：
#git stash list
#
#Git把stash内容存在某个地方了，但是需要恢复一下，可以使用
#如下2个方法：
#git stash apply恢复，恢复后，stash内容并不删除，你需要使
#用命令git stash drop来删除。
#另一种方式是使用git stash pop,恢复的同时把stash内容也删除了。
#
#-------------------------------------------------------------
#多人协作：
#查看远程库的信息：
#gir remote
#查看远程库详细信息
#git remote -v
#
#把该分支上所有本地提交到远程库中
#git push origin 分支名称
#
#git pull把最新的提交从origin/dev抓下来，然后在本地合并，解决冲突，再推送
#
#因此：多人协作工作模式一般是这样的：
#
#首先，可以试图用git push origin branch-name推送自己的修改.
#如果推送失败，则因为远程分支比你的本地更新早，需要先用git pull试图合并。
#如果合并有冲突，则需要解决冲突，并在本地提交。再用git push origin branch-name推送。
#
#
#自动化工具gulp的用法
#
#去github下载jQuery源码
#git clone git://github.com/jquery/jquery.git
#
#mkdir 文件名 创建文件目录
#
#node -v //查看版本号
#npm -v 查看npm版本号
#
#cd 定位目录路径
#dir 列出文件列表
#cls 清空命令提示符窗口内容
#
#<name>：node插件名称。例：npm install gulp-less --save-dev
#
#-g：全局安装
#--save：将保存配置信息至package.json（package.json是nodejs项目配置文件）；
#
#-dev：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；一般保存在dependencies的像这些express/ejs/body-parser等等。
#
#使用npm卸载插件：npm uninstall <name> [-g] [--save-dev]
#
#选装cnpm
#npm install cnpm -g --registry=https://registry.npm.taobao.org
#
#7.1、安装：定位目录命令后提示符执行cnpm install --save-dev；
#7.2、本示例以gulp-less为例（编译less文件），命令提示符执行cnpm install gulp-less --save-dev；
#
#11.1、安装nodejs；
#11.2、新建package.json文件；
#11.3、全局和本地安装gulp；
#11.4、安装gulp插件；
#11.5、新建gulpfile.js文件；
#11.6、通过命令提示符运行gulp任务。
#
#3.3、使用npm卸载插件：npm uninstall <name> [-g] [--save-dev]  PS：不要直接删除本地插件包
#3.3.1、删除全部插件：npm uninstall gulp-less gulp-uglify gulp-concat ……???太麻烦
#3.3.2、借助rimraf：npm install rimraf -g 用法：rimraf node_modules
#3.4、使用npm更新插件：npm update <name> [-g] [--save-dev]
#3.4.1、更新全部插件：npm update [--save-dev]
#3.5、查看npm帮助：npm help
#3.6、当前目录已安装插件：npm list
#
#npm install -g gulp










