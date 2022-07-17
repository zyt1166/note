---
title: Tool
---

## github下载并安装vue-devtools
- 选择分支vue-devtools
- 下载安装包
- 解压
- 打开目录，cmd
- npm/cnpm install
- npm run build
- 最后在浏览器找更多工具-->扩展程序-->加载已解压的扩展程序，接着选择找到刚才解压的文件夹 ，目录层级为：devtools-add-remote-devtools-->shells-->chrome即可实现。
## vscode插件
- live Sever 本地服务器
- Vetur 点击vue路径可以跳转这个页面
- Path Intellisense 路径识别
   - tsconfig.json配置给创建识别@
   - vue.config.js配置给vue使用
## 快捷键
- 查看组件ctrl+p
- 选中你要复制文件夹名字的文件夹，点击F2键，名字会被选中

## icon-park的在线链接(Web Component)功能使用指南
- 在public/img/index.html引入
- 复制Web Component代码使用
- !每次新的icon更新就得重新引入代码

## Git
- 作用：版本控制
   1. 代码还原/回滚
   2. 协同开发
   3. 备份
   4. 代码追责
- 常用的版本控制
   1. 集中式svn
   2. 分布式git
### Git分支管理
> 我们在实际工作中会创建很多分支以便于不同场景下的开发，但是如果没有分支规范就会造成分支杂乱，大家往往也搞不清楚某一个分支是在做什么，下面我们就介绍一下我们常用的并且推荐大家使用的分支类型。
#### master 分支
- 为产品主分支，该分支为只读唯一分支，也是用于部署生产环境的分支，需确保master分支的稳定性。
- master 分支一般由release分支或hotfix分支合并，任何情况下都不应该直接修改master分支代码。
- 产品的功能全部实现后，最终在master分支对外发布，另外所有在master分支的推送应该打标签（tag）做记录，方便追溯。
- master 分支不可删除。

#### develop 分支
- develop 发展 开发
- develop 为主开发分支，基于master分支创建，始终保持最新完成功能的代码以及bug修复后的代码。
- develop 分支为只读唯一分支，只能从其他分支合并，不可以直接在该分支做功能开发或bug修复。
- 一般开发新功能时，feature分支都是基于develop分支下创建的。
- develop 分支包含所有要发布到下一个release的代码。
- feature功能分支完成后, 开发人员需合并到develop分支(不推送远程)，需先将develop分支合并到feature，解决完冲突后再合并到develop分支。
- 当所有新功能开发完成后，开发人员并自测完成后，此时从develop拉取release分支，进行提测。
- release或hotfix 分支上线完成后, 开发人员需合并到develop分支并推送远程
- develop 分支不可删

#### feature 分支
- feature 分支通常为新功能或新特性开发分支，以develop分支为基础创建feature分支。
- 分支命名: feature/ 开头的为新特性或新功能分支，建议的命名规则:
- 新特性或新功能开发完成后，开发人员需合到develop分支。
- feature 分支可同时存在多个，用于团队中多个功能同时开发。
- feature 分支属于临时分支，功能完成后可选删除。

#### release 分支
- release 释放 发行
- release 分支为预上线分支，基于本次上线所有的feature分支合并到develop分支之后，从develop分支创建。
- 分支命名: release/ 开头的为预上线分支
- release 分支主要用于提交给测试人员进行功能测试。发布提测阶段，会以release分支代码为基准进行提测。测试过程中发现的bug在本分支进行修复，上线完成后需合并到develop/master分支并推送远程。
- release 分支属于临时分支，产品上线后可选删除。
> 当有一组feature开发完成后，首先开发人员会各自将最新功能代码合并到develop分支。进入提测阶段时，开发组长在develop分支上创建release分支。
如果在测试过程中发现bug需要修复，则直接由开发者在release分支修复并提交。当测试完成后，开发组长将release分支合并到master和develop分支，此时master为最新可发布代码，用作产品发布上线。

#### hotfix 分支
- hotfix 分支为线上bug修复分支或叫补丁分支，主要用于对线上的版本进行bug修复。
- hotfix 分支用于线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支。当问题修复完成后，需要合并到master分支和develop分支并推送远程。
- 所有hotfix分支的修改会进入到下一个release。
- hotfix 分支属于临时分支，bug修复上线后可选删除。

### Git Flow工作流
#### 主分支流程
- master分支记录了每次版本发布历史和tag标记
- develop分支记录了所有开发的版本历史
- develop分支仅第一次创建时从master分支拉取
![](https://img-blog.csdnimg.cn/img_convert/9fc2fa0122862a7244f90559839c30c5.png)
#### 开发流程
- feature分支是从develop分支拉取的分支
- 每个feature完成后需合并到develop分支。
![](https://img-blog.csdnimg.cn/img_convert/0debe762d491b5facef3ec51b6b82a4a.png)
#### 提测发布流程
- release分支是在所有功能开发自测完成后，从develop分支拉取的分支。
- release分支一旦创建后，通常不再从develop分支拉取，该分支只做bug修复，文档生成和其他面向发布的任务。
- release分支测试完成，达到上线标准后，需合并回master分支和develop分支。
![](https://img-blog.csdnimg.cn/img_convert/9fc2fa0122862a7244f90559839c30c5.png)
#### bug修复流程
- hotfix分支是在线上出现bug之后，从master分支拉取的分支。
- hotfix分支测试完成后，需合并回master分支和develop分支。
![](https://img-blog.csdnimg.cn/img_convert/ad224ea2f1907276dc27029ee08d382e.png)
### 常用操作
![alt xx](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2020.cnblogs.com%2Fblog%2F932856%2F202004%2F932856-20200423143251346-796113044.jpg&refer=http%3A%2F%2Fimg2020.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660142563&t=aea6a8d08d5860ec1b81a0cef6c850a9)
![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F19724385-f6fd498f7ca2ebfc.png&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660142563&t=2a72a4774928349e98fad1112d31808b)
1. clone（克隆）：
2. checkout（检出）：从本地仓库checkout检出到workspace工作区，<mark>切换版本</mark>
3. add（添加）：
4. commit（提交）：提交到本地仓库，本地仓库保存修改的各个历史版本，-m的备注信息很重要，可以进行区分
5. fetch（抓取）：从远程仓库抓取到本地仓库，不进行任何合并动作，
6. pull（拉取）：从远程拉到本地仓库，自动进行合并（merge），然后放到工作区。相对于<mark>fetch+merge</mark>
7. push（推送）：

#### 查看
```
<!-- 查看文件状态 -->
git status
<!-- 查看提交日志 -->
git log
```
#### 版本回退
```
<!-- 版本回退 -->
git reset --hard commitID
<!-- commitID查看 -->
git log
```
#### 合并提示
- (feature/manage-tools|MERGING)
- add commit 会消失
#### git与分支
```
<!-- 创建本地分支，并切换到本地分支上 -->
git checkout -b feature/blood-ketone
<!-- 切换分支 -->
git checkout xx
<!-- 查看本地分支 -->
git branch
<!-- dev01合并到master上 -->
git checkout master
git merge dev01
```
####  删除分支
```
<!-- -D为强制删除 -d非强制 -->
<!-- 删除当前分支外的所有分支 -->
git branch | xargs git branch -d
<!-- 删除一条分支 -->
git branch -d branchName
git branch -D branchName
```
### 解决冲突
> 当两个分支上对<mark>同一个文件进行的同一行</mark>进行<mark>不同</mark>的修改，就会发生冲突
```
<!-- 会显示两个分支修改的内容 -->
<<<<< HEAD
当前分支修改的内容
================
别的分支上修改的内容
>>>>>
```
如何解决？

### git远程仓库
- 如何搭建远程仓库?github、gitee、gitlab等
- 工作中较多的是gitlab，因为gitee和github都是把代码放在别人那，不太安全，而gitlab是自己搭建的，比较安全
- gitee码云是国内的代码托管平台，由于服务器在国内，速度比github快

### ⭐公司新建分支开发功能
```
git checkout release
git pull origin release
git checkout -b feature/xxx (xxx:为功能名称)
```
### ⭐公司每日开发提交代码
```
git add .
git commit -m “feat(模块): 开发功能描述”
git push origin feature/xxx
```
- -m 的系统功能可以写xx1 xx2
### ⭐公司提测
1. 开发完成
```
git add .
git commit -m ‘feat(模块)：开发功能修改等描述’
git push origin 我的分支
<!-- 拉取最新的develop分支，每次合并都保证最新 -->
git checkout develop
git pull origin develop
<!-- 把自己的分支合并到develop上 -->
git merge --no-ff 我的分支
（合并的时候可能有冲突 淡定 因为同事也可能在这个地方做了修改）
（查看冲突 一般保留两者的修改 git add . + git commit -m ''）
git push origin develop
```
> 到gitee上查看是否发布到测试环境
![](https://img-blog.csdnimg.cn/3995da5b80964498af724c50a02ca568.png)

2. 到jenkins里面发布测试：选择项目，build now
3. 到钉钉群里@测试
![](https://img-blog.csdnimg.cn/f34af607088547668ea8d16ead56385f.png)
4. 修改任务状态
### ⭐公司修改自测、测试问题时处理
```
<!-- 切换到分支修改bug -->
git checkout feature/xxx
git add .
git commit -m 'fix(模块命名): 修复问题描述;'
git push origin feature/xx
<!-- 开发分支合并到develop分支 -->
git checkout develop
git pull origin develop
git merge --no-ff 我的分支
git push origin develop
<!-- 进行修复 -->
<!-- 发布jenkens，不要点错项目，这个点了，测试才可看到 -->
```
- 发布完成后，修改任务状态点击解决问题！！
### ⭐公司注意事项
- 操作add 前，检查修改文件(git status)及对比修改内容(可用对比工具)，不要提交无用或不需要修改的代码
- 每次提交必须写明注释，如修复Bug，格式：fix(模块命名): 修复问题描述;
- 新开发功能，格式：feat(模块命名):功能描述;
- 一般情况下，同时只允许一个develop、release分支存在
- 所有线上发布，都要打上tag，加上发布版本号 例：1.0.0，且tag版本与项目中的package.json中的版本保持一致
- 合并分支时必须使用--no-ff参数，以保留合并历史轨迹
   - 合并release分支： git merge --no-ff release
- develop分支代码不允许合并到其他分支(重要的事情说三遍)

### 本地查看不到远程新建的分支
1. git remote update origin --prune # 更新同步远程主机origin 整理分支
2. git branch -r      # 列出远程分支### 把本地项目推到gitee

- 在gitee创建仓库
- 在本地操作
  - git init
  - touch README.md
  - git add .
  - git commit -m "first commit"
  - git remote add origin git@gitee.com:sise1840622148/test.git
  - git push -u origin "master"

### ⭐不小心在非自己分支下进行提交的操作
- git log，commit信息就在这体现了
- git reset --hard xxxxx
### git如何忽略node-module文件

- 创建.gitignore文件
- touch .gitignore ，生成“.gitignore”文件/也可以手动创建
- 在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。（注意格式）

```
# 例如vuepress的
.temp
node_modules
```
### ⭐合并发生冲突的解决方法
- 合并分支后,如果存在冲突,右下角会出现一个提示框,提示:存在合并冲突。请在提交之前解决这些冲突。
- 左边导航第三个图标中，找到产生冲突的文件。
- 打开文件,找到发生冲突的代码段,分析下那一段代码才是最新的,正确的,就留下那一段代码即可。
- 修改冲突请点击：采用当前修改|采用传入的修改|保留双方更改|比较变更；
![](https://img-blog.csdnimg.cn/20210427104519395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5ODEzNDAw,size_16,color_FFFFFF,t_70)
```
<<<<<<< HEAD
<div id="footer">
let name = '111'
</div>
=======
<div id="footer">
let name = '222'
</div>
>>>>>>> feature/blood-ketone

```
- =======上面是当前分支（也就是master）的代码，=======下面是要合并进来的分支的代码，两者发生了冲突。
- 解决方法一(借助vsocde)
![](https://img-blog.csdnimg.cn/2fe1c30223f045478acf4025f8ef2703.png)
![](https://img-blog.csdnimg.cn/64a164ea3bc545a6b6c82b6e7a80bc96.png)
- 上面代码可以看出新改动的是let name = ‘222’ 只需要点击 采用传入的更改 就行；他有几个选择，采用当前更改，采用传入的更改和都采用。也可以选择比较不同。
- 也可以手动删除
- 解决冲突后，保存
- git add . 缓存区
- git commit -m 'xx' 仓库
- 目录页红色变成正常
### 测试回归
- 回归测试是指修改了源代码后，重新测试以确认修改有没有引入新的错误或导致其他代码产生错误
- 当把多个小组代码进行merge的时候，需要确认这些小组内实现的几个功能，以及小组间实现的若干功能不会产生相互影响，程序的业务逻辑能够正常进行下去，这时候进行的测试就被称作回归测试。

### error: Your local changes to the following files would be overwritten by merge
- 错误：您对以下文件的本地更改将被合并覆盖：
- 出现的原因是git merge时本地分支的更改没有保存下来。
- git add 
- git commit
### error: src refspec master does not match any

- 报错原因：文件里面少了README.md
- 解决方式：在本地创建README.md文件
  - touch README.md

## vscode和markdown

- markdownlint插件：它是一个md文件的linter，包括一个规则库，以鼓励 Markdown 文件的标准和一致性
### markdown
- `<mark>高亮文字</mark>`
## VuePress

- docs文件夹下的README.md是默认的主页
- docs每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /
- 网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /。
- 跳转语法:`[链接描述](路径)`
  - `[跳转到learn页面](../learn/index.md)`[跳转到learn页面](../learn/index.md)
  - `[跳转Home](/)`[跳转Home](/)

### 侧边栏

1. 为什么需要侧边栏

- 文章内快速检索（目录TOC）
- 关联内容快速跳转（导航）

2. 简单形式：数组

### 注意事项

- 造成页面显示不出来的情况：在md文件里使用，标签 `<html>、<router-link>等各种标签`，我猜测应该是不能解析所以显示不出来把
- 自动开启侧边栏，一个md只能一个一级标题？

## Vuepress部署
### github pages
- 传统的部署需要我们去购买服务器,域名,还需要做域名解析,备案之类的事情,往往需要一段时间才能完成.因此今天我们将我们的博客项目部署到github上.对的,你没有看错,github不仅仅只是一个保存我们代码的网站,它还可以帮助我们展示一些静态页面.今天我们就用github pages 来发布自己的静态博客.
- 今天,我们不用传统的购买服务器域名那一套,我们使用Github Pages 来部署.在github上展示静态网站有两个方法.

### 发布到github.io
1. 指向github仓库
```
git config -l
查看remote.origin.url
```
2. 修改base
3. 新增部署文件（deploy.sh）
4. 验证gh-pages
5. 设置website，便于他人访问