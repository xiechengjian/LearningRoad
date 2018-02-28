<template>
    <div id="container">
    <div class="container">
        <div class="nav">
            <ul>
                <li><a href="#/myworld">Home</a></li>
                <li><a href="#/myworld">Home1</a></li>
                <li><a href="#/myworld">Home2</a></li>
            </ul>
        </div>
         <section><p>section 的 margin-left 样式确保了有足够的空间容纳 nav 元素。11111111111111111111111111111111111111111111111111111111111</p></section>
         <section><p>section 的 margin-left 样式确保了有足够的空间容纳 nav 元素。</p></section>
         <section><p>section 的 margin-left 样式确保了有足够的空间容纳 nav 元素。</p></section>
         <section><p>section 的 margin-left 样式确保了有足够的空间容纳 nav 元素。</p></section>
    </div>
    <div class="fl">
        <ul>
                <li><a href="#/myworld">Home</a></li>
                <li><a href="#/myworld">Home1</a></li>
        </ul>
    </div>
    <p style="clear: right;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
    </div>
</template>

<script>
let url = "ws://localhost:8088/5g/5gApp-connection";
var Scoket = new WebSocket(url);
console.log(Scoket);
// export default {};
</script>

<style scoped>
#container {
  padding: 1em;
  margin: 0 0 1em 0;
  background-color: white;
}
.container {
  position: relative;
  border: solid #6ac5ac 3px;
}
.nav {
  position: absolute;
  left: 0px;
  width: 200px;
  border: solid 2px yellow;
}
.fl {
  float: right;
  width: 100px;
  height: 50px;
  background-color: red;
  border: solid 2px black;
}
section {
  /* position is static by default */
  margin-left: 200px;
  border: solid 2px black;
}
body {
  margin-bottom: 120px;
}
</style>