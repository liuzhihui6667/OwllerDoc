# Pagination 分页器

Pagination - 分页器提供了通用的分页功能

## 样例

> 样例一

<div class="exam-wrapper">
    <div class="exam-scroll-wrapper">
        <div style="margin: auto; width: 100%; height: 160px;">
            <owl-page total="100" on-change="pageChange"></owl-page>
            <br>
            <owl-page theme="light" total="9" pagesize="1" on-change="pageChange"></owl-page>
            <br>
            <owl-page total="1000" pagesize="80" curpage="9" theme="dark" on-change="pageChange"></owl-page>
        </div>
    </div>
    <div class="exam-line"></div>
    <div class="exam-code-wrapper">
       
       <owl-page total="100" on-change="pageChange"></owl-page>
       
       <owl-page theme="light" total="9" pagesize="1" on-change="pageChange"></owl-page>
       
       <owl-page total="1000" pagesize="80" curpage="9" theme="dark" on-change="pageChange"></owl-page>
       <script>
            let owller = new OwllerUI.OwllerUI({
                methods: {
                    pageChange: function (pageNum) {
                        alert(pageNum)
                    }
                }
            });
       </script>
        
   </div>
   <div class="exam-btn">Click To Show Code</div>
</div>



