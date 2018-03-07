<template>
<div class="goods-list">
                <Spin fix v-if="loading">
                <Icon type="load-c" size="38" class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
    <Row>
        <div v-for="(good,index) in goods" :key="good.id">
            <Col :sm={span:8} :md={span:8} >
                <div class="good-item">
                            <!-- <Col :class="g-img" :sm={span:6} :md={span:6}> -->
                            <div class="g-img">
                                <router-link class="item" :to="'/shopping/'+ good.id" >
                                <img :src="goodInfo[index].activeStyleUrl" :ref="good.id">
                                </router-link>
                            </div>
                             <!-- </Col> -->
                            <div class="g-scroll">
                                    <ul class="style">
                                    <li v-for="style in good.style" :id="index" :class="{active: good.activeStyleUrl == style.url}" :key="style.color" @mouseenter="changeStyle(style.url,$event)">
                                        <img :src="style.url" alt="">
                                    </li>
                                    </ul>
                            </div>
                            <div class="g-price"><span>￥</span>{{good.price.toFixed(2)}}</div>
                            <router-link class="item" :to="'/shopping/'+ good.id">
                            <div class="g-name">{{good.name}}</div>
                            </router-link>
                </div>
            </Col>
            <!-- <Col :sm={span:8,offset:8} :md={span:8,offset:8}>col-8</Col> -->
        </div>
    </Row>
</div>
</template>

<script>
console.time("goods");
import shops from "../../store/shops";
import $ from "jQuery";

export default {
  computed: {
    goods() {
      return shops.getAllProducts();
    }
  },
  data() {
    return {
      goodInfo: [],
      loading: true
    };
  },
  beforeCreate() {
    document.getElementById("loading").style = "display:flex";
  },
  created() {
    for (const item of this.goods) {
      let temp = {
        activeStyleUrl: item.activeStyleUrl,
        activeUrl: null
      };
      this.goodInfo.push(temp);
    }
  },
  mounted() {
    document.getElementById("loading").style = "display:none";
    this.loading = false;
    console.timeEnd("goods");
    // console。
  },
  methods: {
    changeStyle(url, event) {
      // event.stopPropagation();
      let index = event.target.id;
      // console.log(this.$refs[id]);
      //   this.$refs[id][0].src = url;
      console.log(index);
      this.goodInfo[index].activeStyleUrl = url;
      // $($(event.target).parents()[2]).find('img')[0].src = url;
      // $(event.target).siblings().find('.active').removeClass("active")
      let parent = $(event.target).parent();
      // console.log(parent[0].find('.active'));
      $(event.target)
        .siblings(".active")
        .removeClass("active");
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
};
</script>

<style scoped lang="scss">
.goods-list {
  margin-bottom: 5%;
  padding-top: 5%;
  height: auto;
  //   padding-left: 15%;
  position: relative;
  z-index: 1;
  .good-item {
    height: 466px;
    padding: 12px 9px;
    a {
      color: unset;
    }
    a:hover {
      color: red;
    }
    .g-img {
      margin-bottom: 5px;
      img {
        width: 220px;
        height: 220px;
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
      //   li:hover {
      //     border: 1px solid #e4393c;
      //   }
    }
    .g-price {
      width: 100%;
      float: left;
      margin-right: 10px;
      color: #e4393c;
      font-size: 20px;
      span {
        font-size: 16px;
      }
    }
    .g-name {
      height: 40px;
      line-height: 20px;
      margin-top: 8px;
      width: 220px;
      float: left;
    }
  }
}
</style>