<template>
    <div class="continer">
            <div class="row" v-if="product!=undefined">
                <div class="product col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-xs-12 col-md-8 col-sm-8 ">
                    <div class="row">
                        <div class="img-responsive gallery col-md-2 col-sm-2 col-xs-2">
                            <img :src="product.activeStyleUrl" alt="" class="img-mask" xq_big="true" setting='{"pwidth":400,"scale":2,"pheight":400,"margin_top":60,"margin_left":-20}'/>
                            <Icon type="search" class="search"></Icon>
                        </div>
                         <div class="detail col-md-6 col-sm-6 col-xs-8">
                            <h3 class="name"><span>{{product.name}}</span></h3>
                            <br>
                            <div class="options">
                            <dl class="dl-horizontal">
                                <dt>描述：</dt>
                                <dd><span>{{product.desc}}</span></dd>
                            </dl>
                            <dl class="dl-horizontal">
                                <dt style="line-height: 30px;">价格：</dt>
                                <dd><span>￥</span><span class="price">{{product.price.toFixed(2)}}</span></dd>
                            </dl>
                            <dl class="dl-horizontal">
                                <dt>外观：</dt>
                                <dd>
                                    <ul class="style">
                                    <li v-for="style in product.style" :key='style.color' 
                                        @click="changeStyle(product.id,style.url,$event)"
                                        :class="{active: product.activeStyleUrl == style.url}"><span>{{style.color}}</span></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="dl-horizontal">
                                <dt>容量：</dt>
                                <dd>
                                    <ul class="storage">
                                    <li v-for="(price,key) in product.storage" :key='key'
                                        @click="changePrice(product.id,price)"
                                        :class="{active: product.price == price}"><span>{{key}}</span></li>
                                    </ul>
                                </dd>
                            </dl>
                            <Button type="error" style="width: 250px;" @click="addCart()"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</Button>
                         </div>
                         </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import $ from 'jQuery'
import MA from '../common/magnifying.js'
export default {
    data() {
        return {
            currnetStyle: {
                color: null,
                stage: null,
            },
        }
    },
    computed: {
        product() {
            // console.log();
            let id = this.$router.history.current.params.id;
            // console.log(Number(id));
            return this.$store.getters.productById(Number(id));
        },
    },
    beforeCreate() {
        this.$store.dispatch('getAllProducts');
    },
    created() {
        // console.log(MA);
        // this.product = this.$store.getters.productById(1);
    },
    mounted() {
        // console.log(this.product);
        // console.log(MA.XQ_bigimg);
        setTimeout(() => {
            MA.XQ_bigimg.init($("img[xq_big='true']"));
        }, 500);

    },
    methods: {
        changeStyle(id, url, event) {
            let payload = {
                id: id,
                url: url
            };

            // this.$set(this.currnetStyle,'color',color);
            let color = $('.style').children('.active')[0].innerText;
            this.currnetStyle.color = color;
            this.$store.commit('setProductActiveUrl', payload)
        },
        changePrice(id, price) {
            let payload = {
                id: id,
                price: price
            };
            let storage = $('.storage').children('.active')[0].innerText;
            this.currnetStyle.storage = storage;
            this.$store.commit('setProductPrice', payload);
        },
        addCart() {
            let color = $('.style').children('.active')[0].innerText;
            let storage = $('.storage').children('.active')[0].innerText;
            let payload = {
                id: this.product.id,
                color: color,
                storage: storage
            }
            let style = this.$store.getters.productByStyle(payload);
            style.imgUrl = this.product.activeStyleUrl;
            // this.currnetStyle = this.$store.getters.productPriceById(payload);
            let item = {
                id: this.product.id,
                name: this.product.name,
                style: style
            }
            console.log(item);
            this.$store.dispatch('addProductToCart', item);
            // router.push('cart')
            this.$router.push('/cart')
        }

    },
}
</script>

<style scoped lang="scss">
.continer {
  position: relative;
  padding-top: 5%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  .img-responsive {
    width: 450px;
    height: 450px;
    margin-left: -10%;
    .search {
      position: absolute;
      bottom: -15px;
      right: 10%;
      font-size: 30px;
      /* color: #eee; */
      background-color: #afafaf;
      color: #ffffffff;
      line-height: 30px;
      width: 30px;
      height: 30px;
      text-align: center;
    }
  }
  .dl-horizontal {
    .price {
      color: #e4393c;
      font-family: "microsoft yahei";
      font-size: 22px;
    }
  }
  .dl-horizontal dd {
    margin-left: 50px;
  }
  .dl-horizontal dt {
    width: unset;
  }
  .dl-horizontal li {
    float: left;
    margin-right: 4px;
    padding: 0 13px;
    border: 1px solid #ccc;
    line-height: 32px;
    cursor: pointer;
    line-height: 30px;
    margin-bottom: 4px;
  }
  .dl-horizontal ul .active {
    border: 1px solid #e4393c;
  }
  .dl-horizontal li:hover {
    border: 1px solid #e4393c;
  }
}
</style>