<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="bianlan">
      
  </div>
  <div class="container">
<div class="left">
    <div class="text" style="float: left;">
    <p style="font-size: 600%;">成都东软学院</p>
    <p style="font-size: 300%;">学生学院奖项信息填报系统</p>
    </div>
  </div>
  <div class="right" style="float: right;">
    <div id="box">
      <div class="login-wrapper">
            <div class="header">登录</div>
            <div class="form-wrapper">
                <input type="text" name="username" placeholder="用户名" class="input-item">
                <input type="password" name="password" placeholder="请输入密码" class="input-item">
                <button class="btn btn1">登录</button>
            </div>
            <div>
                没有账户?
                <a href="#">注册</a>
                <p><a href="#">忘记密码</a></p>
            </div>
        </div>
    </div>
  </div>
</div>
  </header>
</template>

<style scoped>

</style>
