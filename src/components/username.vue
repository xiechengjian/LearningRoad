<template>
    <div>
        <label>Username</label>
        <label>{{this.$route.params.userName}}</label>
        <slot name="header"></slot>
        <input placeholder="Enter your username" @input="send($event.target.value)" @focus="focus" @blur="blur" ref="input" v-bind:value="value">
       <Button type="success" class="btn btn-danger">危险按钮</Button>
    </div>
</template>


<script>
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
// import './assets/css/bootstrap.min.css'  
// import './assets/js/bootstrap.min'
export default {
        props:['emit','value'],
        data(){
            return {
              nums:[1,8,2,5,3,4,7,9,6],
              name:''
            }
        },
        created() {
            console.log('createdUsername');
            //this.$emit("listenusername",this.nums);
            // console.log('username created');
        },
        mounted() {
            //this.$emit("listenusername",this.nums);
            //console.log('usernameEmit',this.nums);
        },
        destroyed() {
            // console.log('destroyedUsername');
        },
    methods: {
        send (now) {
            //console.log('usernameSendVUEMes:',now);
            //this.emit.$emit("listenusername", this.nums);
            this.$emit('input',now)
            //console.log(this.$refs.input);
            console.log('Value:'+this.value);
        },
        focus (now){
            console.log('focus');
        },
        blur(){
            console.log('usernameSendOWNMes');
            this.$emit("listenusername", this.nums);
        }
    },
    watch:{
        name:function(now){
            //console.log(now);
            //this.$emit("listenusername", this.nums);
        }
    }
    }
</script>

<style scoped>
/*@import '../assets/bootstrap/css/bootstrap.css';
@import 'bootstrap/dist/css/bootstrap.min.css'*/
.box1{  
    height: 200px;  
    width: 600px;  
    margin: 0 auto;  
}  
.box1 a{  
    display: block;  
    height: 50%;  
    width: 50%;  
    background:red;  
}  
</style> 