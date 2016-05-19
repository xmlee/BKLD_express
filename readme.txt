app.js：启动文件，或者说是入口文件，程序main文件
package.json：存储着工程的信息及模块依赖，当在dependencies中添加依赖模块时，运行npm install,
	      npm会检查当前目录下的package.json，并自动安装所有指定的模块
node_modules：存放package.json中安装的模块，当你在package.json添加依赖的模块并安装后，存放
	      在这个文件夹下
public:存放image、css、js等文件,是静态资源目录。
routes：存放路由文件，可以认为是controller（控制器）目录
views：存放视图文件或者说模板文件，jade模板目录，可以认为是view（视图）目录
bin：存放可执行文件
（1）使用模板引擎
前面我们通过以下两行代码设置了模板文件的存储位置和使用的模板引擎：
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
注意：①我们通过 express -e blog 只是初始化了一个使用 ejs 模板引擎的工程而已，比如 node_modules
        下添加了ejs模块，views 文件夹下有 index.ejs 。并不是说强制该工程只能使用 ejs 不能使用其他
        的模板引擎比如jade，真正指定使用哪个模板引擎的是 app.set('view engine', 'ejs'); 。
    ②在 routes/index.js 中通过调用 res.render() 渲染模版，并将其产生的页面直接返回给客户端。它
    接受两个参数，第一个是模板的名称，即 views 目录下的模板文件名，扩展名 .ejs 可选。第二个参数
    是传递给模板的数据对象，用于模板翻译。




















