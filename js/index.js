//获取元素并保存到变量对象中
// var txt1 = document.getElementById("txt1");
// var tip = document.getElementById("tip");
// var btn1 = document.getElementById("btn1");
//绑定按钮的事件
// btn1.onclick = function() {
//     检测文本框的内容
//     if (txt1.value != '') {
//         tip.innerText = '数据提交成功！'
//     } else {
//         tip.innerText = '姓名不能为空！'
//     }
// }

const phoneReg  = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
const passReg = /^[0-9]{6}$/;
const codeReg = /^\d{4}$/;

phoneReg.test()

//实现页面的切换成功
window.addEventListener('load', function() {
	const head = document.querySelector('.head');
	// 登录
	const loginMain = document.querySelector('.login-main')
	// 注册
	const zcMain = document.querySelector('.zc-main')

	// 忘记密码
	const wjMain = document.querySelector('.wj-main')

	// 注册按钮
	const zcBtn = document.getElementById('zc-btn');
	//登录按钮
	const dlBtn = document.getElementById('dl-btn');
	//忘记密码
	const wjBtn = document.getElementById('wj-btn');



    //登录界面
	dlBtn.addEventListener('click', () => {
		head.innerHTML = '登录'
		loginMain.className = 'login-main show';
		wjMain.className = 'wj-main hide';
		zcMain.className = 'wj-main hide';
		dlBtn.className = 'btn hide';
		zcBtn.className = 'btn show';
		wjBtn.className = 'btn show';
        document.getElementById('username').value = '';
        document.getElementById('change_margin_1').innerHTML = '';
        document.getElementById('passwor').value = '';
        document.getElementById('pwd').innerHTML = '';
        document.getElementById('codeyzm').value = '';
        document.getElementById('yzm').innerHTML = '';

	})
	//注册界面
	zcBtn.addEventListener('click', () => {
		head.innerHTML = '注册'
		loginMain.className = 'login-main hide';
		wjMain.className = 'wj-main hide';
		zcMain.className = 'wj-main show';
		zcBtn.className = 'btn hide';
		dlBtn.className = 'btn show';
		wjBtn.className = 'btn show';
        document.getElementById('zcname').value = '';
        document.getElementById('change_margin_2').innerHTML = '';
        document.getElementById('zcyzm').value = '';
        document.getElementById('zym2').innerHTML = '';
        document.getElementById('zcpassword').value = '';
        document.getElementById('pwd2').innerHTML = '';
        document.getElementById('zcqrpassword').value = '';
        document.getElementById('zcqrpwd').innerHTML = '';

	})
	
	//忘记密码界面
	wjBtn.addEventListener('click', () => {
		head.innerHTML = '忘记密码'
		wjMain.className = 'wj-main show';
		loginMain.className = 'login-main hide';
		zcMain.className = '.wj-main hide'
		dlBtn.className = 'btn show';
		zcBtn.className = 'btn show';
		wjBtn.className = 'btn hide';
        document.getElementById('wjname').value = '';
        document.getElementById('change_margin_3').innerHTML = '';
        document.getElementById('wjpassword').value = '';
        document.getElementById('wjpwd').innerHTML = '';
        document.getElementById('wjqrpassword').value = '';
        document.getElementById('wjqrpwd').innerHTML = '';
        document.getElementById('wjtelnum').value = '';
        document.getElementById('wjtel').innerHTML = '';
        document.getElementById('wjmail').value = '';
        document.getElementById('wjm').innerHTML = '';
        document.getElementById('wjyzm').value = '';
        document.getElementById('wjyzmts').innerHTML = '';

	})

})

//实现密码显示隐藏 
var eye = document.querySelector('.icon');
//注册事件 处理程序
var flag = 0;
eye.onclick = function() {
	if (flag == 0) {
		document.getElementById('passwor').type = 'text';
		eye.src = 'images/eyek.png';
		flag = 1;
	} else {
		document.getElementById('passwor').type = 'password';
		eye.src = 'images/eyeb.png';
		flag = 0;
	}
}
//注册页面
var eye1 = document.getElementById('icon1');
//注册事件 处理程序
var flag1 = 0;
eye1.onclick = function() {
	if (flag1 == 0) {
		document.getElementById('zcpassword').type = 'text';
		eye1.src = 'images/eyek.png';
		flag1 = 1;
	} else {
		document.getElementById('zcpassword').type = 'password';
		eye1.src = 'images/eyeb.png';
		flag1 = 0;
	}
}
var eye2 = document.getElementById('icon2');
//注册事件 处理程序
var flag2 = 0;
eye2.onclick = function() {
	if (flag2 == 0) {
		document.getElementById('zcqrpassword').type = 'text';
		eye2.src = 'images/eyek.png';
		flag2 = 1;
	} else {
		document.getElementById('zcqrpassword').type = 'password';
		eye2.src = 'images/eyeb.png';
		flag2 = 0;
	}
}
//忘记页面
var wjeye1 = document.getElementById('wjicon1');
//注册事件 处理程序
var wjflag1 = 0;
wjeye1.onclick = function() {
	if (wjflag1 == 0) {
		document.getElementById('wjpassword').type = 'text';
		wjeye1.src = 'images/eyek.png';
		wjflag1 = 1;
	} else {
		document.getElementById('wjpassword').type = 'password';
		wjeye1.src = 'images/eyeb.png';
		wjflag1 = 0;
	}
}
var wjeye2 = document.getElementById('wjicon2');
//注册事件 处理程序
var wjflag2 = 0;
wjeye2.onclick = function() {
	if (wjflag2 == 0) {
		document.getElementById('wjqrpassword').type = 'text';
		wjeye2.src = 'images/eyek.png';
		wjflag2 = 1;
	} else {
		document.getElementById('wjqrpassword').type = 'password';
		wjeye2.src = 'images/eyeb.png';
		wjflag2 = 0;
	}
}





//点击input框显示提示信息与隐藏
//登陆界面
let username = document.getElementById('username');
username.addEventListener('input', function () {
    if(!this.value) {
        document.getElementById('change_margin_1').innerHTML = '请输入账号\手机号';
        return;
    } else {
        document.getElementById('change_margin_1').innerHTML = '';
    } 
})
let passwor = document.getElementById('passwor');
passwor.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('pwd').innerHTML = '请输入密码';
        return;
    } else {
        document.getElementById('pwd').innerHTML = '';
    } 
})
let codeyzm = document.getElementById('codeyzm');
codeyzm.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('yzm').innerHTML = '请输入验证码';
        return;
    } else {
        document.getElementById('yzm').innerHTML = '';
    } 
})

//注册界面
let zcname = document.getElementById('zcname');
zcname.addEventListener('input', function () {
    if(!this.value) {
        document.getElementById('change_margin_2').innerHTML = '请输入账号\手机号';
        return;
    } else {
        document.getElementById('change_margin_2').innerHTML = '';
    } 
})
let zcyzm = document.getElementById('zcyzm');
zcyzm.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('zym2').innerHTML = '请输入密码';
        return;
    } else {
        document.getElementById('zym2').innerHTML = '';
    } 
})
let zcpassword = document.getElementById('zcpassword');
zcpassword.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('pwd2').innerHTML = '请输入密码';
        return;
    } else {
        document.getElementById('pwd2').innerHTML = '';
    } 
})
let zcqrpassword = document.getElementById('zcqrpassword');
zcqrpassword.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('zcqrpwd').innerHTML = '请输入确认密码';
        return;
    } else {
        document.getElementById('zcqrpwd').innerHTML = '';
    } 
})

//忘记密码页面
let wjname = document.getElementById('wjname');
wjname.addEventListener('input', function () {
    if(!this.value) {
        document.getElementById('change_margin_3').innerHTML = '请输入账号';
        return;
    } else {
        document.getElementById('change_margin_3').innerHTML = '';
    } 
})
let wjpassword = document.getElementById('wjpassword');
wjpassword.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('wjpwd').innerHTML = '请输入密码';
        return;
    } else {
        document.getElementById('wjpwd').innerHTML = '';
    } 
})
let wjqrpassword = document.getElementById('wjqrpassword');
wjqrpassword.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('wjqrpwd').innerHTML = '请输入确认密码';
        return;
    } else {
        document.getElementById('wjqrpwd').innerHTML = '';
    } 
})
let wjtelnum = document.getElementById('wjtelnum');
wjtelnum.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('wjtel').innerHTML = '请输入手机号';
        return;
    } else {
        document.getElementById('wjtel').innerHTML = '';
    } 
})

let wjmail = document.getElementById('wjmail');
wjmail.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('wjm').innerHTML = '请输入E-mail';
        return;
    } else {
        document.getElementById('wjm').innerHTML = '';
    } 
})
let wjyzm = document.getElementById('wjyzm');
wjyzm.addEventListener('input', function () {
    if(!this.value) {
          document.getElementById('wjyzmts').innerHTML = '请输入验证码';
        return;
    } else {
        document.getElementById('wjyzmts').innerHTML = '';
    } 
})













//登陆页面 点击提交按钮显示提示信息  
let loginBtn = document.getElementById('loginbtn')
loginBtn.onclick = function() {
    const headTitle = document.querySelector('.head').innerHTML;
   //登录页面 trim()去掉两端多余空格
    let parmas = {};
    if(headTitle === '登录') {
        let usernamevalue = document.getElementById('username').value.trim();
        let pwdvalue = document.getElementById('passwor').value.trim();
        let yzmvalue = document.getElementById('codeyzm').value.trim();
        console.log('usernamevalue', usernamevalue)
        if(!usernamevalue) {
            document.getElementById('change_margin_1').innerHTML = '请输入账号\手机号';
        }
        if(!pwdvalue) {
            document.getElementById("pwd").innerHTML = "密码不能为空";
        } 
        if(!passReg.test(pwdvalue)) {
            document.getElementById("pwd").innerHTML = "密码只能为6位数字";
        }
        if(!yzmvalue) {
            document.getElementById("yzm").innerHTML = "请输入验证码";
        }
        if(!codeReg.test(yzmvalue)) {
            document.getElementById("yzm").innerHTML = "验证码错误";
        }
        parmas = {
            usernamevalue,
            pwdvalue,
            yzmvalue,
        }
        console.log('parmas', parmas)
    }
    //注册页面
    let zcparmas = {};
    if(headTitle === '注册') {
        let zcvalue = document.getElementById('zcname').value.trim();
        let zcyzmvalue = document.getElementById('zcyzm').value.trim();
        let zcpasswordvalue = document.getElementById('zcpassword').value.trim();
        let zcqrpasswordvalue = document.getElementById('zcqrpassword').value.trim();
        if(!zcvalue) {
            document.getElementById('change_margin_2').innerHTML = '请输入账号\手机号';
        }
        if(!phoneReg.test(zcvalue)){
            document.getElementById('change_margin_2').innerHTML = '请正确的手机号';
        }
        if(!zcyzmvalue) {
            document.getElementById("zym2").innerHTML = "请输入验证码";
        }
        if(!codeReg.test(zcyzmvalue)) {
            document.getElementById("zym2").innerHTML = "验证码错误";
        }
        if(!zcpasswordvalue){
            document.getElementById("pwd2").innerHTML = "请输入密码";
        }
        if(!zcqrpasswordvalue){
            document.getElementById("zcqrpwd").innerHTML = "请输入确认密码";
        }
        if(!(zcpasswordvalue==zcqrpasswordvalue)){
            document.getElementById("zcqrpwd").innerHTML = "两次密码不一致";
        }
        zcparmas = {
            zcvalue,
            zcyzmvalue,
            zcpasswordvalue,
            zcqrpasswordvalue

        }
        console.log('zcparmas', zcparmas)
    }

    //忘记密码页面
    let wjparmas = {};
    if(headTitle === '忘记密码') {
        let wjnamevalue = document.getElementById('wjname').value.trim();
        let wjpwdvaluealue = document.getElementById('wjpassword').value.trim();
        let wjqrpasswordvalue = document.getElementById('wjqrpassword').value.trim();
        let wjtelnumvalue = document.getElementById('wjtelnum').value.trim();
        let wjmailvalue = document.getElementById('wjmail').value.trim();
        let wjyzmvalue = document.getElementById('wjyzm').value.trim();
      
        if(!wjnamevalue) {
            document.getElementById('change_margin_3').innerHTML = '请输入账号';
        }
      
        if(!wjpwdvaluealue) {
            document.getElementById("wjpwd").innerHTML = "请输入密码";
        }
        if(!wjqrpasswordvalue){
            document.getElementById("wjqrpwd").innerHTML = "请输入确认密码";
        }
        if(!(wjpwdvaluealue==wjqrpasswordvalue)){
            document.getElementById("wjqrpwd").innerHTML = "两次密码不一致";
        }
        if(!wjtelnumvalue){
            document.getElementById("wjtel").innerHTML = "请输入手机号码";
        }
        if(!phoneReg.test(wjtelnumvalue)){
            document.getElementById('wjtel').innerHTML = '请正确的手机号';
        }
        if(!wjmailvalue){
            document.getElementById("wjm").innerHTML = "请输入E-mail";
        }
        if(!wjyzmvalue){
            document.getElementById("wjyzmts").innerHTML = "请输入验证码";
        } 
        if(!codeReg.test(wjyzmvalue)) {
            document.getElementById("wjyzmts").innerHTML = "验证码错误";
        }
        
        wjparmas = {
            wjnamevalue,
            wjpwdvaluealue,
            wjqrpasswordvalue,
            wjtelnumvalue,
            wjmailvalue,
            wjyzmvalue
        }
        console.log('wjparmas', wjparmas)
    }
}

function look(){ 
    const headTitle = document.querySelector('.head').innerHTML;
    if(headTitle === '登录'){
        let codeyzm=document.getElementById('codeyzm').value;
        if(!codeyzm.value){
            document.getElementById("b").disabled="";
            console.log('b','点击了');
            }else{
                document.getElementById("b").disabled="disabled";
                console.log('b','不能点击');
            }
        }
    }
    











    //注册页面 点击提交按钮显示提示信息
// let loginBtn = document.getElementById('loginbtn')
// loginBtn.onclick = function() {
// 	let zcvalue = zcname.value
// 	let zcyzmvalue = zcyzm.value
// 	let zcpasswordvalue = zcpassword.value
//     let zcqrpasswordvalue = zcpassword.value
	
// 	if (!(zcvalue && zcyzmvalue && zcpasswordvalue && zcqrpasswordvalue)) {
// 		document.getElementById('change_margin_2').innerHTML = '请输入账号\手机号';
// 		document.getElementById("zym2").innerHTML = "请输入验证码";
// 		document.getElementById("pwd2").innerHTML = "请输入密码";
//         document.getElementById("zcqrpwd").innerHTML = "请输入确认密码";
// 		return;
// 	} else if(zcvalue && zcyzmvalue && zcpasswordvalue && zcqrpasswordvalue){
// 		document.getElementById("change_margin_2").innerHTML = " ";	
// 		document.getElementById("zym2").innerHTML = " ";
// 		document.getElementById("pwd2").innerHTML = " ";
//         document.getElementById("zcqrpwd").innerHTML = " ";
// 		return;
		
// 	}
// }
	//密码框
	// var pwd = document.getElementById("password").value;
	// if (!pwd) {
	// 	document.getElementById("pwd").innerHTML = "密码不能为空";
	// 	return;
	// } else {
	// 	document.getElementById("pwd").innerHTML = "";
	// 	var reg = /^[0-9]{6}$/;
	// 	if (!reg.test(pwd)) {
	// 		document.getElementById("pwd").innerHTML = "密码只能为6位数字";
	// 		return;
	// 	}
	// }

//注册页面
// let loginBtn = document.getElementById('loginbtn')
// loginBtn.onclick = function() {
// 	let usernamevalue = username.value
// 	let pwdvalue = username.value
// 	let yzmvalue = username.value
	
// 	if (!(usernamevalue && pwdvalue && yzmvalue)) {
// 		document.getElementById('change_margin_1').innerHTML = '请输入账号\手机号';
// 		document.getElementById("pwd").innerHTML = "密码不能为空";
// 		document.getElementById("yzm").innerHTML = "请输入验证码";
// 		return;
// 	} else {
// 		document.getElementById("change_margin_1").innerHTML = " ";
// 		return;
// 		document.getElementById("pwd").innerHTML = " ";
// 		return;
// 		document.getElementById("yzm").innerHTML = " ";
// 		return;
		
// 	}
// }





//有效当鼠标放到input框里面的时候下面会弹出提示文字
// var a = document.getElementById("username").value;
// //用户框失去焦点后验证value值
// function oBlur_1() {undefined
// if (!a) { //用户框value值为空
// document.getElementById("change_margin_1").innerHTML = "请输入账号！";
// } else { //用户框value值不为空
// document.getElementById("change_margin_1").innerHTML = "";
// }
// }



//检测全部表单元素是否为空
// function checkBlank(Form){
// 	var v=true;
// 	for(i=0;i<Form.length;i++){  
// 		if(Form.elements[i].value == ""){         //Form的属性elements的首字e要小写
// 			alert(Form.elements[i].title + "不能为空!");
// 			Form.elements[i].focus();				//指定表单元素获取焦点
// 			v=false;
// 			return false;
// 		}
// 	}
// 	return v;
// }

