# Button 按钮

Button - 按钮集合。

## 样例

> 样例一

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 100%; height: 160px;">
            <owl-button icon="store" size="small" onclick="btnClick('我是一个小的蓝色按钮。')">按钮</owl-button>
            <owl-button type="success" size="small">成功</owl-button>
            <owl-button type="error" size="small">失败</owl-button>
            <owl-button type="disabled" size="small">禁用</owl-button>
            <owl-button icon="store" type="dark" size="small">黑色</owl-button>
            <br><br>
            <owl-button icon="store" size="default" onclick="btnClick('我是一个中等的蓝色按钮。')">按钮</owl-button>
            <owl-button type="success" size="default">成功</owl-button>
            <owl-button type="error" size="default">失败</owl-button>
            <owl-button type="disabled" size="default">禁用</owl-button>
            <owl-button type="dark" size="default">黑色</owl-button>
            <br><br>
            <owl-button icon="store" size="large" onclick="btnClick('我是一个大的蓝色按钮。')">按钮</owl-button>
            <owl-button type="success" size="large">成功</owl-button>
            <owl-button type="error" size="large">失败</owl-button>
            <owl-button type="disabled" size="large">禁用</owl-button>
            <owl-button type="dark" size="large">黑色</owl-button>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
    
        <owl-button icon="store" size="small" onclick="btnClick('我是一个小的蓝色按钮。')">按钮</owl-button>
        <owl-button type="success" size="small">成功</owl-button>
        <owl-button type="error" size="small">失败</owl-button>
        <owl-button type="disabled" size="small">禁用</owl-button>
        <owl-button icon="store" type="dark" size="small">黑色</owl-button>
        <br><br>
        <owl-button icon="store" size="default" onclick="btnClick('我是一个中等的蓝色按钮。')">按钮</owl-button>
        <owl-button type="success" size="default">成功</owl-button>
        <owl-button type="error" size="default">失败</owl-button>
        <owl-button type="disabled" size="default">禁用</owl-button>
        <owl-button type="dark" size="default">黑色</owl-button>
        <br><br>
        <owl-button icon="store" size="large" onclick="btnClick('我是一个大的蓝色按钮。')">按钮</owl-button>
        <owl-button type="success" size="large">成功</owl-button>
        <owl-button type="error" size="large">失败</owl-button>
        <owl-button type="disabled" size="large">禁用</owl-button>
        <owl-button type="dark" size="large">黑色</owl-button>
        <script type="text/javascript">
            let owller = new OwllerUI.OwllerUI();
            function btnClick(text) {
                owller.alert({
                    text: text
                })
            }
        </script>
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>



