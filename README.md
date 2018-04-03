
使用以下两个命令即可运行起网页版

> 1.npm install

> 2.ionic serve

# 初衷
跳槽以后来到了新的公司，新的项目，每天朝九晚五，终于摆脱了以前朝九晚九的加班生活，谁说程序员就必须加班了，感觉自己作息也变得正常了起来。

空余出的大段时间拿来干什么呢？闲不住的小少年就想着自己做个啥，嗯，做个APP吧，毕竟PC已经是上个时代的事情了，人工智能AI、大数据啥的咱也不懂，又作为一只喜欢抢热点的全站攻城狮，就自己动手撸前后台代码搞一个APP吧，没事装在手机里玩儿也可以装装逼嘛是吧。

说干就干，做个啥APP呢？又把我难住了，出师未捷身先死呀，人类的大部分行动都倒在了第一步，不行，必须想出来。嗯，突然想起来前一段时间有朋友找我想做一个煤炭物流APP，说你不是会写代码吗，给我搞一个APP呗，我流着泪在半夜12点回过去消息说，哥，我才下班，你看能行不。现在有时间了呀，煤炭+物流，符合地方特色，就这样定了。

然后就是蒙头撸代码，中间暂时省略10w字，反正一个月以后做完了。不瞎比比了，先上图再说。



![首页](http://upload-images.jianshu.io/upload_images/3529154-a6b6a94e05b98e29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![煤价](http://upload-images.jianshu.io/upload_images/3529154-711d2730c0a66607.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![物流](http://upload-images.jianshu.io/upload_images/3529154-b00de989da915e7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![我的](http://upload-images.jianshu.io/upload_images/3529154-247ef2fff5cde007.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

二级页面就不做展示了，总之自我感觉还是肥肠的丰满啦（自信脸）。

# 技术准备
虽然任何开发的第一步都是可行性分析和设计，但是鉴于讲起来太庞杂，也不符合这次分享的主题，就略过了。直接从开发阶段讲起。

万里长征第一步当然是技术选型啦，为了配合这次高大上的APP，使用的技术当然也要高大上，不然怎么显示我的全站水平呢（颜面），毕竟能站着编程的人肯定不一般。

本次前端APP的核心框架是Ionic2（其实已经是Ionic3.5了，统一起见还是称它为Ionic2吧），后端的核心框架是Spring Boot。都是基于我现在的技术栈，在不超出自己控制能力的前提下选择了当前最优秀的框架，用之可以大大提高生产力。哈哈，不吹了，总之目前我的感觉就是选的漂亮，谁用谁知道。

### 工具准备
- 前端框架：Ionic2
- 后端框架：Spring Boot
- 开发工具：Idea
- 前端调试工具：Chrome
- 代码仓库：Github

为啥要特意说一下开发工具呢，low不low啊，又不是小学生。因为Idea相对于eclipse来说实在是好用了无数倍啊（捂脸哭），如果还没体验过的墙裂介意无论是前端还是后端都试一下，简直就是开发的救星。

同时，即便是一个人开发也推荐用Github，因为实在是太方便了，随时随地，修改提交你的代码。如果是多人协作，那就更应该用Github了，因为谁也不想把代码用QQ传来传去对吧？

# 开发阶段分解
因为本专题重点想讲的是基于Ionic2的APP开发，所以就以前端为核心去分解，后端如有必要，后面再补充。

###### 1. [Ionic2实战-项目初始化](http://www.jianshu.com/p/307afd700fef)；
###### 2. [Ionic2实战-框架和模块目录结构说明和设计](http://www.jianshu.com/p/cd7fae4ef267)；
###### 3. [Ionic2实战-Android版打包](http://www.jianshu.com/p/37633bda766c)；
###### 4. [Ionic2实战-iOS版打包](http://www.jianshu.com/p/3486154719d1)；
###### 5. [Ionic2实战-网页版编译部署](http://www.jianshu.com/p/11772fed6f90)；
###### 6. [Ionic2实战-功能模块开发基本说明](http://www.jianshu.com/p/3703e1f47b1a)；
###### 7. [Ionic2实战-Icon图片和Splash开屏图片自定义](http://www.jianshu.com/p/f7b5d9832b7e)；
###### 8. [Ionic2实战-Tab菜单栏自定义](http://www.jianshu.com/p/b316e46e412c)；
###### 9. [Ionic2实战-Cordova插件安装](http://www.jianshu.com/p/ce4080c97345)；
###### 10. [Ionic2实战-第三方类库依赖添加](http://www.jianshu.com/p/c41b4050a5ef)；
###### 11. [Ionic2实战-框架样式自定义](http://www.jianshu.com/p/3f0d25340919)；
###### 12. [Ionic2实战-Http请求模块设计](http://www.jianshu.com/p/eb8736d7b603)；
###### 13. [Ionic2实战-跨域问题处理](http://www.jianshu.com/p/7ce5a1d90ed7)；
###### 14. [Ionic2实战-路由导航功能说明](http://www.jianshu.com/p/f0cd6ff9ad81)；
###### 15. [Ionic2实战-如何使用阿里字体图标库](http://www.jianshu.com/p/bae9f3ed37cc)；
###### 16. [Ionic2实战-APP应用内升级模块开发](https://www.jianshu.com/p/3d85a6398102)；
###### 17. [Ionic2实战-图片点击缩放功能开发](https://www.jianshu.com/p/454a0a16ce54)；
###### 18. [Ionic2实战-时间转换库moment的使用](https://www.jianshu.com/p/90a54e546639)；
###### 19. [Ionic2实战-第三方页面嵌入功能开发](https://www.jianshu.com/p/9afab9180376)；
###### 20. [Ionic2实战-微信分享功能开发](https://www.jianshu.com/p/36485438e5af)；
###### 21. [Ionic2实战-图片上传功能开发](https://www.jianshu.com/p/598de407620b)；
###### 22. [Ionic2实战-拍照功能开发](https://www.jianshu.com/p/212fa3b7548e)；
###### 23. [Ionic2实战-注册登录模块开发](https://www.jianshu.com/p/5cb92e049b9f)；
###### 24. Ionic2实战-首页模块开发；
###### 25. Ionic2实战-煤价模块开发；
###### 26. Ionic2实战-物流模块开发；
###### 27. Ionic2实战-个人中心模块开发；
###### 28. Ionic2实战-APP如何在Android应用商店上架发布；
###### 29. Ionic2实战-APP如何在App Store上架发布；
###### 30. Ionic2实战-APP如何生成推广链接进行多渠道推广；

##### 最后说点
以上过程包含了Ionic2APP从开始的项目创建到基础功能搭建，到业务功能开发，再到打包和发布，还有如何推广，包含了一个商业APP应用的整个生命周期，一些新手坑我会重点写出来提醒大家，因为自己作为新手也踩的很蛋疼。

以上每一点都会写一篇文章来详细说明，过程中如果想到其他重要的功能就补充进去。另外上面都是APP的技术框架模块的说明，可能不够完全，想到什么会再继续补充。

如果你有什么关于Ionic2或者Spring Boot想交流的也可以留言或者私信再或者微信联系我，欢迎欢迎。

#### 前端项目开源地址
项目的完整代码在我的GitHub上，如感兴趣可以下载查看：
https://github.com/aapple/sm-coal-app

#### 后端项目开源地址
应广大同学的强烈要求，支撑该APP后端的Spring-Boot项目也开放出来了，可以自由下载学习：
https://github.com/aapple/coalapp

