<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
            <Spin fix id="loading">
                <Icon type="load-c" size=38 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
            <div class="menu col-md-2 col-sm-2 col-xs-2" >
            <app-menu></app-menu>
            </div>
            <div class="main">
                  <router-view
                    keep-alive
                    transition
                    transition-mode="out-in">
                </router-view>
            </div>
 
  </div>
</template>

<script>
import menu from './components/menu.vue'
console.log('appVueLoading.........');
window.onload = function () {
    document.getElementById('loading').style = "display:none";
    console.log('appVueLoaded!');
}
export default {
    data() {
        return {
            nums: [1, 8, 2, 5, 3, 4, 7, 9, 6]
        }
    },
    mounted() {
    },
    components: {
        'app-menu': menu
    }
}
window.onhashchange = function (event) {
    console.log(event.oldURL, event.newURL);
    let hash = location.hash.slice(1);
    document.body.style.color = hash;
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  z-index: 999;
  padding: 0;
  transition: 0.5s;
  //   width: 10%;
}
.main {
  position: relative;
  //   margin-left:
  top: 0;
  left: 10%;
  width: 100%;
}
.menu-close {
  width: 5%;
  padding: 0;
}
</style>

