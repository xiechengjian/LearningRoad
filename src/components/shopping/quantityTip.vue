<template>
    <div class="p-quantity">
        <div class="quantity-form">
                    <button class="q-btn dec" ref="dec" @click="dec">-</button>
                    <input type="text" v-model.number="quantity"  class="itxt">
                    <button class="q-btn" @click="inc">+</button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import $ from "jQuery";
export default {
  props: ["product"],
  // computed: {
  //     quantity: function () {
  //         return this.product.quantity
  //     }
  // },
  data() {
    return {
      quantity: null,
      item: null
    };
  },
  created() {
    this.quantity = this.product.quantity;
    this.item = this.product.item;
    // console.log(this.product);
  },
  mounted() {
    if (this.quantity == 1) {
      // $(".dec")[0].disabled = true;
      // console.log(this.$refs);
      this.$refs.dec.disabled = true;
      this.$refs.dec.style.color = "#e9e9e9";
    }
  },
  methods: {
    dec() {
      // console.log(object);
      this.quantity--;
      if (this.quantity == 1) {
        this.$refs.dec.disabled = true;
        this.$refs.dec.style.color = "#e9e9e9";
      }
      // this.$store.dispatch('setCartProductsQuantity', payload);
    },
    //增加数量
    inc() {
      this.quantity++;
      if (this.quantity > 1) {
        this.$refs.dec.disabled = false;
        this.$refs.dec.style.color = "";
      }
      // this.$store.dispatch('setCartProductsQuantity', payload);
      // console.log(object);
    }
  },
  watch: {
    quantity: function(val, old) {
      if (old == null) return;
      if (val == 1) {
        console.log($(".dec"));
        $(".dec").addClass("q-disbtn");
      } else {
        $(".dec").removeClass("q-disbtn");
      }
      let payload = {
        item: {
          id: this.item.id,
          style: this.item.style
        },
        quantity: val
      };
      this.$store.dispatch("setCartProductsQuantity", payload);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  white-space: nowrap;
}
.itxt {
  border: 1px solid #cacbcb;
  width: 42px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  padding: 1px;
  margin: 0;
  font-size: 12px;
  font-family: verdana;
  color: #333;
  -webkit-appearance: none;
  float: left;
}
.quantity-form {
  position: relative;
  width: 80px;
  height: 18px;
  margin: 0 auto;
}
.q-btn {
  height: 18px;
  width: 16px;
  line-height: 18px;
  padding: 1px 0;
  background: #fff;
  display: inline-block;
  text-align: center;
  border: 1px solid #cacbcb;
  float: left;
  /* cursor: pointer; */
}
.q-disbtn {
  cursor: default;
  color: #e9e9e9;
}
</style>
