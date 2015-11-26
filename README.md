
## 1. 安装  Eslint  ##
    
    npm install -g eslint

## 2. Eslint rules for *SM* ##

由于Eslint是可配置的，并且提供了很多规则，我们经过筛选，把一些目前来看对神马前端而言不必要的、不常见到的、暂时不支持的规则进行了剔除，提炼出了现阶段适合神马前端的规则，并将它发布到了npm，以便大家方便使用。

    npm install -g eslint-config-sm

编辑`.eslintrc`文件放在用户目录下：
osx:  `/Users/用户名`
win: `C:\Users\用户名`

```json
{
   "extends": "sm"
}
```


按照此方法，你也可以在此基础上定制适合你自己项目的规则

## 集成 ##
### Sublime Text 3 ###

安装`Sublimelinter`和`Sublimelinter-contrib-eslint`

修改`Sublimelinter` 配置，`Preferences->Package Settings->SublimeLinter->Settings-User`,

**debug**: ` true`  开启debug模式 
**paths**:  根据具体环境，设置eslint路径


例如：
```json
{
    "user": {
        "debug": true,
        ...
        "paths": {
            ....
            "osx": [
                "/usr/local/node/v0.12.7/bin"
            ],
            "windows": [
             "C:\\Users\\用户名\\AppData\\Roaming\\npm"
            ]
        } 
        ...
    }
}
```

重启 sublime text    `command + q`


## Tips ##
Eslint 提供了自动修复的命令行 `eslint --fix`,

```javascript
    eslint --fix file.js [file.js] [dir]
```



## Changelog ##
### Stylistic 问题 2015-10-16 17:56 ###
1. block-spacing 数组中多个对象的换行（空格）(多行用缩进规定) 
2. camelcase 对象属性 是否带有下划线 properties never (已改)
3. indent 前端规范添加多个变量定义，第一个之后与第一个对齐 @fxn
4. lines-around-comment (已改)
5. newline-after-var (已改)
6. no-inline-comment (已改)
7. no-restricted-syntax(已改 eval 没有找到能限制的)
8. one-var （暂时不修改，试用后再决定)
9. 如果key为数字要加引号 （添加)
10. quotes 嵌套引号最外层是单引号还是双引号 (已改，嵌套引号最外层也是单引号)
11. space-unary-ops 规范添加对一元操作符的约定 @fxn
12. spaced-comment （已改，添加)
13. var 后加空行更新文档 @fxn 

### Possible Errors 问题 2015-10-18 16:46 ###
1. comma-dangle 是不是要执行，暂时加入，试用后再决定是否添加。
2. no-console,no-debugger  用于生产环境，以后再加
3. no-irregular-whitespace 待lxk测试 (lxk)
4. no-obj-calls 待lxk测试验证 (lxk)
5. no-unexpected-multiline 待lxk测试验证 (lxk)

### Variables 问题 2015-10-18 16:46 ###
1. no-shadow 待lxk测试验证 (lxk) 暂时去掉（自定义scroll 和 close）
2. no-undefined 待lxk测试验证 (lxk)

### Best Practices 问题 2015-10-19 23:42 ###
1. curly 待验证 （lxk)
2. dot-location 非链式使用单行，多行的话是否有缩进 (lxk)
3. no-alert 级别2放在生产环境下
4. no-extend-native native object 如果已扩展，验证调用时该规则是否起作用 (lxk)
5. no-fallthrough  (lxk)
6. no-loop-func 验证闭包形式 (lxk)
7. no-multi-spaces 该规则是否与其它规则冲突 (lxk)

### 试用问题列表 ###
1. no-undef 将Zepto 添加到globals (lxk) 2015-10-23 16:10
2. lines-around-comment (removed lxk) 2015-11-01 19:43
3. new-cap (set capIsNew false, e.g. $.Deffer lxk) 2015-11-01 19:55
4. no-trailing-spaces 跳过空行处理 lxk
5. 字符串拼接缩进问题 array join 暂无解
6. use strict 范围 function lxk

