# Roller 跑马灯

Roller-跑马灯组件提供了常见的跑马灯、轮播功能。

## 样例

> 样例一

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <style>
        .roller-item {
            line-height: 250px;
            text-align: center;
        }
        .roller-item-img {
            width: 100%;
        }
        </style>
        <div class="exam-roller-wrapper">
            <div style="margin: auto; width: 500px;">
                <owl-roller>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Hanamichi.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Slamdunk01.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Slamdunk02.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Hanamichi01.jpg" class="roller-item-img">
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Hanamichi.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Slamdunk01.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Slamdunk02.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Hanamichi01.jpg" class="roller-item-img">
           </div>
       </owl-roller>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

> 样例二

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <style>
        .roller-item {
            line-height: 300px;
            text-align: center;
        }
        </style>
        <div class="exam-roller-wrapper">
            <div style="margin: auto; width: 650px;">
                <owl-roller value="2" loop="true" auto="true" tip="dot" height="300" width="650">
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Hanamichi.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Slamdunk01.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Slamdunk02.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Hanamichi01.jpg" class="roller-item-img">
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller value="2" loop="true" auto="true" tip="dot" height="300" width="650">
           <div class="roller-item">
               <img src="/static/image/slamdunk/Hanamichi.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Slamdunk01.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Slamdunk02.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Hanamichi01.jpg" class="roller-item-img">
           </div>
       </owl-roller>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

> 样例三

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <style>
        .roller-item {
            line-height: 300px;
            text-align: center;
        }
        </style>
        <div class="exam-roller-wrapper" style="white-space: initial;">
            <div style="margin: auto; width: 650px;">
                <owl-roller dir="v" value="1" loop="true" height="300" width="650" tip="line">
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Hanamichi.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Slamdunk01.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Slamdunk02.jpg" class="roller-item-img">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/Hanamichi01.jpg" class="roller-item-img">
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller dir="v" loop="true" height="300" width="650" tip="line">
           <div class="roller-item">
               <img src="/static/image/slamdunk/Hanamichi.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Slamdunk01.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Slamdunk02.jpg" class="roller-item-img">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/Hanamichi01.jpg" class="roller-item-img">
           </div>
       </owl-roller>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>


> 样例四

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <style>
        .roller-item {
            line-height: 300px;
            text-align: center;
        }
        .roller-item-img-v {
            width: 100%;
        }
        </style>
        <div class="exam-roller-wrapper">
            <div style="margin: auto; width: 650px;">
                <owl-roller value="2" loop="true" height="325" width="650" tip="line" shownum="3">
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd01.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd02.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd03.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd04.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd05.jpg" class="roller-item-img-v">
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller value="2" loop="true" height="300" width="650" tip="line" shownum="3">
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd01.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd02.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd03.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd04.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd05.jpg" class="roller-item-img-v">
           </div>
       </owl-roller>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>

> 样例五

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper" style="height: 400px;">
        <style>
        .fit .roller-item {
            line-height: 400px;
            text-align: center;
        }
        </style>
        <div class="exam-roller-wrapper" style="height: 100%;">
            <div class="fit" style="margin: auto;height: 100%;">
                <owl-roller value="3" loop="true" fit="true" tip="line" shownum="3">
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd01.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd02.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd03.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd04.jpg" class="roller-item-img-v">
                    </div>
                    <div class="roller-item">
                        <img src="/static/image/slamdunk/sd05.jpg" class="roller-item-img-v">
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller value="3" loop="true" fit="true" tip="line" shownum="3">
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd01.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd02.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd03.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd04.jpg" class="roller-item-img-v">
           </div>
           <div class="roller-item">
               <img src="/static/image/slamdunk/sd05.jpg" class="roller-item-img-v">
           </div>
       </owl-roller>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>
