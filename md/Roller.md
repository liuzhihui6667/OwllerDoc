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
        </style>
        <div class="exam-roller-wrapper">
            <div style="margin: auto; width: 500px;">
                <owl-roller>
                    <div style="background-color: red;" class="roller-item">
                        1
                    </div>
                    <div style="background-color: orange;" class="roller-item">
                        2
                    </div>
                    <div style="background-color: green;" class="roller-item">
                        3
                    </div>
                    <div style="background-color: blue;" class="roller-item">
                        4
                    </div>
                    <div style="background-color: gold;" class="roller-item">
                        5
                    </div>
                    <div style="background-color: brown;" class="roller-item">
                        6
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller>
           <div style="background-color: red;">
               1
           </div>
           <div style="background-color: orange;">
               2
           </div>
           <div style="background-color: green;">
               3
           </div>
           <div style="background-color: blue;">
               4
           </div>
           <div style="background-color: gold;">
               5
           </div>
           <div style="background-color: brown;">
               6
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
                    <div style="background-color: red;" class="roller-item">
                        1
                    </div>
                    <div style="background-color: orange;" class="roller-item">
                        2
                    </div>
                    <div style="background-color: green;" class="roller-item">
                        3
                    </div>
                    <div style="background-color: blue;" class="roller-item">
                        4
                    </div>
                    <div style="background-color: gold;" class="roller-item">
                        5
                    </div>
                    <div style="background-color: brown;" class="roller-item">
                        6
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller value="2" loop="true" auto="true" tip="dot" height="300" width="650">
           <div style="background-color: red;" class="roller-item">
               1
           </div>
           <div style="background-color: orange;" class="roller-item">
               2
           </div>
           <div style="background-color: green;" class="roller-item">
               3
           </div>
           <div style="background-color: blue;" class="roller-item">
               4
           </div>
           <div style="background-color: gold;" class="roller-item">
               5
           </div>
           <div style="background-color: brown;" class="roller-item">
               6
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
        <div class="exam-roller-wrapper">
            <div style="margin: auto; width: 650px;">
                <owl-roller dir="v" loop="true" height="300" width="650" tip="line">
                    <div style="background-color: red;" class="roller-item">
                        1
                    </div>
                    <div style="background-color: orange;" class="roller-item">
                        2
                    </div>
                    <div style="background-color: green;" class="roller-item">
                        3
                    </div>
                    <div style="background-color: blue;" class="roller-item">
                        4
                    </div>
                    <div style="background-color: gold;" class="roller-item">
                        5
                    </div>
                    <div style="background-color: brown;" class="roller-item">
                        6
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller dir="v" loop="true" height="300" width="650" tip="line">
           <div style="background-color: red;" class="roller-item">
               1
           </div>
           <div style="background-color: orange;" class="roller-item">
               2
           </div>
           <div style="background-color: green;" class="roller-item">
               3
           </div>
           <div style="background-color: blue;" class="roller-item">
               4
           </div>
           <div style="background-color: gold;" class="roller-item">
               5
           </div>
           <div style="background-color: brown;" class="roller-item">
               6
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
        </style>
        <div class="exam-roller-wrapper">
            <div style="margin: auto; width: 650px;">
                <owl-roller value="3" loop="true" height="300" width="650" tip="line" shownum="3">
                    <div style="background-color: red;" class="roller-item">
                        1
                    </div>
                    <div style="background-color: orange;" class="roller-item">
                        2
                    </div>
                    <div style="background-color: green;" class="roller-item">
                        3
                    </div>
                    <div style="background-color: blue;" class="roller-item">
                        4
                    </div>
                    <div style="background-color: gold;" class="roller-item">
                        5
                    </div>
                    <div style="background-color: brown;" class="roller-item">
                        6
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller value="3" loop="true" height="300" width="650" tip="line" shownum="3">
           <div style="background-color: red;" class="roller-item">
               1
           </div>
           <div style="background-color: orange;" class="roller-item">
               2
           </div>
           <div style="background-color: green;" class="roller-item">
               3
           </div>
           <div style="background-color: blue;" class="roller-item">
               4
           </div>
           <div style="background-color: gold;" class="roller-item">
               5
           </div>
           <div style="background-color: brown;" class="roller-item">
               6
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
                    <div style="background-color: red;" class="roller-item">
                        1
                    </div>
                    <div style="background-color: orange;" class="roller-item">
                        2
                    </div>
                    <div style="background-color: green;" class="roller-item">
                        3
                    </div>
                    <div style="background-color: blue;" class="roller-item">
                        4
                    </div>
                    <div style="background-color: gold;" class="roller-item">
                        5
                    </div>
                    <div style="background-color: brown;" class="roller-item">
                        6
                    </div>
                </owl-roller>
            </div>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-roller value="3" loop="true" fit="true" tip="line" shownum="3">
           <div style="background-color: red;" class="roller-item">
               1
           </div>
           <div style="background-color: orange;" class="roller-item">
               2
           </div>
           <div style="background-color: green;" class="roller-item">
               3
           </div>
           <div style="background-color: blue;" class="roller-item">
               4
           </div>
           <div style="background-color: gold;" class="roller-item">
               5
           </div>
           <div style="background-color: brown;" class="roller-item">
               6
           </div>
       </owl-roller>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>