<template>
<div class="goods-item">
    <div class="p-img">
        <img :src="data.style.imgUrl">
        <!-- <router-link :to="shopping"> -->
    </div>
	<span>{{data.name}} {{data.style.storage}} {{data.style.color}}</span>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
span {
  //   white-space: nowrap;
  display: block;
  white-space: pre-wrap;
  text-align: center;
  line-height: 40px;
}
.p-img {
  float: left;
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
  margin-right: 10px;
  background: #fff;
  padding: 0;
  text-align: center;
  overflow: hidden;
  img {
    width: 60px;
    height: 70px;
  }
}
</style>
