<template>
    <div>
    <Button span="8" class="LightPrimary" @click="doThis">change</Button>
        <div class="out">
            <transition-group name="items-list" tag="ul">
                <li v-for="item in items" :key="item.id" class="items-list">
                    <div v-if="item.id == 999" :id="'item'+item.id" :ref="'item'+item.id" class="continer" style="opacity:0"></div>
                    <div v-else :id="'item'+item.id" :ref="'item'+item.id" class="continer" v-on="{mousedown:itemClickDown,mouseup:itemClickUp}"></div>
                </li>
            </transition-group>
        </div>
        <div class="myDiv" id="myDiv">Click here You will see default contextmenu</div>
        <ul id="myMenu">
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
        </ul>
        <p @click="changeAge">{{storeName | capitalize}},{{storeAge}}</p>
        <p @click="changeAge">{{storeNameAlisa}},Old Age:{{getOldAge}}</p>
    </div>
</template>
<script>
import $ from "jquery";
import _ from "lodash";
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
console.log("hhhhhhhh");
var EventUtil = {
    /**
     * 兼容性的添加事件
     * @Author   cjxie
     * @DateTime 2018-01-17
     * @param    {Element}   element 元素类型
     * @param    {String}   type    事件名称
     * @param    {响应函数}   handler 响应函数
     */
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            //DOM2
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            //IE
            element.attachEvent("on" + type, handler);
            alert("IE");
        } else {
            //DOM0
            element["on" + type] = handler;
            console.warn(type + "是DOM0事件");
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            //DOM2
            element.removeEventListener(type, handler, false);
        } else if (element.datachEvent) {
            //IE
            element.datachEvent("on" + type, handler);
            alert("IE");
        } else {
            //DOM0
            element["on" + type] = null;
            alert("DOM0");
        }
    }
};
function drag(e) {
    console.log("draging");
    let width = $("#in").width();
    let height = $("#in").height();
    let maxWidth = $(document).width() - width;
    let maxHeight = $(document).height() - height;
    let x = e.clientX - width / 2 > maxWidth ? maxWidth : e.clientX - width / 2;
    let y =
        e.clientY - height / 2 > maxHeight ? maxHeight : e.clientY - height / 2;
    console.log(x, y);
    $("#in").css({
        opacity: "0.8",
        "z-index": 999
    });
    $("#in").css({
        left: x >= 0 ? x : 0,
        top: y >= 0 ? y : 0
    });
}
function addMove() {
    let inner = document.getElementById("in");
    console.log("addMove");
    // inner.style.cursor = 'move';
    EventUtil.addHandler(inner, "mousemove", drag);
}
function reMove() {
    console.log("reMove");
    // $("#in").css({
    //     "opacity": "1",
    //     "z-index": 0
    // });
    EventUtil.removeHandler(window, "mousemove", drag);
    EventUtil.removeHandler(window, "mouseup", drag);
}
export default {
    data() {
        return {
            // items: [0,1,2,3,4,5,6,7,8,9],
            items: [
                {
                    id: 0
                },
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                },
                {
                    id: 6
                },
                {
                    id: 7
                },
                {
                    id: 8
                },
                {
                    id: 9
                }
            ],
            currentElemnt: "",
            currentId: Number,
            changeIndex: Number,
            currentIndex: Number,
            currentItem: "",
        };
    },
    computed: {
        localComputed() {
        },
        ...mapState({
            // 映射 this.count 为 store.state.count
            storeName: state => state.storeName,
            storeAge: 'storeAge',
            storeNameAlisa(state) {
                return state.storeName + 'sdasdas';
            }
        }),
        ...mapGetters({
            getOldAge: 'getAge'
        })
    },
    created() {
        var messages = [
            "喵！",
            "我是一只会说话的猫！",
            "回调（callback）非常有趣!"
        ];
        let obj = {
            id: 102110021,
            name: "cjxie",
            age: 24
        };
        let arr = [1, 2, 5, 10, 15, 2];
        let obj1;
        // console.time('start');
        // console.log(arr.sort(compare));
        // console.timeEnd('end');
        String.prototype.name = 'cjxie';
        let str = new String('some i dont know!');
        function myObj(name, age) {
            this.name = name;
            this.age = age;
            this.way = function (way) {
                console.log(this.name + ' use this way:' + way);
            }
        }
        let my = new myObj('cjxie', 24);
        console.log(my);
        let n = 1e+200;
        let text = 'cat,bat,sat,fat';
        let pattern = /(.at)/g;
        let matches = text.match(pattern);
        // console.log(text.replace(pattern, 'xxx$1'));
        console.log(Math.max.apply(this, arr));
        // let matches1 = pattern.exec(text);
        // let matches = pattern.exec(text);
        console.log(text.split(','));
        // console.log(matches, matches[0], matches instanceof Array);

        // let str = 'some i dont know';
        str.color = 'red';
        // console.log(str.color, str.valueOf());
        let a = 0;
        function compare(a, b) {
            if (a > b) {
                console.log(a, b, 1);
                return 1;
            }
            else {
                console.log(a, b, 0);
                return 0;
            }
        }
        // for (const o in obj) {
        //   //console.log(o);
        //   if (obj.hasOwnProperty(o)) {
        //     const element = obj[o];
        //     console.log(o, element);
        //   }
        // }
        // let obj1 = {
        //   id: 10001010,
        //   name: "cjxie",
        //   age: 29,
        //   arry: [1, 2, 3, 4]
        // };
        // let obj2 = obj1;
        // obj2.name = "oooooo";
        // obj2.arry.push(100);
        let ar = [1, 2, [10, 11], 4];
        let ar1 = [];
        ar1 = $.extend(false, [], ar);
        //ar1 = $.extend(false, ar);
        // let ar1 = [...ar];
        ar[0] = 100;
        ar[2].push(999);
        // console.log(ar, ar1);
        // function fuc(x, y, q, w) {
        //     console.log(x + y + q + w);
        // }
        // fuc(...ar);
        // console.log(obj1, obj2);
        // console.log(object);
        //console.log(parseInt(a / 3), ~a, b);
        /*     messages.forEach(function(value, index) {
          console.log(value, index);
        }); */
        // for (let i = 0; i < messages.length; i++) {
        //     setTimeout(function() {
        //         // cat.say(messages[i]);
        //         console.log(messages[i],i);
        //     }, i * 1500);
        // }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        }
    },
    mounted() {
        // let div = document.getElementById("myDiv");
        let div = $(".myDiv");
        div.contextmenu(function (e) {
            console.warn("contextmenu");
            e.preventDefault();
            var menu = $("#myMenu");
            console.warn(menu);
            menu.css({
                left: e.clientX + "px",
                top: e.clientY + "px"
            });
        });
        // div.addEventListener("click",function(e){
        //     console.warn("contextmenu");
        // })
        // EventUtil.addHandler(div,"contextmenu",function(e){
        //     console.warn("contextmenu");
        //     e.preventDefault();
        //     var menu=$("#myMenu");
        //     console.warn(menu);
        //     menu.css({
        //         left:e.clientX+"px",
        //         top:e.clientY+"px",
        //         visibility:"visible"
        //     })
        // })
        EventUtil.addHandler(document, "click", function (e) {
            $("#myMenu").css({
                visibility: "hidden"
            });
        });
        // console.log(this.items);
        // this.pageWidth=$(document).width();
        // this.pageHeight=$(document).height();
        // this.items.forEach((item, index) => {
        //     console.log(this.$refs['item'+item.id][0].offsetLeft,this.$refs['item'+item.id][0].offsetTop)
        // });
        this.learnJS();
    },
    methods: {
        changeAge() {
            console.log('changeAge');
            // this.$store.commit('increment', { increment: 10 });
            this.$store.dispatch('incrementAsync', {
                amount: 10
            })
        },
        // ...mapMutations(['incrementBy']),
        // ...mapMutations({
        //     changeAge: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        // }),
        learnJS() {
            // let q = { a: 1212, ...mapState(['storeName', 'storeAge']) };
            console.log(this.$store.getters.getAge);
            class Animal {
                constructor() {
                    this.type = "animal"
                }
                says(say) {
                    console.log(this.type + ' says ' + say)
                }
            }
            let animal = new Animal()
            animal.says('hello') //animal says hello
            class Cat extends Animal {
                constructor() {
                    super()
                    this.type = 'cat'
                }
            }

            let cat = new Cat()
            cat.says('hello') //c
            let a = { x: 1, y: 2 };
            let b = { z: 3 };
            let c = b;
            b = { ...a, ...b };
            b.z = 100;
            console.log(b, c);

        },
        doThis() {
            this.items = _.shuffle(this.items);
            // console.log("changeing....",this.items);
            // let a = Math.floor(Math.random()*this.items.length);
            // let b = Math.floor(Math.random()*this.items.length);
            // console.log(this.items[a],this.items[b]);
            // let temp = this.items[a];
            // this.items.splice(a,1);
            // this.items.splice(b,0,temp);
            // console.log(this.items[a],this.items[b]);
        },
        itemClickDown(e) {
            let id = 2;
            // console.log('itemClickDown',this.$refs['item'+id][0].offsetLeft);
            let el = $(e.target)[0].id;
            this.currentElemnt = e.target;
            console.log(this.currentElemnt);
            //console.log(e.target);
            this.currentIndex = $(".continer").index($(e.target));
            this.currentItem = this.items[this.currentIndex];
            //this.items = this.items.splice(this.currentIndex,1)
            console.log("click", this.items);
            //console.log('currentElemnt',e.target);
            //this.items.splice(this.currentIndex,1);
            EventUtil.addHandler(window, "mousemove", this.drag);
            // console.log($(e.target));
            // console.log($('ul').index($($(e.target)[0])));
            //console.log($(e.target)[0],$($(e.target)[0]).index());

            // this.currentId = Number($(e.target)[0].id);
            // // console.log(this.currentId);
            // this.currentElemnt = e.target;
            // //
            // this.items.forEach((item,index)=>{
            //     if(item.id == this.currentId){
            //         this.items.splice(index,1);
            //         console.log(this.items);
            //     }
            // });
        },
        drag(e) {
            // this.currentElemnt= e.target;
            // this.currentIndex = $('.continer').index($(e.target));
            // this.currentItem = this.items[this.currentIndex];
            console.log("draging");
            let width = $(this.currentElemnt).width();
            let height = $(this.currentElemnt).height();
            let maxWidth = $(document).width() - width;
            let maxHeight = $(document).height() - height;
            let x =
                e.clientX - width / 2 > maxWidth ? maxWidth : e.clientX - width / 2;
            let y =
                e.clientY - height / 2 > maxHeight ? maxHeight : e.clientY - height / 2;
            $(this.currentElemnt).css({
                opacity: "0.5",
                "z-index": 999,
                position: "absolute"
            });
            $(this.currentElemnt).css({
                left: x >= 0 ? x : 0,
                top: y >= 0 ? y : 0
            });
            let a = Math.floor(e.clientX / 120);
            let b = Math.floor(e.clientY / 120);
            var nowX = Math.floor(e.clientX / 120) * 120 + 10;
            var nowY = Math.floor(e.clientY / 120) * 120 + 10;
            // this.pageWidth=$(
            //console.log(Math.floor(nowX/120)*120+10,Math.floor(nowY/120)*120+10);
            this.items.forEach((item, index) => {
                let element = this.$refs["item" + item.id][0];
                let offsetLeft = element.offsetLeft;
                let offsetTop = element.offsetTop;
                //console.log(offsetLeft,offsetTop);
                //console.log(this.currentElemnt,element);
                if (nowX == offsetLeft && nowY == offsetTop) {
                    //console.log(this.currentItem);
                    //this.items.splice(index,1);
                    // $(this.currentElemnt).css({
                    //     left: nowX,
                    //     top: nowY
                    // });
                    console.log(this.currentElemnt);
                    // $(this.currentElemnt).css({
                    //     "opacity": "0",
                    // });
                    console.log(index);
                    // this.items.splice(this.currentIndex,1);
                    // this.items.splice(index,0,this.currentItem);
                    console.log(this.currentElemnt);
                    //$(this.currentElemnt).attr('style',null);
                    return true;
                    //},500)
                    // this.$set(this.items[index -1],'id',999);
                    // $(this.currentElemnt).css({
                    //     "opacity": "0",
                    //     "z-index": 999,
                    // });
                    //console.log($('.continer').index($(element)));
                    // this.items.splice(this.currentIndex,1);
                    // this.changeIndex = $('.continer').index($(element));
                    //console.log(this.changeIndex);
                    //this.items.splice(index,1);
                    //this.changeIndex = item.id;
                    //console.log("hhh:"+item);
                    //return false;
                }
            });
        },
        itemClickUp() {
            console.log("itemClickUp");
            EventUtil.removeHandler(window, "mousemove", this.drag);
            $(this.currentElemnt).attr("style", null);
            // $(this.currentElemnt).css({
            //     "opacity": "0.7",
            //     "z-index": 1,
            //     "left":0,
            //     "top":0,
            // });
            //console.log(this.currentElemnt);
            // $(this.currentElemnt).css({
            //     "opacity": "0.7",
            //     "z-index": 0
            // });
        }
    },
    watch: {
        changeIndex: function () {
            console.log("changeIndex:", this.changeIndex, this.currentItem);
            this.items.splice(this.changeIndex, 0, this.currentItem);
            EventUtil.removeHandler(window, "mousemove", this.drag);
            $(this.currentElemnt).attr("style", null);
            //let temp = new Array();
            // this.items.splice(this.currentId,1);
            // this.items.splice(this.changeIndex,0,this.currentId);
            // this.items.forEach((item,index)=>{
            //     if(item == this.currentId){
            //         this.items.splice(item,1);
            //     }
            //     // if(item==this.currentId){
            //     //     temp.push(this.changeIndex);
            //     // }else if(item ==this.changeIndex){
            //     //     temp.push(this.currentId);
            //     // }else{
            //     //     temp.push(item);
            //     // }
            // });
            //console.log(temp);
        }
    }
};
</script>

<style lang="scss" scoped>
$num: 200px;
#myMenu {
  position: absolute;
  visibility: hidden;
}
.continer {
  width: 100px;
  height: 100px;
  background-color: rgb(93, 173, 253);
  opacity: 0.7;
  /*position: absolute;*/
  display: inline-block;
  border-radius: 10px;
  /*transition: all 1s;*/
}
.out {
  position: relative;
  height: 500px;
  ul li {
    width: 100px;
    height: 100px;
    float: left;
    margin: 10px;
  }
  .items-list {
    transition: all 1s;
  }
  .items-list-leave-active {
    position: absolute;
  }
}

/*.items-list-move{
    transition: transform 1s;
}*/
/*.items-list-enter, .items-list-leave-to{
    opacity: 0;
    transform: translateY(30px);
}*/
/*.items-list-enter-active, .items-list-leave-active{
  transition: all 1s;
}*/

/*.out {
  width:740px;
  height:460px;
  margin:0 auto;
}*/
</style>
