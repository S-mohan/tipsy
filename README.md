# CSS Tipsy

> 利用CSS3, :before, :after伪类，实现纯CSS的tooltip效果

### [DEMO](https://demo.smohan.net/im/tipsy/)

### 可用性
> 兼容高级浏览器，受父级元素影响


### 构建
#### 自定义
修改文件`src/tipsy.scss` 文件
- `$background` 背景色，默认`rgba(#111, 0.9)`
- `$threshold` 动画偏移量 ， 默认`10px`

(c)npm install
gulp

### 使用

在`head`中加入样式表
```html
<link href="./dist/tipsy.css" rel="stylesheet">
```
在非`overflow:hidden` 和 闭合标签的元素上添加`mo-tipsy--`相关样式以及`data-tipsy`属性（代替`title`属性）
```html
<button class="mo-tipsy--top" data-tipsy="我将显示在上面">hover</button>
```

### 可用样式

``` css
.mo-tipsy, .mo-tipsy--top : 正上方显示
.mo-tipsy--left: 左边显示
.mo-tipsy--right: 右边显示
.mo-tipsy--bottom: 正下方显示
.mo-tipsy--top-left: 左上角显示
.mo-tipsy--top-right: 右上角显示
.mo-tipsy--bottom-left: 左下角显示
.mo-tipsy--bottom-right: 右下角显示

//尺寸
.mo-tipsy--small : //小尺寸, 80px
.mo-tipsy--medium : //中等尺寸, 160px
.mo-tipsy--large : //大尺寸, 260px
//尺寸样式需要配合 .mo-tipsy, .mo-tipsy--[top|bottom|left|right...] 一起使用
```
