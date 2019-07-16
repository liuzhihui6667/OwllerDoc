# Tips 提示器

Tips - 提示器组建提供了常见的内容提示，支持自定义。

## 样例

> 样例一

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 256px; height: 160px;">
            <style> 
                .content {
                    width: 256px;
                    height: 160px;
                    background-color: #1e9fff;
                    opacity: 0.9;
                }
                .content-tip-img {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <owl-tip show="true">
                <owl-tip-content>
                    <div class="content">
                        <img src="/static/image/slamdunk/Hanamichi01.jpg" alt="" class="title-tip-img">
                    </div>
                </owl-tip-content>
                <owl-tip-custom-content>
                    <div style="background-color: #fff;width: 420px;height: 150px;">
                        woshi yige 这是一个提示框这是一个提示框这是一个提示框
                    </div>
                </owl-tip-custom-content>
                <owl-tip-title>
                    樱木花道
                </owl-tip-title>
                <owl-tip-text>
                    身高： 189.2cm
                </owl-tip-text>
                <owl-tip-text>
                    球衣号码： 10号
                </owl-tip-text>
                <owl-tip-text>
                    场上位置： 大前锋
                </owl-tip-text>
                <owl-tip-text>
                    所属球队： 湘北高中篮球队
                </owl-tip-text>
            </owl-tip>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <style> 
           .content {
               width: 256px;
               height: 160px;
               background-color: #1e9fff;
               opacity: 0.9;
           }
           .content-tip-img {
               width: 100%;
               height: 100%;
           }
       </style>
       <!-- 以上为用户自定义CSS -->
       <owl-tip show="true">
           <owl-tip-content>
               <div class="content">
                   <img src="/static/image/slamdunk/Hanamichi.jpg" alt="" class="title-tip-img">
               </div>
           </owl-tip-content>
           <owl-tip-title>
               樱木花道
           </owl-tip-title>
           <owl-tip-text>
               身高： 189.2cm
           </owl-tip-text>
           <owl-tip-text>
               球衣号码： 10号
           </owl-tip-text>
           <owl-tip-text>
               场上位置： 大前锋
           </owl-tip-text>
           <owl-tip-text>
               所属球队： 湘北高中篮球队
           </owl-tip-text>
       </owl-tip>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

> 样例二

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 256px; height: 160px;">
            <style> 
                .content {
                    width: 256px;
                    height: 160px;
                    background-color: #1e9fff;
                    opacity: 0.9;
                }
                .content-tip-img {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <!-- 以上为用户自定义CSS -->
            <owl-tip dir="right" show="true" theme="dark" size="large">
                <owl-tip-content>
                    <div class="content">
                        <img src="/static/image/slamdunk/Rukawa.gif" alt="" class="title-tip-img">
                    </div>
                </owl-tip-content>
                <owl-tip-title>
                    流川枫
                </owl-tip-title>
                <owl-tip-text>
                    身高： 187cm
                </owl-tip-text>
                <owl-tip-text>
                    球衣号码： 11号
                </owl-tip-text>
                <owl-tip-text>
                    场上位置： 小前锋
                </owl-tip-text>
                <owl-tip-text>
                    所属球队： 湘北高中篮球队
                </owl-tip-text>
            </owl-tip>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <style> 
           .content {
               width: 256px;
               height: 160px;
               background-color: #1e9fff;
               opacity: 0.9;
           }
           .content-tip-img {
               width: 100%;
               height: 100%;
           }
       </style>
       <owl-tip dir="left" show="true" theme="dark" size="large">
           <owl-tip-content>
               <div class="content">
                   <img src="/static/image/slamdunk/Rukawa.gif" alt="" class="title-tip-img">
               </div>
           </owl-tip-content>
           <owl-tip-title>
               流川枫
           </owl-tip-title>
           <owl-tip-text>
               身高： 187cm
           </owl-tip-text>
           <owl-tip-text>
               球衣号码： 11号
           </owl-tip-text>
           <owl-tip-text>
               场上位置： 小前锋
           </owl-tip-text>
           <owl-tip-text>
               所属球队： 湘北高中篮球队
           </owl-tip-text>
       </owl-tip>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

> 样例三

<div class="exam-wrapper" style="overflow: visible;">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 256px; height: 160px;">
            <style> 
                @font-face{
                    font-family: 'FX-LED';
                    src: url('/static/font/FX-LED.TTF');
                    src: url('/static/font/FX-LED.TTF') format('truetype');
                }
                .custom-tip-container {
                    width: 400px;
                    height: 250px;
                    background-image: url("/static/image/slamdunk/Mitsui.gif");
                    background-position: center center;
                }
                .score-container {
                    width: 180px;
                    height: 100px;
                    position: relative;
                    top: 75px;
                    left: 110px;
                    box-shadow: 0px 0px 10px 3px #ddd;
                    background: #fff;
                    font-family: FX-LED;
                    animation: textChange 1s infinite;
                }
                @keyframes textChange {
                    0% {
                        color: #000000;
                    }
                    50% {
                        color: red;
                    }
                }
                .score-wrapper {
                    width: 80px;
                    height: 100%;
                    line-height: 100px;
                    font-size: 75px;
                    position: absolute;
                    text-align: center;
                }
                .score-left-wrapper {
                    left: 0;
                }
                .score-center-wrapper {
                    width: 20px;
                    left: 80px;
                }
                .score-right-wrapper {
                    right: 0;
                }
            </style>
            <!-- 以上为用户自定义CSS -->
            <owl-tip dir="top" show="false" custom="true" color="#79201e" width="400" height="250" on-change="tipShow">
                <owl-tip-content>
                    <div class="content" id="mitsui">
                        <img src="/static/image/slamdunk/Mitsui-1.png" alt="" class="title-tip-img">
                    </div>
                </owl-tip-content>
                <owl-tip-custom-content>
                    <div class="custom-tip-container">
                        <div class="score-container">
                            <div class="score-wrapper score-left-wrapper">00</div>
                            <div class="score-wrapper score-center-wrapper">:</div>
                            <div class="score-wrapper score-right-wrapper">01</div>
                        </div>
                    </div>
                </owl-tip-custom-content>
            </owl-tip>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-tip dir="top" show="false" custom="true" color="#79201e" width="400" height="250" on-change="tipShow">
           <owl-tip-content>
               <div class="content" id="mitsui">
                   <img src="/static/image/slamdunk/Mitsui-1.png" alt="" class="title-tip-img">
               </div>
           </owl-tip-content>
           <owl-tip-custom-content>
               <div class="custom-tip-container">
                   <div class="score-container">
                       <div class="score-wrapper score-left-wrapper">00</div>
                       <div class="score-wrapper score-center-wrapper">:</div>
                       <div class="score-wrapper score-right-wrapper">01</div>
                   </div>
               </div>
           </owl-tip-custom-content>
       </owl-tip>
       <script>
            document.getElementById('mitsui').addEventListener('mouseenter', function (e) {
            	owller.methods.tipShow(true);
            });
            document.getElementById('mitsui').addEventListener('mouseleave', function (e) {
            	owller.methods.tipShow(false);
            })
       </script>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

