<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
            <Spin fix id="loading">
                <Icon type="load-c" size=38 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
   <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
console.log('appVueLoading.........');
window.onload=function(){
  document.getElementById('loading').style="display:none";
  console.log('appVueLoaded!');
}
export default {
  data(){
    return {
      nums:[1,8,2,5,3,4,7,9,6]
    }
  },
  mounted() {
  },
  components: {}
}
window.onhashchange = function(event) {
  console.log(event.oldURL, event.newURL);
  let hash = location.hash.slice(1);
  document.body.style.color = hash;
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}*/
</style>
