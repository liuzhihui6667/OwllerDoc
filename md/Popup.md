# Popup 弹出层

Popup - 弹出层提供了功能强大的网站弹出层的各类功能。

## 样例

> 样例一

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 100%; height: 35px;">
            <owl-button type="lighter" size="default" onclick="alertA()">提示框A</owl-button>
            <owl-button type="lighter" size="default" onclick="alertB()">提示框B</owl-button>
            <owl-button type="lighter" size="default" onclick="alertC()">提示框C</owl-button>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
    
        <owl-button type="lighter" size="default" onclick="alertA()">提示框A</owl-button>
        <owl-button type="lighter" size="default" onclick="alertB()">提示框B</owl-button>
        <owl-button type="lighter" size="default" onclick="alertC()">提示框C</owl-button>
        <script>
             var owller = new OwllerUI.OwllerUI();
             function alertA() {
                 owller.alert({
                     title: '提示框A'
                 })
             }
             function alertB() {
                 owller.alert({
                     title: '提示框B',
                     theme: 'light',
                     text: '请问你是谁？',
                     animation: 'rotate'
                 })
             }
             function alertC() {
                 owller.alert({
                     title: '提示框C',
                     theme: 'dark',
                     text: '我觉得还是黑色好看!',
                     animation: 'fade'
                 })
             }
        </script>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

> 样例二

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 100%; height:35;">
            <owl-button type="lighter" size="default" onclick="folderA()">文件夹A</owl-button>
            <owl-button type="lighter" size="default" onclick="folderB()">文件夹B</owl-button>
            <owl-button type="lighter" size="default" onclick="folderC()">文件夹C</owl-button>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
    
        <owl-button type="lighter" size="default" onclick="folderA()">文件夹A</owl-button>
        <owl-button type="lighter" size="default" onclick="folderB()">文件夹B</owl-button>
        <owl-button type="lighter" size="default" onclick="folderC()">文件夹C</owl-button>
        <script>
             var owller = new OwllerUI.OwllerUI();
             function folderA() {
                 owller.alert({
                     type: 'folder',
                     title: '文件夹A'
                 })
             }
             function folderB() {
                 owller.alert({
                     type: 'folder',
                     title: '文件夹B',
                     theme: 'light',
                     animation: 'rotate'
                 })
             }
             function folderC() {
                 owller.alert({
                     type: 'folder',
                     title: '文件夹C',
                     theme: 'dark',
                     animation: 'fade'
                 })
             }
        </script>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>



