<script setup>

</script>

<template>
   <div id="header"  class="tu">
      
      <button class="button1"> 退出登录</button>
    </div>

    <div class="box">
    <div class="search-box">
      <input type="text"  class="search-input" placeholder="请输入..." >
         <button type="submit" class="search-button" ><a target="_blank">搜索</a></button>
     </div>

     <div id="menu" ><label>导出双创之星</label>
     <select id="" name="">
         <option >名单</option>
         <option >证书</option>
         
     </select>
     </div>

     <table style="margin: 0 auto; border: 1px solid rgb(59, 8, 8); border-collapse: collapse;">
       <thead>
         <tr>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">年级</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">专业</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">班级</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">姓名</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">注册公司名称</th>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">实体/虚体</th>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">申报人排名</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">注册时间</th>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">公司规模</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">佐证材料</th>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">状态</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">操作</th>
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">2023级</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"><input type="date" ></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse"><a href="http://127.0.0.1:3000/d:/%E9%A1%B9%E7%9B%AE%E7%BB%84/zuoye.html" target="_blank">点击查看</a></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">未审批</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">
            <button class="button2">通过</button>
            
           <button class="button3" onclick="alert('点什么点！')">未通过</button>
           </td>
         </tr>
         <tr>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">2023级</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"><input type="date" ></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse"><a href="http://127.0.0.1:3000/d:/%E9%A1%B9%E7%9B%AE%E7%BB%84/zuoye.html" target="_blank">点击查看</a></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse1">已通过</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse1">查看证书</td>
         </tr>
         <tr>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">2023级</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"><input type="date" ></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse"><a href="http://127.0.0.1:3000/d:/%E9%A1%B9%E7%9B%AE%E7%BB%84/zuoye.html" target="_blank">点击查看</a></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse2">未通过</td>
           
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse2">查看驳回理由</td>
         </tr>
        
       </tbody>
     </table>
    </div>
    
</template>

