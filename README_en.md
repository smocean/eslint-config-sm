
## 1. Installation  Eslint  ##
    
    npm install -g eslint

## 2. Usage

    eslint --init

After running `eslint --init`, you'll have a `.eslintrc` file in your home (e.g. `/Users/xxx`)directory. In it, you'll see some rules configured like this:

```json
{
    "rules": {
        "semi": [2, "always"],
        "quotes": [2, "double"]
        ...
    },
    "extends": "eslint:recommended"
}
```

## 3.  Eslint rules for *SM* ##
As ESLint is designed to be configurable,  some rules that  unnecessary, useless,  complicated，unusual or unsupported  which may not be perfect for **sm** at present were picked out and eliminated. We get our own one and have published it to npm as a shareable config.

    npm install -g eslint-config-sm

edit  `.eslintrc` file mentioned above,  and change it as below：

```json
{
   "extends": "sm"
}
```
In the same way, you can make your own by overriding;

## Integrations ##
### sublime ###
Install `Sublimelinter`和`Sublimelinter-contrib-eslint`
Edit configuration `Preferences->Package Settings->SublimeLinter->Settings - User`:

```json
{
    "user": {
        "debug": true,
        ...
        "paths": {
            ....
            "osx": [
                "/usr/local/node/v0.12.7/bin"
            ]
        } 
        ...
    }
}
```

restart sublime text `(command+q)`

## 4.  Eslint rules for *SM* changelog ##

remove 'no-inline-comments' rule in version 0.1.6

