# CSS Tipsy

> 利用CSS3, :before, :after伪类，实现纯CSS的tooltip效果


![css tipsy](https://img.smohan.net/article/ae2a3779dff81dc626df5e58ecf5aa18.jpg)


### [DEMO](https://demo.smohan.net/im/tipsy/)



### 使用

`head` 中 加入

```html
<link href="./dist/tipsy.css" rel="stylesheet">
```

#### 在非`overflow:hidden`元素上加入如下样式

```html
<button class="mo-tipsy--top" data-tipsy="我将显示在上面">hover</button>
...
```

### API

```css
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
