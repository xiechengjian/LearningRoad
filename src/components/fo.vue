<template>
    <div class="fo">
        <div class="say">
                   <p>佛祖保佑  永无BUG</p> 
                                    <p style="left: -50px;position: relative;">佛曰:</p> 
                                    <p>写字楼里写字间，写字间里程序员</p>
                                    <p>程序人员写程序，又拿程序换酒钱</p>
                                    <p>酒醒只在网上坐，酒醉还来网下眠</p>
                                    <p>但愿老死电脑间，不愿鞠躬老板前</p>
                                    <p>奔驰宝马贵者趣，公交自行程序员</p>
                                    <p>别人笑我忒疯癫，我笑自己命太贱</p>
                                    <p>不见满街漂亮妹，哪个归得程序员？</p>
                                                                <!-- <p>xxxx  xxxx</p> 
                                    <p style="left: -50px;position: relative;">xx:</p> 
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p>
                                    <p>XXXXXXXXXXX，XXXXXXXXXXX</p> -->

        </div>
    </div>
</template>

<script>
import $ from 'jQuery'
export default {
    mounted() {
        console.log("mounted");
        setTimeout(() => {
            $('.fo').addClass('fo-transiton');
        }, 1000);
        setTimeout(() => {
            $('p').addClass('p1');
        }, 3000);
    }
}
</script>

<style scoped>
.say {
  position: relative;
  top: 30%;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  height: 0;
  transition: height 2s;
  -moz-transition: height 2s; /* Firefox 4 */
  -webkit-transition: height 2s; /* Safari and Chrome */
  -o-transition: height 2s; /* Opera */
}
.say-1 {
  height: 300px;
}
p {
  transform: translateX(-1000px);
  transition: transform 2s;
}
.p1 {
  transform: translateX(0px);
}
.fo {
  position: absolute;
  /*    top: 0;
    left: 0;
    overflow: hidden;*/
  height: 0%;
  width: 100%;
  font-family: "Microsoft Yahei";
  position: absolute;
  background: url("../../static/img/fo.jpg") no-repeat center;
  transition: height 2s;
  -moz-transition: height 2s; /* Firefox 4 */
  -webkit-transition: height 2s; /* Safari and Chrome */
  -o-transition: height 2s; /* Opera */
  -webkit-background-size: cover;
  background-size: cover;
}
.fo-transiton {
  height: 100%;
}
</style>