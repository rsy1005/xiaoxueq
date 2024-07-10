<script setup>
</script>

<template>
	<div id="lan" class="tu"></div>
 <div class="container">
	<div class="header">
		<h2>学生忘记密码</h2>
	</div>
	<form id="form" class="form" novalidate>
		<div class="form-control">
			<input type="text" placeholder="用户名" id="username" />
			<small class="error-message"></small>
		</div>
		<div class="form-control">
			<input type="email" placeholder="邮箱" id="email" />
			<small class="error-message"></small>
		</div>
		<div class="form-control">
			<input type="password" placeholder="密码" id="password"/>
			<small class="error-message"></small>
		</div>
		<div class="form-control">
			<input type="password" placeholder="确认密码" id="password-confirm"/>
			<small class="error-message"></small>
		</div>
		<div class="form-control">
			<input type="checkcode" placeholder="验证码" id="checkcode"/>
			<small class="error-message"></small>
			<button class="button2">发送验证码</button>
		</div>
		<button class="button1">发送</button>
	</form>
</div>
</template>

<style scoped>

</style>
