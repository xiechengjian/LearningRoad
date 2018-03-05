<template>
    <div class="continer">
            <div class="row" v-if="product!=undefined">
                <div class="product col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
                    <div class="row">
                        <div class="gallery col-md-2 col-sm-2">
                            <img :src="product.activeStyleUrl" class="img-responsive" alt="">
                        </div>
                         <div class="detail col-md-6 col-sm-6">
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
            return this.$store.getters.productById(1);
        },
    },
    beforeCreate() {
        this.$store.dispatch('getAllProducts');
    },
    created() {
        // this.product = this.$store.getters.productById(1);
    },
    mounted() {
        // console.log(this.product);
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
  padding-top: 100px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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