<template>
    <div>
        <label>Email</label>

        <button type="button" class="btn btn-danger">Email按钮</button>
        <input placeholder="Enter your email address" v-model="newTodo" @input="send($event.target.value)" v-on:keyup.enter="$emit('addNewTodo',newTodo)">
        <slot></slot>     
    </div>
</template>


<script>
    export default {
        data(){
            return{
                newTodo:''
            }
        },
        created() {
            console.log('Email created');
        },
        mounted() {
            console.log('Email mounted');
        },
        methods: {
            send:function(value){
                console.log('emailSendOwnMessage');
                this.$emit("listenusername");
            }
        }
    }
</script>

<style scoped>
    
</style>