<template>
    <div class="continer">
        <div class="cartTable">
            <Table :columns="columns" :rowClassName='rowClassName' ref="selection" :data="items" @on-selection-change="select"></Table>
        </div>
        <div class="cart-toolbar">
            <Button type="error">去结算</Button>
            <div class="price-sum">
                <span class="txt">总价：</span>
                <span>￥{{checkOut.totalPrice.toFixed(2) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jQuery'
import { mapGetters } from 'Vuex'
import productTip from "./productTip.vue";
import quantityTip from "./quantityTip.vue";
import operationTip from "./operationTip.vue";
export default {
    computed: {
        ...mapGetters({
            items: 'cartProducts'
        })
    },
    data() {
        return {
            checkOut: {
                totalPrice: 0,
                items: []
            },
            columns: [
                {
                    type: 'selection',
                    title: '全选',
                    align: 'center',
                    width: 60
                },
                {
                    title: '商品',
                    key: 'name',
                    align: 'center',
                    render: (h, params) => {
                        return h(productTip, {
                            props: {
                                data: params.row.item
                            }
                        });
                    },
                    width: 250,
                    //className: 'demo-table-color'
                },
                {
                    title: '单价',
                    key: 'price',
                    align: 'center',
                    render: (h, params) => {
                        return h('span', ['￥', params.row.item.style.price.toFixed(2)])
                    }
                    //className: 'demo-table-color'
                },
                {
                    title: '数量',
                    key: 'quantity',
                    align: 'center',
                    render: (h, params) => {
                        return h(quantityTip, {
                            props: {
                                product: params.row
                            }
                        });
                    },
                    //className: 'demo-table-color'
                },
                {
                    title: '小计',
                    key: 'subtotal',
                    align: 'center',
                    render: (h, params) => {
                        return h('strong', ['￥', h('span', (params.row.item.style.price * params.row.quantity).toFixed(2))])
                    }
                    //className: 'demo-table-color'
                },
                {
                    title: '操作',
                    key: 'operation',
                    align: 'center',
                    render: (h, params) => {
                        return h(operationTip, {
                            props: {
                                product: params.row,
                                operationList: [{
                                    name: '删除',
                                    event: this.delCartProduct
                                }]
                            }
                        });
                    },
                    //className: 'demo-table-color'
                },
            ]
        }
    },
    mounted() {
    },
    methods: {
        rowClassName(row, index) {
            // console.log(row, index);
            return 'demo-table-color';
        },
        delCartProduct(product) {
            // console.log(product);
            this.$store.dispatch('removeProductFromCart', product);
        },
        select(selection, row) {
            console.log(selection, row);
            let totalPrice = 0;
            for (const item of selection) {
                this.checkOut.items.push(item);
                totalPrice += item.quantity * item.item.style.price;
            }
            this.checkOut.totalPrice = Number(totalPrice.toFixed(2));;
            console.log(this.$refs.selection);
        }
    }

}
</script>

<style scoped lang='scss'>
.continer {
  position: relative;
  padding-top: 100px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  .cart-toolbar {
    position: relative;
    margin-top: 10px;
    .price-sum {
      float: right;
      font-size: 16px;
      color: #e4393c;
      font-weight: 700;
      .txt {
        color: #999;
        font-size: 12px;
      }
    }
    .ivu-btn {
      float: right;
      width: 96px;
      height: 52px;
      //   background-color: red;
      margin-left: 30px;
      font-size: 18px;
      font-family: "Microsoft YaHei";
      //   background-color: #e54346;
      //   color: #fff;
      font-weight: 600;
    }
  }
}

// .ivu-checkbox {
//   &:after {
//     content: "全选";
//   }
// }
// .demotablecolor {
//   background-color: #fff4e8;
// }
</style>