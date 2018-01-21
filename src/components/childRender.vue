<template>
    <childRender :level="5">Learning ChildRender</childRender>
</template>

<script>
import Vue from 'vue'
export default {
    data(){
        return{
            text:'this is ChildRender'
        }
    }
    // props: {
    //     level: {
    //         type: Number,
    //         required: true
    //     }
    // },
    // render: function(createElement) {
    //     console.log('childRender', this);
    //     return createElement(
    //         'h' + this.level,
    //         this.$slots.default
    //     )
    // }
}
Vue.component('childRender', {
  render: function (createElement) {
    console.log('childRender1', this.level);
    return createElement(
      'h' + this.level,   // tag name 标签名称
      {                    //Data对象
        style: {
            color: 'red',
            fontSize: '20px'
        },
        attrs: {
            id: 'ParentRender'
        },
        'class': {
        foo: true,
        bar: false
        },
      },[this.$slots.default,     
            createElement('label',{    // 子组件中的阵列
               style: {
                color: 'blue',
                fontSize: '28px'
            } 
        },'render子标签')
      ])
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  },
    created() {
        console.log('createdchildRender:');
    }
})
</script>

<style scoped>
    
</style>