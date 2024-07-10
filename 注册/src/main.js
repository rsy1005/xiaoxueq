import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const name = document.getElementById('name');
const grade = document.getElementById('grade');
const professional= document.getElementById('professional');
const captcha= document.getElementById('captcha');

form.addEventListener('submit', e => {
	e.preventDefault();
	validateForm();
});

// 表单验证
function validateForm() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordConfirmValue = passwordConfirm.value.trim();
	const nameValue = name.value.trim();
	const gradeValue = grade.value.trim();
	const professionalmValue = professional.value.trim();
	const captchaValue = captcha.value.trim();
	
	// 验证用户名
	if(usernameValue === '') {
		printError(username, '请输入用户名');
	} else {
		removeError(username);
	}
	
	// 验证邮箱
	if(emailValue === '') {
		printError(email, '请输入邮箱');
	} else if (!validateEmail(emailValue)) {
		printError(email, '邮箱格式有误');
	} else {
		removeError(email);
	}
	
	// 验证密码
	if(passwordValue === '') {
		printError(password, '请输入密码');
	} else {
		removeError(password);
	}
	
	// 验证确认密码
	if(passwordConfirmValue === '') {
		printError(passwordConfirm, '请确认密码');
	} else if(passwordValue !== passwordConfirmValue) {
		printError(passwordConfirm, '两次输入的密码不一致，请重新输入');
	} else{
		removeError(passwordConfirm);
	}
	// 验证姓名
	if(nameValue === '') {
		printError(name, '请输入姓名');
	} else {
		removeError(name);
	}
	// 验证年级
	if(gradeValue === '') {
		printError(grade, '请输入年级');
	} else {
		removeError(grade);
	}
	// 验证密码
	if(professionalmValue === '') {
		printError(professional, '请输入专业');
	} else {
		removeError(professional);
	}
	// 验证验证码
	if(captchaValue === '') {
		printError(captcha, '请输入验证码');
	} else {
		removeError(captcha);
	}
}

// 打印错误提示
function printError(input, message) {
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error-message');
	formControl.classList.add('error');
	errorMessage.textContent = message;
}

// 删除错误提示（用户输入正确信息）
function removeError(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
}

// 验证邮箱格式
function validateEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
