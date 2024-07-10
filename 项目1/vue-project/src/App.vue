<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
<div class="bianlan">
  <div><button class="buttonbianlan">
    退出登录
  </button></div>
  
</div>
<div id="bigbox">
  <div id="search"><input class="search" placeholder="搜索" type="search"></div>


  <div class="hang">
    
  </div>
  <div class="biaoge">
    <table>
    <colgroup>
    <col style="width: 6vw;">
    <col style="width: 5vw;">
    <col style="width: 5vw;">
    <col style="width: 5vw;">
    <col style="width: 5vw;">
    <col style="width: 7vw;">
    <col style="width: 7vw;">
    <col style="width: 7vw;">
    <col style="width: 6vw;">
    <col style="width: 7vw;">
    <col style="width: 6vw;">
    <col style="width: 9vw;">
      </colgroup>
       <thead>
         <tr>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">年级</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">专业</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">班级</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">姓名</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">项目类别</th>
           <th style="border: 1px solid rgba(255, 255, 255,1); padding: 28px;">项目名称/软著名称/期刊名称</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">项目级别/颁发单位/论文名称</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">立项时间/获批时间/发表时间</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">排名/总人数</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">佐证材料</th>
           <th style="border: 1px solid rgba(255, 255, 255, 1); padding: 28px;">状态</th>
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
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"><input type="date"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse"><a href="#">点击查看</a></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">未审批</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;">
            <button class="button2">通过</button>
           <button class="button3" onclick="alert('gggg')">未通过</button>
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
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"><input type="date"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse"><a href="#">点击查看</a></td>
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
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"><input type="date"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;"></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse"><a href="#">点击查看</a></td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse2">未通过</td>
           <td style="border: 1px solid  rgba(255, 255, 255, 1); padding: 28px;" class="yanse2">查看驳回理由</td>
         </tr>
        
       </tbody>
     </table>
  </div>

</div>
  </header>

</template>

<style scoped>

</style>
