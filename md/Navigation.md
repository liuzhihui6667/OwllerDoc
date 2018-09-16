# Navigation-导航栏

Navigation-导航栏提供了多种形式的网站导航组件。

## 样例

> 样例一

<div class="exam-wrapper">
    <owl-layout childrenlayout="h" style="background: white;">
    		<!-- the Blue Container -->
            <owl-layout width="250px" style="background: dodgerblue;">
                <owl-nav dir="v" itemlist="item"></owl-nav>
            </owl-layout>
            <!-- the Green Container -->
            <owl-layout childrenlayout="v" style="background: dodgerblue;">
                <!-- the Orange Container -->
                <owl-layout height="60px" style="background: orange;">
                    <owl-nav dir="h" itemlist="item"></owl-nav>
                </owl-layout>
            </owl-layout>
        </owl-layout>
        <script>
        item = [
            {
                text: '一级菜单',
                active: false,
                icon: 'dashboard',
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
                    }
                ]
            },
            {
                text: '一级菜单',
                active: false,
                icon: 'store',
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
        </script>
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
	<owl-layout childrenlayout="h" style="background: white;">
		<!-- the Blue Container -->
        <owl-layout width="250px" style="background: dodgerblue;">
            <owl-nav dir="v" itemlist="item"></owl-nav>
        </owl-layout>
        <!-- the Blue Container -->
        <owl-layout childrenlayout="v" style="background: dodgerblue;">
            <!-- the Orange Container -->
            <owl-layout height="100px" style="background: orange;">
                <owl-nav dir="h" itemlist="item"></owl-nav>
            </owl-layout>
        </owl-layout>
    </owl-layout>
    <script>
    item = [
            {
                text: '一级菜单',
                active: false,
                icon: 'dashboard',
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
                    }
                ]
            },
            {
                text: '一级菜单',
                active: false,
                icon: 'store',
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
|	itemlist    |	该导航栏的配置	|	见下表       	|           |

> itemlist

|	属性名称		|	属性描述		    |	属性类型	        |	备注		|
|:------------- |:-------------     |:----------:       |:---       |
|	text	|	该导航栏文字	        |	String      	|           |
|	icon    |	该导航栏的前置图标	|	String 	        |    Icon名称，详见<a href="/icon/icon.html">Icon</a>       |
|	list    |	如果方向为v，字列表	|	Array 	        |           |