<template>
    <div class="continer">
            <div class="row" v-if="product!=undefined">
                <div class="product col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
                    <div class="row">
                        <div class="gallery col-md-4 col-sm-4">
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
                                <dt>价格：</dt>
                                <dd><span>￥{{product.price}}</span></dd>
                            </dl>
                            <dl class="dl-horizontal">
                                <dt>外观：</dt>
                                <dd>
                                    <ul>
                                    <li v-for="style in product.style" :key='style.color'
                                        @click="changeStyle(product.id,style.url)"
                                        :class="{active: product.activeStyleUrl == style.url}"><span>{{style.color}}</span></li>
                                    </ul>
                                </dd>
                            </dl>
                         </div>
                         </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        product() {
            return this.$store.getters.productById(1);
        }
        // ...mapGetters(
        //     // { product: 'productsFromId' }
        // )
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
        changeStyle(id, url) {
            let payload = {
                id: id,
                url: url
            };
            this.$store.commit('setProductActiveUrl', payload)
        },

    }
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
  .dl-horizontal dd {
    margin-left: 50px;
  }
  .dl-horizontal dt {
    width: unset;
  }
}
</style>