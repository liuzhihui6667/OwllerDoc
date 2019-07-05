# Navigation 导航栏

Navigation-导航栏提供了多种形式的网站导航组件。

## 样例

> 样例一

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div class="exam-1-wrapper">
        	<owl-nav theme="lighter" menu="true" itemheight="43" fit="false">
        		<owl-nav-item icon="layout">
        			<owl-nav-text>菜单一</owl-nav-text>
        			<owl-nav-item>
        				<owl-nav-text>项目一</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item>
        				<owl-nav-text>项目二</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item active="true">
        				<owl-nav-text>项目三</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        		<owl-nav-item>
        			<owl-nav-text>菜单二</owl-nav-text>
        			<owl-nav-item icon="coins">
        				<owl-nav-text>项目四</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item icon="button">
        				<owl-nav-text>项目五</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        		<owl-nav-item>
        			<owl-nav-text>菜单三</owl-nav-text>
        			<owl-nav-item icon="layout">
        				<owl-nav-text>项目六</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item icon="layout">
        				<owl-nav-text>项目七</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        	</owl-nav>
        </div>
        <div class="exam-1-wrapper">
        	<owl-nav theme="light" showall="true" itemheight="43" fit="false">
        		<owl-nav-item icon="layout">
        			<owl-nav-text>菜单一</owl-nav-text>
        			<owl-nav-item>
        				<owl-nav-text>项目一</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item>
        				<owl-nav-text>项目二</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item active="true">
        				<owl-nav-text>项目三</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        		<owl-nav-item>
        			<owl-nav-text>菜单二</owl-nav-text>
        			<owl-nav-item icon="coins">
        				<owl-nav-text>项目四</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item icon="button">
        				<owl-nav-text>项目五</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        		<owl-nav-item>
        			<owl-nav-text>菜单三</owl-nav-text>
        			<owl-nav-item icon="layout">
        				<owl-nav-text>项目六</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item icon="layout">
        				<owl-nav-text>项目七</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        	</owl-nav>
        </div>
        <div class="exam-1-wrapper">
        	<owl-nav theme="dark" onlyone="true" itemheight="43" fit="false">
        		<owl-nav-item icon="layout">
        			<owl-nav-text>菜单一</owl-nav-text>
        			<owl-nav-item>
        				<owl-nav-text>项目一</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item>
        				<owl-nav-text>项目二</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item active="true">
        				<owl-nav-text>项目三</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        		<owl-nav-item>
        			<owl-nav-text>菜单二</owl-nav-text>
        			<owl-nav-item icon="coins">
        				<owl-nav-text>项目四</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item icon="button">
        				<owl-nav-text>项目五</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        		<owl-nav-item>
        			<owl-nav-text>菜单三</owl-nav-text>
        			<owl-nav-item icon="layout">
        				<owl-nav-text>项目六</owl-nav-text>
        			</owl-nav-item>
        			<owl-nav-item icon="layout">
        				<owl-nav-text>项目七</owl-nav-text>
        			</owl-nav-item>
        		</owl-nav-item>
        	</owl-nav>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
    
        <owl-nav theme="dark" onlyone="true" itemheight="43" fit="false">
            <owl-nav-item icon="layout">
                <owl-nav-text>菜单一</owl-nav-text>
                <owl-nav-item>
                    <owl-nav-text>项目一</owl-nav-text>
                </owl-nav-item>
                <owl-nav-item>
                    <owl-nav-text>项目二</owl-nav-text>
                </owl-nav-item>
                <owl-nav-item active="true">
                    <owl-nav-text>项目三</owl-nav-text>
                </owl-nav-item>
            </owl-nav-item>
            <owl-nav-item>
                <owl-nav-text>菜单二</owl-nav-text>
                <owl-nav-item icon="coins">
                    <owl-nav-text>项目四</owl-nav-text>
                </owl-nav-item>
                <owl-nav-item icon="button">
                    <owl-nav-text>项目五</owl-nav-text>
                </owl-nav-item>
            </owl-nav-item>
            <owl-nav-item>
                <owl-nav-text>菜单三</owl-nav-text>
                <owl-nav-item icon="layout">
                    <owl-nav-text>项目六</owl-nav-text>
                </owl-nav-item>
                <owl-nav-item icon="layout">
                    <owl-nav-text>项目七</owl-nav-text>
                </owl-nav-item>
            </owl-nav-item>
        </owl-nav>
   
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

## 属性

> owl-nav

|	属性名称	   |    类型      |   属性描述        |   示例值     |   备注      |
|:-------------|:------------|:---------------  |:----------- |:-----------|
|	dir		   |String       |	该导航栏的方向	    |	h:水平，v:垂直	|           |
|	showall    |Boolean      |	该导航栏是否全部展开（初次渲染生效）	|	"true", true, "false", false       	|   约定也可以为字符串"true","false"        |
|	onlyone    |Boolean      |	手风琴模式(只有一个item会展开)	|	"true", true, "false", false       	|   约定也可以为字符串"true","false"        |
|	menu       |Boolean      |	菜单模式，不可收缩	|	"true", true, "false", false       	|  约定也可以为字符串"true","false"         |
|	theme      |String       |	主题          	|	"dark": 黑色主题,"light": 浅蓝主题,"lighter": 白色主题       	|           |
|   fit        |Boolean      |  宽度是否自动撑开（撑开为父元素宽度的100%，不成开宽度默认为250px）    |   | 约定也可以为字符串"true","false"  |
|   itemHeight |Number       |  单元格高度   |       |       |
|   itemWidth  |Number       |  单元格宽度   |       |       |

> owl-nav-item

|	属性名称	    |    类型     |	属性描述		          |	备注		|
|:-------------|:------------|:-------------           |:---       |
|	icon       |String       |	该导航栏的前置图标		  |    Icon名称，详见<a href="/icon/icon.html">Icon</a>       |
|	active     |Boolean      |	该item是否被激活   		|           |
|	to         |String      |	点击跳转URL          	        |           |