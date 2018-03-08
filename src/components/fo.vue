<template>
    <div>
        <div class="fo">
    <pre>                              _oo8oo_</pre>
    <pre>                             o8888888o</pre>
    <pre>                             88" . "88</pre>
    <pre>                             (| -_- |)</pre>
    <pre>                             0\  =  /0</pre>
    <pre>                           ___/'==='\___</pre>
    <pre>                         .' \\|     |// '.</pre>
    <pre>                        / \\|||  :  |||// \</pre>
    <pre>                       / _||||| -:- |||||_ \</pre>
    <pre>                      |   | \\\  -  /// |   |</pre>
    <pre>                      | \_|  ''\---/''  |_/ |</pre>
    <pre>                      \  .-\__  '-'  __/-.  /</pre>
    <pre>                    ___'. .'  /--.--\  '. .'___</pre>
    <pre>                 ."" '<  '.___\_\<|>_/___.'  >' "".</pre>
    <pre>                | | :  `- \`.:`\ _ /`:.`/ -`  : | |</pre>
    <pre>                \  \ `-.   \_ __\ /__ _/   .-` /  /</pre>
    <pre>            =====`-.____`.___ \_____/ ___.`____.-`=====</pre>
    <pre>                        佛祖保佑  永无BUG</pre> 
    <pre>                        佛曰:</pre> 
    <pre>                        写字楼里写字间，写字间里程序员</pre>
    <pre>                        程序人员写程序，又拿程序换酒钱</pre>
    <pre>                        酒醒只在网上坐，酒醉还来网下眠</pre>
    <pre>                        但愿老死电脑间，不愿鞠躬老板前</pre>
    <pre>                        奔驰宝马贵者趣，公交自行程序员</pre>
    <pre>                        别人笑我忒疯癫，我笑自己命太贱</pre>
    <pre>                        不见满街漂亮妹，哪个归得程序员？</pre>

        </div>
    </div>
</template>

<script>
import $ from "jQuery";
export default {
  mounted() {
    console.log("mounted");
    // setTimeout(() => {
    //   $(".fo").addClass("fo-transiton");
    // }, 1000);
    // setTimeout(() => {
    //   $("p").addClass("p1");
    // }, 3000);
    console.log($("pre"));
    for (let index = 0; index < $("pre").length; index++) {
      this.show($("pre")[index], index);
    }
    // for (let index = 0; index < $("p").length; index++) {
    //   this.show($("p")[index], index);
    // }
    // setInterval(() => {}, 1000);
    //                              _oo8oo_
    //                             o8888888o
    //                             88" . "88
    //                             (| -_- |)
    //                             0\  =  /0
    //                           ___/'==='\___
    //                         .' \\|     |// '.
    //                        / \\|||  :  |||// \
    //                       / _||||| -:- |||||_ \
    //                      |   | \\\  -  /// |   |
    //                      | \_|  ''\---/''  |_/ |
    //                      \  .-\__  '-'  __/-.  /
    //                    ___'. .'  /--.--\  '. .'___
    //                 ."" '<  '.___\_<|>_/___.'  >' "".
    //                | | :  `- \`.:`\ _ /`:.`/ -`  : | |
    //                \  \ `-.   \_ __\ /__ _/   .-` /  /
    //            =====`-.____`.___ \_____/ ___.`____.-`=====
    //     <p style="left: -50px;position: relative;">佛曰:</p>
    // <p>写字楼里写字间，写字间里程序员</p>
    // <p>程序人员写程序，又拿程序换酒钱</p>
    // <p>酒醒只在网上坐，酒醉还来网下眠</p>
    // <p>但愿老死电脑间，不愿鞠躬老板前</p>
    // <p>奔驰宝马贵者趣，公交自行程序员</p>
    // <p>别人笑我忒疯癫，我笑自己命太贱</p>
    // <p>不见满街漂亮妹，哪个归得程序员？</p>
    console.log("                                 _oo8oo_");
    console.log("                                o8888888o");
    console.log('                                88" . "88');
    console.log("                                (| -_- |)");
    console.log("                                0  =  /0");
    console.log("                              ___/'==='___");
    console.log("                            .' \\|     |// '.");
    console.log("                           / \\|||  :  |||// \\");
    console.log("                          / _||||| -:- |||||_ \\");
    console.log("                         |   | \\  -  /// |   |");
    console.log("                         | _|  ''---/''  |_/ |");
    console.log("                           .-__  '-'  __/-.  /");
    console.log("                       ___'. .'  /--.--  '. .'_");
    console.log("                    .\"\" '<  '.____<|>_/___.'  >' \"\".");
    console.log("                   | | :  `- `.:` _ /`:.`/ -`  : | |");
    console.log("                      `-.   _ __ /__ _/   .-` /  /");
    console.log("		       =====`-.____`.___ _____/ ___.`____.-`=====");
    console.log("                           佛祖保佑  永无BUG");
    console.log("                           佛曰:");
    console.log("                           写字楼里写字间，写字间里程序员");
    console.log("                           程序人员写程序，又拿程序换酒钱");
    console.log("                           酒醒只在网上坐，酒醉还来网下眠");
    console.log("                           但愿老死电脑间，不愿鞠躬老板前");
    console.log("                           奔驰宝马贵者趣，公交自行程序员");
    console.log("                           别人笑我忒疯癫，我笑自己命太贱");
    console.log("                           不见满街漂亮妹，哪个归得程序员？");
  },
  methods: {
    show(item, index) {
      setTimeout(() => {
        $(item).addClass("show");
        console.log(item);
      }, 100 * index);
    }
  }
};
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
.bbo {
  white-space: pre;
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #ffffff;
  border: 0;
  border-radius: 4px;
  padding: 0;
  margin: 0;
}
.say-1 {
  height: 300px;
}
/* p {
  transform: translateX(-1000px);
  transition: transform 2s;
}
.p1 {
  transform: translateX(0px);
} */
p {
  padding-left: 150px;
}
.fo {
  margin-left: 10%;
  padding-top: 10%;
}
.fo-transiton {
  height: 100%;
  display: none;
}
.show {
  display: block;
}
pre {
  display: none;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #ffffff;
  border: 0;
  border-radius: 4px;
  padding: 0;
  margin: 0;
}
</style>