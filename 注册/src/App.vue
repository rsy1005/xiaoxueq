<script setup>

</script>

<template>
<div>
	<div class="bianlan" >
		..
	</div>
<div class="container">
	
	<div class="header">
		<h2>注册账号</h2>
	</div>
	<form id="form" class="form" novalidate>
		<div class="form-control">
			<input type="text" placeholder="账号" id="username" />
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
			<input type="姓名" placeholder="请输入姓名" id="name"/>
			<small class="error-message"></small>
		</div>
		<div class="form-control">
			<input type="年级" placeholder="请输入年级" id="grade"/>
			<small class="error-message"></small>
		</div>
		<div class="form-control">
			<input type="专业" placeholder="请输入专业" id="professional"/>
			<small class="error-message"></small>
		</div><div class="form-control">
			<input type="验证码" placeholder="请输入验证码" id="captcha"/>
			<input type="button" style="" value="发送验证码" id="yanzma">
			<small class="error-message"></small>
		</div>
		<button>注册</button>
	</form>
</div>
</div>
</template>

<style scoped>

</style>
