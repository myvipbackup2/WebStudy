包管理
	自动下载东西
	解决依赖

npm => Node Package Manager
	1.下东西
	2.顺便下载依赖包

access, add-user, adduser, apihelp, author, bin, bugs, c,
cache, completion, config, ddp, dedupe, deprecate, dist-tag,
dist-tags, docs, edit, explore, faq, find, find-dupes, get,
help, help-search, home, i, info, init, install, issues, la,
link, list, ll, ln, login, logout, ls, outdated, owner,
pack, ping, prefix, prune, publish, r, rb, rebuild, remove,
repo, restart, rm, root, run-script, s, se, search, set,
show, shrinkwrap, star, stars, start, stop, t, tag, team,
test, tst, un, uninstall, unlink, unpublish, unstar, up,
update, upgrade, v, verison, version, view, whoami

常用命令：
npm install 名字		安装
npm uninstall 名字		卸载

npm上传自己的模块
https://www.npmjs.com/

1.注册、登录用户
	npm adduser
	npm login

2.检查
	npm whoami

3.建立package
	npm init

4.发布
	npm publish
		*再次发布——加版本号

5.删除发布
	npm unpublish 名字 --force

--------------------------------------------------------------------------------------------------------

	version		固定版本
	>version
	>=version
	<version
	<=version
	~version	近似版本(次要版本)
	^version	兼容版本
	*		任何版本
	a - b		a->b之间

版本号
主版本.次版本.build号

天翻地覆.功能改进.小修补

--------------------------------------------------------------------------------------------------------

-g

--------------------------------------------------------------------------------------------------------

scripts
	npm start		启动
	npm stop		关闭
	npm restart		重启
	npm test

files
	包含哪些文件

--------------------------------------------------------------------------------------------------------

npm——不错、方便、做贡献

加速——淘宝：
npm install -g cnpm --registry=https://registry.npm.taobao.org

--------------------------------------------------------------------------------------------------------

cnpm命令跟npm

--------------------------------------------------------------------------------------------------------

Yarn
1.快
2.缓存

--------------------------------------------------------------------------------------------------------

yarn、yarn install	自动安装所有依赖包		npm install
yarn add 包						npm install xxx --save
yarn remove 包

--------------------------------------------------------------------------------------------------------

npm->cnpm
yarn

--------------------------------------------------------------------------------------------------------

browserify
	node.js打包、给前台用

browser-sync
	同步——多端、源码和页面

--------------------------------------------------------------------------------------------------------

browserify安装
	cnpm -g install browserify

	编译、打包前台JS

	browserify 要编译的JS文件 > 结果文件

--------------------------------------------------------------------------------------------------------

browser-sync
	cnpm install -g browser-sync

	browser-sync start --server --files "*"
















