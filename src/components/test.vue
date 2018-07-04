<template >
    <div >
<Row :gutter= "16"  class="code-row-bg">
        <Button span="8" class="LightPrimary">col-12</Button>
        <!-- <Col span="8"></Col> -->
</Row>
            <button type="button" @mouseup="toggle" @focus="bottonFocus">Toggle Login type</button>
            <button type="button" @mouseup="reset">reset</button>
            <button type="button" @click.prevent.self="doThis">事件处理</button>
            <transition name="usernameFade">
            <app-username v-if="loginType" :emit="vue" @listenusername="get" v-model="username"></app-username>
            </transition>
            <h1 slot="header">这里可能是一个页面标题</h1>
            
            {{username}}
                        {{usernameLength}}
            <app-email :text='text' @addNewTodo="addNewTodo" v-model="newTodo">
                <p>在email中通过slot分发的test的 内容</p>
            </app-email>
            
                <transition mode="in-out" name="component-fade">
                        <keep-alive>
                    <component :is="currentView" ></component>
                            </keep-alive>
                </transition>
            
            <div v-if="loginType === true">
                    <label>Username</label>  
                    <input placeholder="Enter your username" key="username-input">  
            </div>
            <div v-else>
                    <label>Email</label>  
                    <input placeholder="Enter your email address" key="email-input"> 
            </div>
            <div>
                <transition-group name="list-num" tag="p" mode="in-out">
                    <span v-for="i in nums" :key="i" class="list-item">
                        {{i}}
                    </span>            
                </transition-group>
            </div>
            <ul id="example-1" v-if="init">
                <li v-for="(value,key,index,) in userMes" :key="index" >
                    {{ value }}
                    {{ key }}
                    {{ index }}
                </li>
                <li is="todo-item" v-for="(todo, index) in toDoLists" :key="index+100" :title="todo.title" @remove="toDoLists.splice(index, 1)">
                    {{todo}}
                </li>
            </ul>
            <div class="box1" @click="doThis">  
                    <a href="http://www.baidu.com" @click="stop" target="_blank">http://www.baidu.com</a>  
            </div>
            <!-- <app-childRender>APP render</app-childRender> -->

            <ul>
                <li>
                    <router-link :to="{name:'childrender'}">Go to childRender</router-link>
                </li>
                <li>
                    <router-link  :to="{name:'username',params: {userName:'cjxie'}}" >Go to username</router-link>
                </li>
            </ul>

            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
           
            <!-- 路由匹配到的组件将渲染在这里 -->
             <router-view></router-view>
<!--              <app-chart :width="20" :height="20" :chartData="chartData"></app-chart> -->
            <i class="iconfont icon-fanhui" style="fontSize:150px"></i>
            <embed src="././static/css/fonts/rili.svg" width="300" height="100" />
            <svg><text x="0" y="15" fill="red" transform="rotate(30,20,40)" opacity=0.5>I love SVG</text></svg>   
    </div>

<!-- <script src="./static/bootstrap-dist/js/bootstrap.js"></script>
<script src="./static/bootstrap-dist/js/bootstrap.js"></script> -->
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>
import username from "./username.vue";
import email from "./email.vue";
import childRender from "./childRender.vue";
import Vue from "vue";
import chart from "./chart.js";
// import $ from 'jquery'

// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
// Array.prototype.arrCustom = function () {};
let iterable = [3, 5, 7];
for (let i in iterable) {
  //console.log(i); //  0, 1, 2, "foo", "arrCustom", "objCustom"
}
export default {
  components: {
    "app-username": username,
    "app-email": email,
    "app-childRender": childRender,
    "app-chart": chart
  },
  data() {
    return {
      vue: new Vue(),
      currentView: "app-username",
      loginType: false,
      init: true,
      text: "mes",
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      newTodo: "",
      items: [
        {
          message: "xie"
        },
        {
          message: "cj"
        }
      ],
      userMes: {
        name: "cjxie"
      },
      nums: [1, 2, 3],
      toDoLists: [
        {
          id: 10,
          title: "Do the dishes"
        },
        {
          id: 11,
          title: "Take out the trash"
        },
        {
          id: 12,
          title: "Mow the lawn"
        }
      ],
      nextTodoID: 13,
      username: "NONAME"
    };
  },
  mounted() {
    console.log("Testmounted");
    this.vue.$on("listenusername", function(data) {
      console.log("ReceivedUsernameDATA---same");
      this.nums = data.sort();
    });
  },
  destroyed() {
    console.log("Testdestroyed");
  },
  beforeRouteUpdate(to, from, next) {
    next();
    // console.log(history.length);
  },
  computed: {
    usernameLength: function(now) {
      console.log("computed:", this.username);
      return this.username.length;
    }
  },
  methods: {
    toggle: function() {
        console.log("object");
      //this.init = true;
      //this.loginType = ! this.loginType;
      // this.items[0].message='ooo';
      this.nums.splice(2, 0, this.nums.length + 1);
      // console.log($('.box1').text());
      //console.log(this.$route);
      //this.nums = _.shuffle(this.nums)
      this.items.push({ message: "haha" });
      this.items = this.items.filter(function(item) {
        return item.message.match(/cj|x+/);
      });
      // console.log(this.items);
    },
    reset: function(event) {
      Vue.set(this.userMes, "age", 24);
      this.$set(this.userMes, "hight", 175);
      //this.nums.length=3;
      this.nums.splice(3);
      console.log(event.target.tagName);
      if (this.currentView == "app-email") {
        this.currentView = "app-username";
      } else {
        this.currentView = "app-email";
      }
      //setTimeout(function(this){
      //this.$forceUpdate();
      //}, 200);
    },
    get: function(data) {
      console.log(data, "ReceivedUsernameDATA----dif");
      this.nums = data.sort();
    },
    addNewTodo: function(newTodo) {
      this.toDoLists.push({
        id: this.nextTodoID++,
        title: newTodo
      });
      this.newTodo = "";
      console.log(this.toDoLists);
    },
    doThis: function(e) {
      //console.log("BOX1");
      //e.preventDefault();
    },
    stop: function(e) {
      e.stopPropagation();
      console.log("A");
      e.preventDefault();
    },
    bottonFocus: function(e) {
      console.log("bottonFocus", e);
    }
  },
  watch: {
    loginType: function(now) {
      if (!now) {
        //this.nums=[1,1,1,1,1,1,1,1]
      }
    },
    username: function(now) {
      console.log("usernameChanged:ReceivedUsernameDATA----dif");
    },
    $route(to, from) {
      console.log("对路由变化作出响应...from:" + from + "to:" + String(to)); // 对路由变化作出响应...
    }
  }
};
// export default {
//   data () {
//     return {
//       title: '这里是第一个页面'
//     }
//   }
// }
// Vue.component('app-render', {
//   render: function (createElement) {
//     return createElement(
//       'h' + this.level,{
//         style: {
//             color: 'red',
//             fontSize: '28px'
//         }
//       },  // tag name 标签名称
//       this.$slots.default)
//   },
//   props: {
//     level: {
//       type: Number,
//       required: true
//     }
//   }
// })

Vue.component("todo-item", {
  template:
    "\
    <li>\
      {{ title }}\
      <button v-on:click=\"$emit('remove')\">X</button>\
    </li>\
  ",
  props: ["title"]
});
</script>
<style lang="scss" scoped>
$bgc: red;
.icon-fanhui {
  color: $bgc;
}
.box1 {
  height: 200px;
  width: 600px;
  margin: 0 auto;
  background: black;
}
.box1 a {
  display: block;
  height: 50%;
  width: 50%;
  background: red;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
.usernameFade-enter-active,
.usernameFade-leave-active {
  transition: all 0.5s;
}
.usernameFade-enter,
.usernameFade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-num-move {
  transition: transform 1s;
}
/*.list-num-enter, .list-num-leave-to{
    opacity: 0;
    transform: translateY(30px);
}
.list-num-enter-active, .list-num-leave-active{
  transition: all 1s;
}
.list-num-leave-active{
    position:absolute;  
}*/
</style> 