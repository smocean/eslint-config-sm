
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
在node环境：
```json
{
    "extends": "sm/node-config"
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
        "linters": {
            "eslint": {
                ...
                "excludes": ["*.html"]
            }
        },
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

重启 Sublime Text 


## Tips ##
* 直接在命令行执行如下命令
    Eslint 提供了自动修复的命令行 `eslint --fix`,

```javascript
    eslint --fix file.js [file.js] [dir]
```

* 另外可在Sublime Text中通过Build New System方式，在sublime text执行命令行。
`Tools->Build System->New Build System...`，在新建的脚本文件中
添加以下代码，保持为`eslint.sublime-build`到默认位置。然后运行`cmd+b`(mac) 或 `ctrl+b`(win) 即可。

mac：
```json
    {
        "cmd": ["eslint --fix $file"],
        "shell": true,
        "path": "/usr/local/node/v0.12.7/bin"
    }
```
window：
```json
    {
        "cmd": ["eslint", "--fix", "$file"],
        "shell": true
    }
```
`注`：path为eslint路径，window 平台下 path：`%APPDATA%\\Roaming\\npm`，如果该路径已经在系统环境变量中，则可省略，具体可根据实际情况进行相应调整

