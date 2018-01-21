<template>
    <div>
   <Button span="8" class="LightPrimary" @click="doThis">col-12</Button>
        <div class="out">
            <transition-group name="items-list" tag="ul">
                <li v-for="item in items" :key="item.id" class="items-list"  >
                    <div :id="'item'+item.id" :ref="'item'+item.id" class="continer" v-on="{mousedown:itemClickDown,mouseup:itemClickUp}"></div>
                </li>  
            </transition-group>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import _ from 'lodash';
var EventUtil = {
    /**
     * 兼容性的添加事件
     * @Author   cjxie
     * @DateTime 2018-01-17
     * @param    {Element}   element 元素类型
     * @param    {String}   type    事件名称
     * @param    {响应函数}   handler 响应函数
     */
    addHandler:function(element,type,handler){
        if(element.addEventListener){ 
            //DOM2
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            //IE
            element.attachEvent("on"+type,handler);
            alert("IE");
        }else {
            //DOM0
            element["on"+type] = handler;
            alert("DOM0");
        }
    },
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){ 
            //DOM2
            element.removeEventListener(type,handler,false);
        }else if(element.datachEvent){
            //IE
            element.datachEvent("on"+type,handler);
            alert("IE");
        }else {
            //DOM0
            element["on"+type] = null;
            alert("DOM0");
        }
    }
}
function drag(e) {
    console.log('draging');
    let width = $("#in").width();
    let height = $("#in").height();
    let maxWidth = $(document).width()-width;
    let maxHeight = $(document).height()-height;
    let x = (e.clientX - width / 2) > maxWidth ? maxWidth: e.clientX - width / 2;
    let y = (e.clientY - height / 2) > maxHeight ? maxHeight: e.clientY - height / 2;
    console.log(x,y);
    $("#in").css({
        "opacity": "0.8",
        "z-index": 999
    });
    $("#in").css({
        left: x >= 0 ? x : 0,
        top: y >= 0 ? y : 0
    });
}
function addMove(){
    let inner=document.getElementById('in');
    console.log('addMove');
    // inner.style.cursor = 'move';
    EventUtil.addHandler(inner,"mousemove",drag);
}
function reMove(){
    console.log('reMove');
    // $("#in").css({
    //     "opacity": "1",
    //     "z-index": 0
    // });
    EventUtil.removeHandler(window,"mousemove",drag);
    EventUtil.removeHandler(window,"mouseup",drag);
}
export default {
    data() {
        return {
            // items: [0,1,2,3,4,5,6,7,8,9],
            items:[
            {
                id:0
            },
            {
                id:1
            },
            {
                id:2
            },
            {
                id:3
            },
            {
                id:4
            },
            {
                id:5
            },
            {
                id:6
            },
            {
                id:7
            },
            {
                id: 8
            }, {
                id: 9
            },
            ],
            currentElemnt:"",
            currentId:Number,
            changeIndex:Number,
            currentIndex:Number,
            currentItem:''
        }
    },
    created() {},
    mounted() {
        console.log(this.items);
        this.pageWidth=$(document).width();
        this.pageHeight=$(document).height();
        // console.log();
        // let inner = document.getElementById('in');
        // EventUtil.addHandler(inner, "mousedown", () => {
        //     EventUtil.addHandler(window, "mousemove", drag);
        //     EventUtil.addHandler(window, "mouseup", reMove);
        // })
        this.items.forEach((item, index) => {
            console.log(this.$refs['item'+item.id][0].offsetLeft,this.$refs['item'+item.id][0].offsetTop)
        });
    },
    methods: {
        doThis(){
            this.items = _.shuffle(this.items);
            console.log("changeing....",this.items);
        },
        itemClickDown(e) {
            let id = 2;
            // console.log('itemClickDown',this.$refs['item'+id][0].offsetLeft);
            let el=$(e.target)[0].id;
            this.currentElemnt = e.target;
            console.log(e.clientX,e.clientY);
            //console.log(e.target);
            this.currentIndex = $('.continer').index($(e.target));
            this.currentItem = this.items[this.currentIndex]
            this.items = this.items.splice(this.currentIndex,1)
            console.log('click',this.items);
            console.log('currentElemnt',e.target);
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
            console.log('draging');
            let width = $(this.currentElemnt).width();
            let height = $(this.currentElemnt).height();
            let maxWidth = $(document).width() - width;
            let maxHeight = $(document).height() - height;
            let x = (e.clientX - width / 2) > maxWidth ? maxWidth : e.clientX - width / 2;
            let y = (e.clientY - height / 2) > maxHeight ? maxHeight : e.clientY - height / 2;
            $(this.currentElemnt).css({
                "opacity": "0.5",
                "z-index": 999
            });
            $(this.currentElemnt).css({
                left: x >= 0 ? x : 0,
                top: y >= 0 ? y : 0
            });
            let a=  Math.floor(e.clientX/120);
            let b = Math.floor(e.clientY/120);
            var nowX = Math.floor(e.clientX/120)*120+10;
            var nowY = Math.floor(e.clientY/120)*120+10;
            // this.pageWidth=$(
            //console.log(Math.floor(nowX/120)*120+10,Math.floor(nowY/120)*120+10);
            this.items.forEach((item,index)=>{
                let element = this.$refs['item'+item.id][0];
                let offsetLeft = element.offsetLeft;
                let offsetTop = element.offsetTop;
                //console.log(offsetLeft,offsetTop);
                //console.log(this.currentElemnt,element);
                if(nowX == offsetLeft && nowY == offsetTop){
                    //console.log($('.continer').index($(element)));
                    this.items.splice(this.currentIndex,1);
                    this.changeIndex = $('.continer').index($(element));
                    //console.log(this.changeIndex);
                    //this.items.splice(index,1);
                    //this.changeIndex = item.id;
                    //console.log("hhh:"+item);
                    //return false;
                }
            });
        },
        itemClickUp(){
            console.log('itemClickUp');
            EventUtil.removeHandler(window,"mousemove",this.drag);
            $(this.currentElemnt).attr('style',null);
            // $(this.currentElemnt).css({
            //     "opacity": "0.7",
            //     "z-index": 1,
            //     "left":0,
            //     "top":0,
            // });
            console.log(this.currentElemnt);
            // $(this.currentElemnt).css({
            //     "opacity": "0.7",
            //     "z-index": 0
            // });
        }
    },
    watch:{
        changeIndex:function(){
            console.log("changeIndex:",this.changeIndex,this.currentItem);
            this.items.splice(this.changeIndex,0,this.currentItem);
            EventUtil.removeHandler(window, "mousemove", this.drag);
            $(this.currentElemnt).attr('style',null);
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
}
</script>

<style scoped>
.continer{
    width: 100px;
    height: 100px;
    background-color: rgb(45,140,240);
    opacity: 0.7;
    position: absolute;
    display: inline-block;
    border-radius:10px;
}
.out ul li {
  width:100px;
  height:100px;
  float:left;
  margin:10px
}
.items-list{
    transition: all 1s;
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
.items-list-leave-active{
    position:absolute;  
}
/*.out {
  width:740px;
  height:460px;
  margin:0 auto;
}*/
</style>
