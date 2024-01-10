const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
const passReg = /^[0-9]{6}$/;
const codeReg = /^\d{4}$/;
// 获取元素的选择器封装
window.$ = HTMLElement.prototype.$ = function (selector) {
    var elems = (this == window ? document : this).querySelectorAll(selector);
    return elems.length == 0 ?
        null
        :
        elems.length == 1 ?
            elems[0]
            :
            elems
        ;
}
//封装绑定事件addEventListener() 简写绑定事件
window.bind = HTMLElement.prototype.bind = function (eName, fn, capture) {
    this.addEventListener(eName, fn, capture);
}

const title = {
    1: '登录',
    2: '注册',
    3: '忘记密码'
}

const loginOnbj = {
    type: 1, // 1登录，2注册，3忘记密码撒
    init() {
        // console.log('22222',)
        // let doms  =  $('.list-container li');
        // 数组遍历
        // while() {}
        // for()
        // for( in )
        // for ( of )

        // array.forEach(element => {

        // });
        // array.map(item => {

        // })
        // some
        // every
        // [].fl
        // find
        // findeIndex

        // console.log('111', doms )
        //获取自定义属性
        // doms.forEach(item => {
        //     console.log('data-id', item.getAttribute('data-id'))  
        //     item.bind('click', function() {

        //     })
        // });
        // console.log('111', $('#zc-btn,.head,.login-main') )
        this.bind();
    },
    bind() { // 绑定事件
        this.loginBtn();
        this.zcBtn();
        this.wjBtn();
        this.loginInput();
        this.zcInput();
        this.wjInput();
        this.submitBtn();
        this.hideShow();

    },

    //  注册按钮操作
    zcBtn() {
        let _this = this;
        $('#zc-btn').bind('click', function () {
            _this.type = 2;
            $('.head').innerHTML = title[2];
            $('.login-main').className = 'login-main hide';
            $('.wj-main').className = 'wj-main hide';
            $('.zc-main').className = 'zc-main show';
            $('#zc-btn').className = 'btn hide';
            $('#dl-btn').className = 'btn show';
            $('#wj-btn').className = 'btn show';
            $('#zcname').value = '';
            $('#change_margin_2').innerHTML = '';
            $('#zcyzm').value = '';
            $('#zym2').innerHTML = '';
            $('#zcpassword').value = '';
            $('#pwd2').innerHTML = '';
            $('#zcqrpassword').value = '';
            $('#zcqrpwd').innerHTML = '';

        });
    },
    //  登录按钮操作
    loginBtn() {
        let _this = this;
        $('#dl-btn').bind('click', function () {
            _this.type = 1;
            $('.head').innerHTML = title[1];
            $('.login-main').className = 'login-main show';
            $('.wj-main').className = 'wj-main hide';
            $('.zc-main').className = 'zc-main hide';
            $('#dl-btn').className = 'btn hide';
            $('#zc-btn').className = 'btn show';
            $('#wj-btn').className = 'btn show';
            $('#username').value = '';
            $('#change_margin_1').innerHTML = '';
            $('#passwor').value = '';
            $('#pwd').innerHTML = '';
            $('#codeyzm').value = '';
            $('#yzm').innerHTML = '';
        });
    },

    // 忘记密码
    wjBtn() {
        let _this = this;
        $('#wj-btn').bind('click', function () {
            _this.type = 3;
            $('.head').innerHTML = title[3];
            $('.wj-main').className = 'wj-main show';
            $('.login-main').className = 'login-main hide';
            $('.zc-main').className = 'zc-main hide'
            $('#zc-btn').className = 'btn show';
            $('#dl-btn').className = 'btn show';
            $('#wj-btn').className = 'btn hide';
            $('#wjname').value = '';
            $('#change_margin_3').innerHTML = '';
            $('#wjpassword').value = '';
            $('#wjpwd').innerHTML = '';
            $('#wjqrpassword').value = '';
            $('#wjqrpwd').innerHTML = '';
            $('#wjtelnum').value = '';
            $('#wjtel').innerHTML = '';
            $('#wjmail').value = '';
            $('#wjm').innerHTML = '';
            $('#wjyzm').value = '';
            $('#wjyzmts').innerHTML = '';
        });
    },

    // 登录页面input框提示信息
    loginInput() {
        let _this = this;
        $('#username').bind('input', function () {
            _this.type = 1;
            $('#change_margin_1').innerHTML = !this.value ? '请输入账号\手机号' : '';
        });
        $('#passwor').bind('input', function () {
            _this.type = 1;
            $('#pwd').innerHTML = !this.value ? '请输入密码' : '';
        });
        $('#codeyzm').bind('input', function () {
            _this.type = 1;
            $('#yzm').innerHTML = !this.value ? '请输入验证码' : '';
        });

    },

    // 注册页面input框提示信息
    zcInput() {
        let _this = this;
        $('#zcname').bind('input', function () {
            _this.type = 2;
            $('#change_margin_2').innerHTML = !this.value ? '请输入账号\手机号' : '';
        });
        $('#zcyzm').bind('input', function () {
            _this.type = 2;
            $('#zym2').innerHTML = !this.value ? '请输入验证码' : '';
        });
        $('#zcpassword').bind('input', function () {
            _this.type = 2;
            $('#pwd2').innerHTML = !this.value ? '请输入密码' : '';
        });
        $('#zcqrpassword').bind('input', function () {
            _this.type = 2;
            $('#zcqrpwd').innerHTML = !this.value ? '请输入确认密码' : '';
        });

    },

    // 忘记密码页面input框提示信息
    wjInput() {
        let _this = this;
        $('#wjname').bind('input', function () {
            _this.type = 3;
            console.log('11111this111', this.value)
            $('#change_margin_3').innerHTML = !this.value ? '请输入账号' : '';
        });
        $('#wjpassword').bind('input', function () {
            _this.type = 3;
            $('#wjpwd').innerHTML = !this.value ? '请输入密码' : '';
        });
        $('#wjqrpassword').bind('input', function () {
            _this.type = 3;
            $('#wjqrpwd').innerHTML = !this.value ? '请输入确认密码' : '';
        });
        $('#wjtelnum').bind('input', function () {
            _this.type = 3;
            $('#wjtel').innerHTML = !this.value ? '请输入手机号' : '';
        });
        $('#wjmail').bind('input', function () {
            _this.type = 3;
            $('#wjm').innerHTML = !this.value ? '请输入E-mail' : '';
        });
        $('#wjyzm').bind('input', function () {
            _this.type = 3;
            $('#wjyzmts').innerHTML = !this.value ? '请输入验证码' : '';
        });

    },

    // 按钮提交
    submitBtn() {
        const _this = this;
        let parmas = {}; // 提交数据
        $('#submitBtn').bind('click', function () {
            if (_this.type === 1) {
                let usernamevalue = $('#username').value.trim();
                let pwdvalue = $('#passwor').value.trim();
                let yzmvalue = $('#codeyzm').value.trim();
                if (!usernamevalue) {
                    $('#change_margin_1').innerHTML = '请输入账号\手机号';
                }
                if (!pwdvalue) {
                    $('#pwd').innerHTML = "密码不能为空";
                };
                if (!passReg.test(pwdvalue)) {
                    $('#pwd').innerHTML = "密码只能为6位数字";
                };
                if (!yzmvalue) {
                    $('#yzm').innerHTML = "请输入验证码";
                };
                if (!codeReg.test(yzmvalue)) {
                    $('#yzm').innerHTML = "验证码错误";
                };
                parmas = {
                    usernamevalue,
                    pwdvalue,
                    yzmvalue,
                };
            };
            //注册页面提交按钮
            if (_this.type === 2) {
                let zcvalue = $('#zcname').value.trim();
                let zcyzmvalue = $('#zcyzm').value.trim();
                let zcpasswordvalue = $('#zcpassword').value.trim();
                let zcqrpasswordvalue = $('#zcqrpassword').value.trim();
                if (!zcvalue) {
                    $('#change_margin_2').innerHTML = '请输入账号\手机号';
                };
                if (!phoneReg.test(zcvalue)) {
                    $('#change_margin_2').innerHTML = '请正确的手机号';
                };
                if (!zcyzmvalue) {
                    $('#zym2').innerHTML = "请输入验证码";
                };
                if (!codeReg.test(zcyzmvalue)) {
                    $('#zym2').innerHTML = "验证码错误";
                };
                if (!zcpasswordvalue) {
                    $('#pwd2').innerHTML = "请输入密码";
                };
                if (!zcqrpasswordvalue) {
                    $('#zcqrpwd').innerHTML = "请输入确认密码";
                };
                if (!(zcpasswordvalue == zcqrpasswordvalue)) {
                    $('#zcqrpwd').innerHTML = "两次密码不一致";
                };
                parmas = {
                    zcvalue,
                    zcyzmvalue,
                    zcpasswordvalue,
                    zcqrpasswordvalue
                };

            };
            //忘记密码页面提交按钮
            if (_this.type === 3) {
               
                let wjnamevalue = $('#wjname').value.trim();
                let wjpwdvaluealue = $('#wjpassword').value.trim();
                let wjqrpasswordvalue = $('#wjqrpassword').value.trim();
                let wjtelnumvalue = $('#wjtelnum').value.trim();
                let wjmailvalue = $('#wjmail').value.trim();
                let wjyzmvalue = $('#wjyzm').value.trim();
             
                if (!wjnamevalue) {
                    $('#change_margin_3').innerHTML = '请输入账号';
                    console.log('change_margin_3', change_margin_3);
                };
                if (!wjpwdvaluealue) {
                    $('#wjpwd').innerHTML = "请输入密码";
                };
                if (!wjqrpasswordvalue) {
                    $('#wjqrpwd').innerHTML = "请输入确认密码";
                };
                if (!(wjpwdvaluealue == wjqrpasswordvalue)) {
                    $('#wjqrpwd').innerHTML = "两次密码不一致";
                };
                if (!wjtelnumvalue) {
                    $('#wjtel').innerHTML = "请输入手机号码";
                };
                if (!phoneReg.test(wjtelnumvalue)) {
                    $('#wjtel').innerHTML = '请正确的手机号';
                };
                if (!wjmailvalue) {
                    $('#wjm').innerHTML = "请输入E-mail";
                };
                if (!wjyzmvalue) {
                    $('#wjyzmts').innerHTML = "请输入验证码";
                };
                if (!codeReg.test(wjyzmvalue)) {
                    $('#wjyzmts').innerHTML = "验证码错误";
                };
                parmas = {
                    wjnamevalue,
                    wjpwdvaluealue,
                    wjqrpasswordvalue,
                    wjtelnumvalue,
                    wjmailvalue,
                    wjyzmvalue
                };

            };
        });

    },
    hideShow() {
        const _this = this;
        let flag = 0;
        //登录页面密码隐藏显示
        $('#eye1').bind('click', function () {
            if (flag == 0) {
                $('#passwor').type = 'text';
                $('#eye1').src = 'images/eyek.png';
                flag = 1;
            } else {
                $('#passwor').type = 'password';
                $('#eye1').src = 'images/eyeb.png';
                flag = 0;
            };
        });
        //注册页面密码隐藏显示
        $('#icon1').bind('click', function () {
            if (flag == 0) {
                $('#zcpassword').type = 'text';
                $('#icon1').src = 'images/eyek.png';
                flag === 1;
            } else {
                $('#zcpassword').type = 'password';
                $('#icon1').src = 'images/eyeb.png';
                flag === 0;
            };
        });
        $('#icon2').bind('click', function () {
            if (flag == 0) {
                $('#zcqrpassword').type = 'text';
                $('#icon2').src = 'images/eyek.png';
                flag === 1;
            } else {
                $('#zcqrpassword').type = 'password';
                $('#icon2').src = 'images/eyeb.png';
                flag === 0;
            };
        });
        //忘记密码页面密码隐藏显示
        $('#wjicon1').bind('click', function () {
            if (flag == 0) {
                $('#wjpassword').type = 'text';
                $('#wjicon1').src = 'images/eyek.png';
                flag === 1;
            } else {
                $('#wjpassword').type = 'password';
                $('#wjicowjicon1n2').src = 'images/eyeb.png';
                flag === 0;
            };
        });
        $('#wjicon2').bind('click', function () {
            if (!(flag ==0)) {
                $('#wjqrpassword').type = 'password';
                $('#wjicon2').src = 'images/eyeb.png';
                
                return; 
                
            }  else {
               flag === 1;
                $('#wjqrpassword').type = 'text';
                $('#wjicon2').src = 'images/eyek.png';
                flag === 0;

            };console.log('wjicon2',wjicon2);
           
        });
    },

 

};
loginOnbj.init();

// $('#wjicon2').bind('click', function () {
//     if (flag === 0) {
//         $('#wjqrpassword').type = 'text';
//         $('#wjicon2').src = 'images/eyek.png';
//         flag === 1;
//     }else {
//         $('#wjqrpassword').type = 'password';
//         $('#wjicon2').src = 'images/eyeb.png';
//         // flag = 0;
        
//     };
//     console.log('wjicon2',wjicon2);
// });