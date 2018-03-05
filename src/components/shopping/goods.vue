<template>
<div class="goods-list">
    <Row>
        <div v-for="good in goods" :key="good.id">
            <Col :sm={span:8} :md={span:8}>
                <div class="good-item">
                            <!-- <Col :class="g-img" :sm={span:6} :md={span:6}> -->
                            <div class="g-img">
                                <img :src="good.activeStyleUrl">
                            </div>
                             <!-- </Col> -->
                            <div class="g-scroll">
                                    <ul class="style" >
                                    <li v-for="style in good.style" :class="{active: good.activeStyleUrl == style.url}" :key="style.color" @mouseover.self="changeStyle(style.url,$event)">
                                        <img :src="style.url" alt="">
                                    </li>
                                    </ul>
                            </div>
                            <div class="g-price"></div>
                            <div class="g-name"></div>
                </div>
            </Col>
            <Col :sm={span:8,offset:8} :md={span:8,offset:8}>col-8</Col>
        </div>
    </Row>
</div>
</template>

<script>
import shops from '../../store/shops'
import $ from 'jQuery'
export default {
    computed: {
        goods() {
            return shops.getAllProducts()
        }
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        changeStyle(url, event) {
            // event.stopPropagation();
            // console.log(event.target);
            $(".g-img").children()[0].src = url;
            $(event.target).siblings().find('active').removeClass("active")
            let parent = $(event.target).parent();
            $(parent[0]).find('.active').removeClass("active");
            $(event.target).addClass("active");
            // $(event).attr('src', url);
            // let payload = {
            //     id: id,
            //     url: url
            // };
            // this.$set(this.currnetStyle,'color',color);
            // this.$store.commit('setProductActiveUrl', payload)
        }
    }
}
</script>

<style scoped lang="scss">
.goods-list {
  margin-bottom: 20px;
  padding-top: 50px;
  height: auto;
  padding-left: 50px;
  position: relative;
  z-index: 1;
  .good-item {
    height: 466px;
    padding: 12px 9px;
    .g-img {
      margin-bottom: 5px;
      img {
        width: 220px;
        // height: 220px;
        position: relative;
      }
    }
    .g-scroll {
      position: relative;
      z-index: 2;
      padding: 0;
      margin-bottom: 10px;
      height: 29px;
      li {
        float: left;
        margin-right: 4px;
        padding-bottom: 2px;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-bottom: 4px;
        img {
          width: 25px;
          height: 25px;
        }
      }
      ul .active {
        border: 1px solid #e4393c !important;
      }
      li:hover {
        border: 1px solid #e4393c;
      }
    }
  }
}
</style>