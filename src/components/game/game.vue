<template>
    <div>
            <div class="game-warp">
                <iframe src="static/game/index.html"></iframe>
            </div>
    </div>
</template>

<script>
// import template from './index.html'
// console.log(template);
export default {
    // template: template,
    data() {
        return {
            html: "template"
        }
    }
}
</script>

<style scoped>
.game-warp {
  margin-bottom: 5%;
  padding-top: 5%;
  height: auto;
  padding-left: 15%;
  position: relative;
  z-index: 1;
}
</style>