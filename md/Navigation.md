# Navigation 导航栏

Navigation-导航栏提供了多种形式的网站导航组件。

## 样例

> 样例一

<div class="exam-wrapper">
    <owl-layout childrenlayout="v">
        <owl-layout childrenlayout="h" style="padding: 30px;min-width: 870px;">
            <owl-layout width="250px">
                 <owl-nav dir="v" itemlist="item" theme="dark" showall></owl-nav>
            </owl-layout>
            <owl-layout width="250px" style="margin-left: 30px">
                 <owl-nav dir="v" itemlist="item" theme="light" onlyone></owl-nav>
            </owl-layout>
            <owl-layout width="250px" style="margin-left: 30px">
                 <owl-nav dir="v" itemlist="item" theme="lighter" menu></owl-nav>
            </owl-layout>
        </owl-layout>
    </owl-layout>
</div>

> 样例一代码

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<!-- 整个浏览器窗口或用户自定义元素块 -->
	<owl-layout childrenlayout="v">
        <owl-layout childrenlayout="h" style="padding: 30px;min-width: 870px;">
            <owl-layout width="250px">
                 <owl-nav dir="v" itemlist="item" theme="dark" showall></owl-nav>
            </owl-layout>
            <owl-layout width="250px" style="margin-left: 30px">
                 <owl-nav dir="v" itemlist="item" theme="light" onlyone></owl-nav>
            </owl-layout>
            <owl-layout width="250px" style="margin-left: 30px">
                 <owl-nav dir="v" itemlist="item" theme="lighter" menu></owl-nav>
            </owl-layout>
        </owl-layout>
    </owl-layout>
    <script>
        new OwllerUI({
            data: {
                Nav: {
                    item: [
                        {
                            text: '一级菜单',
                            active: false,
                            icon: 'layout',
                            list: [
                                {
                                    text: '二级菜单',
                                    list: [
                                        {
                                            text: '三级菜单'
                                        },{
                                            text: '三级菜单',
                                            active: true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: '一级菜单',
                            active: false,
                            icon: 'setting',
                            list: [
                                {
                                    text: '二级菜单',
                                    list: [
                                        {
                                            text: '三级菜单'
                                        },{
                                            text: '三级菜单'
                                        }
                                    ]
                                },{
                                    text: '二级菜单',
                                    list: [
                                        {
                                            text: '三级菜单'
                                        },{
                                            text: '三级菜单'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        })
    </script>
</body>
</html>
```

## 使用



```html
	<owl-nav dir="h" itemlist="item"></owl-nav>
```


<font color="red">请使用width，height属性对container的宽度，高度进行设定，不要用css的方式对其进行设定。</font>

## 属性

|	属性名称		|	属性描述		    |	示例值	        |	备注		|
|:------------- |:-------------     |:----------        |:---       |
|	dir		    |	该导航栏的方向	|	h:水平，v:垂直	|           |
|	showall     |	该导航栏是否全部展开	|	       	|           |
|	onlyone     |	手风琴模式(只有一个item会展开)	|	       	|           |
|	menu        |	菜单模式，不可收缩	|	       	|           |
|	theme       |	主题          	|	"dark": 黑色主题,"light": 浅蓝主题,"lighter": 白色主题       	|           |
|	itemlist    |	该导航栏的配置	|	见下表       	|           |

> itemlist

|	属性名称		|	属性描述		    |	属性类型	        |	备注		|
|:------------- |:-------------     |:----------:       |:---       |
|	text	|	该导航栏文字	        |	String      	|           |
|	icon    |	该导航栏的前置图标	|	String 	        |    Icon名称，详见<a href="/icon/icon.html">Icon</a>       |
|	list    |	如果方向为v，字列表	|	Array 	        |           |
|	active  |	该item是否被激活   	|	Boolean 	        |           |
|	to      |	点击跳转URL         	|	String 	        |           |