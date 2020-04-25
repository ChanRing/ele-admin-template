# 构建与发布

## 构建

当项目开发完毕，只需要运行命令行就可以打包你的应用。

```
用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化

```

这里还有一些有用的命令参数：

- --modern 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。

- --report 和 --report-json 会根据构建统计生成报告，它会帮助你分析包中包含的模块们的大小。

当然，作为一个改 bug 都不够时间的前端小伙，肯定需要学会偷懒啦，你还可以将发布到测试环境的工作交给`Jenkins`这种工具，不再需要依赖后端/运维小哥啦。

:::tip 自动化部署方案
:::

### Jenkins

[JenKins 自动化部署](https://iytz2gwgw1.feishu.cn/docs/doccnnhfa7W3fCpUwU2ETebBpOh)

### 使用 Nginx

自动部署脚本

```shell script
#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# 部署到 /usr/local/var/www/md-admin-template

cp -r dist/* /usr/local/var/www/md-admin-template

cd -
```

nginx 配置如下：

```nginx
server {
    listen       80;
    server_name  localhost;

	root /usr/local/var/www/;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

	location / {}

        location ^~/md-admin-template {
	    index index.html;
      	try_files $uri $uri/ /md-admin-template/index.html;
	}

    #error_page  404              /404.html;

}
```
