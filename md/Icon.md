# Icon

Icon组件提供一套通用的图标，可以很方便的使用。

## 样例

<div class="icon-exam-container">
	<div class="icon-wrapper">
		<owl-icon name="store" class="icon-exam" color="#5c6b77"></owl-icon>
		<p class="icon-text">store</p>
	</div>
	<div class="icon-wrapper">
    	<owl-icon name="dashboard" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">dashboard</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="setting" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">setting</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="outdent" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">outdent</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="indent" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">indent</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="layout" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">layout</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="coins" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">coins</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="navigation" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">navigation</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="popup" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">popup</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="page" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">page</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="tree" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">tree</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="button" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">button</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="tips" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">tips</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="left" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">left</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="right" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">right</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="top" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">top</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="bottom" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">bottom</p>
    </div>
    <div class="icon-wrapper">
    	<owl-icon name="close" class="icon-exam" color="#5c6b77"></owl-icon>
    	<p class="icon-text">close</p>
    </div>
</div>

## 使用


只需要在需要插入图标的位置加入如下标签即可,Icon渲染器会自动渲染。

```html
<owl-icon name="store" width="20px" height="20px" color="#5c6b77"></owl-icon>
```

## 属性

|	属性名称		|	属性描述		|	示例值	|
|:-------------:|:-------------:|:----------:|
|	name		|	该图标的名称，从样例表中获取		|	dashboard, store, left	|
|	width		|	该图标的宽度		|	"20px", "30px"	|
|	height		|	该图标的高度		|	"20px", "30px"	|
|	color		|	该图标的颜色		|	"red", "#ddd"	|