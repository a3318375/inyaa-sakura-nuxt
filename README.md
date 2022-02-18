# inyaa-sakura-nuxt

inyaa-sakura-nuxt是inyaa系列的博客前端采用了nuxt3，vue3，ts等技术，样式上参考了[Mashiro大佬的sakura](https://https://github.com/a3318375/github-img/blob/main.com/mashirozx/Sakura?_from=https://github.com/a3318375/github-img/blob/main_search)和[染川瞳大佬的基于sakura改版](https://https://github.com/a3318375/github-img/blob/main.com/mirai-mamori/Sakurairo?_from=https://github.com/a3318375/github-img/blob/main_search)，但是要说是硬扒样式，也没什么不对。

# 技术组成

项目整体上来说，还在开发中，并且提前声明，我不是专业前端，我本职是java，前端只是我的个人爱好。
所以很多代码风格，可能会很怪。

* [x] `nuxt3`
* [x] `vue3`
* [x] `typescript`
* [x] `windicss`
* [x] `dayjs`
* [x] `markdown-it`
* [x] `highlight`
* [x] `headlessui`

# 涉及后端

实际上，大部分api都在CRM后端API这里，博客后端API只有评论功能。

> CRM后端API: [https://git.inyaa.cn/a3318375/inyaa-admin](https://git.inyaa.cn/a3318375/inyaa-admin)<br/>
> spring网关: [https://git.inyaa.cn/a3318375/inyaa-gateway](https://git.inyaa.cn/a3318375/inyaa-gateway)<br/>
> 博客后端API: [https://git.inyaa.cn/a3318375/inyaa-web](https://git.inyaa.cn/a3318375/inyaa-web)<br/>
> 图片服务: [https://git.inyaa.cn/a3318375/inyaa-picture](https://git.inyaa.cn/a3318375/inyaa-picture)

# 二次开发

```
# 初始化
yarn install
# 开发启动
yarn dev
# 编译
yarn build
# 编译后运行
yarn start
# 访问地址
$ http://localhost:3000
```

# 生产部署

1: 执行`yarn build`后，拷贝.output的内容，拷贝到服务器上，安装nodejs，通过nginx反向代理指定目录，或者从腾讯云阿里云控制台直接指定。<br/>
2：修改dockerfile, 把`ADD .output output`改成`ADD . .` 拷贝所有内容到docker，然后修改加入`RUN yarn install`和`ENTRYPOINT ["yarn","start"]` ,idea可以直接远程部署，也可以百度怎么手动<br/>
3: 项目目录内有drone和docker，可以百度搜一下drone，可以自动部署，但是需要把项目放到私有git

# 疑难解答

请直接评论或者提交issues，如果十分紧急，请加我QQ：184608371

# 页面展示

![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160352.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160413.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160425.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160444.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160509.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160656.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160707.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160717.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160735.png)
![输入图片说明](https://github.com/a3318375/github-img/blob/main/QQ截图20220218160755.png)