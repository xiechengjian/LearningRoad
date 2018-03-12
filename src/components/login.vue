<template>
    <div class="login">
            <Spin fix v-if="loading">
                <Icon type="load-c" size="38" class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        <div class="continer">
<!--             <div class="bg1"></div>
            <div class="bg2">
                <div class="bg2-1"></div>
            </div> -->
            <!-- <div class="bg">
            </div> -->
            <div class="loginContiner">
<!--                 <div class="logo"></div> -->
                <div class="loginTitle">World系统</div>
                <div class="shuru">
                    <div class="icon username"></div>
                    <input type="text" id="username"  autocomplete="off" @blur="nameBlur" @focus="userErrMsg = ''" v-model="username" placeholder="用户名" maxlength="10" />
                    <span class="msg" v-show="userErrMsg">{{userErrMsg}}</span>
                </div>
                <div class="shuru">
                    <div class="icon password"></div>
                    <input type="password" id="password" autocomplete="off" @blur="pwdBlur" @focus="pwdErrMsg = ''" v-model="password" placeholder="密码" maxlength="15"/>
                    <span class="msg" v-show="pwdErrMsg">{{pwdErrMsg}}</span>
                </div>
                <div class="checkBox">
                    <input type="checkbox" id="autoLogin" v-model="autoLogin" >
                    <label for="autoLogin" style="float:left">自动登录</label>
                    <input type="checkbox" id="remberPwd" v-model="remberPwd">
                    <label for="remberPwd" style="float:right">记住密码</label>
                </div>
                <button class="submit" type="button" @click="submit">
                <span>登录</span>
                </button>
            </div>
            <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="star"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          >
          </vue-particles>
        </div> 
    </div>
</template>


<script>
// import router from 'router'
console.time("loginLoad");
import $ from "jQuery";
export default {
    name: "login",
    props: ["emit"],
    data() {
        return {
            message: "HELLO",
            pwdErrMsg: "",
            userErrMsg: "",
            username: "admin",
            password: "admin",
            autoLogin: false,
            remberPwd: false,
            loading: true
        };
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message
                .split("")
                .reverse()
                .join("");
        }
    },
    created() {
        console.log(this.emit);
        this.emit.$emit("isLogin", false);
        // console.log(this.$router);
    },
    mounted() {
        var newImg = new Image();
        newImg.src = "http://cjxieoss.oss-cn-shenzhen.aliyuncs.com/bg.jpg";
        newImg.onload = () => {
            this.loading = false;
            console.timeEnd("loginLoad");
        };
        $(".main").css({ position: "unset", padding: "0" });
        // this.loading = false;
    },
    beforeDestroy() {
        $(".main").css({ position: "relative", "padding-left": "20%" });
    },
    methods: {
        //提交按钮
        submit() {
            // if (!this.username) {
            //     this.userErrMsg = "请输入用户名";
            //     return;
            // } else if (!this.password) {
            //     this.pwdErrMsg = "请输入密码";
            //     return;
            // } else if (this.username !== "admin" && this.username !== "bug") {
            //     this.userErrMsg = "用户名不存在";
            //     return;
            // } else if (this.password !== "admin" && this.password !== "bug") {
            //     this.pwdErrMsg = "密码错误";
            //     return;
            // } else if (this.username == "bug" && this.password == "bug") {
            //     // router.push('/fo');
            //     location.href = "#/fo";
            // } else {
            //登录成功
            console.log("登录成功！");
            this.$router.push("/goods");
            setTimeout(() => {
                this.emit.$emit("isLogin", true);
            }, 1000);
            if (this.remberPwd) {
                sessionStorage.setItem("remberPwd", this.remberPwd);
                sessionStorage.setItem("fiberhome_name", this.username);
                sessionStorage.setItem("fiberhome_pwd", this.password);
            }
            // }
        },
        nameBlur() {
            if (this.username.length < 3 || this.username.length > 8) {
                this.userErrMsg = "用户名长度必须大于三位数且少于八位数";
            }
        },
        pwdBlur() {
            if (this.password.length < 3 || this.password.length > 8) {
                this.pwdErrMsg = "密码长度必须大于三位数且少于八位数";
            }
        }
    },
    watch: {
        autoLogin: function autogin(argument) {
            // sessionStorage.setItem('isLogin', now);
        },
        remberPwd: function remberPwd(now) {
            console.log(now);
        }
    }
};
</script>
<style scoped src="../../static/css/login.css">
/* @import "../../static/css/login.css"; */
.box {
  animation: moveup 10s linear infinite;
}
.page {
  overflow: hidden;
}

/*样式*/
.page {
  margin-top: 200px;
  height: 100px;
  border-top: 2px solid lightblue;
  border-bottom: 2px solid red;
}
.box {
  margin: 0;
}
.box li {
  line-height: 30px;
}
</style>