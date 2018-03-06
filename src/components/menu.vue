<template>
<div>
    <Menu :active-name="name" width="auto" :select-on="select(name)" >
        <div @click="menuChange" class="arrow">
            <Icon v-if="!isMenuOpen" type="chevron-right"></Icon>
            <Icon v-else type="chevron-left"></Icon>
            </div>
        <MenuGroup title="SHOPPING" >
            <!-- <MenuItem name="1" >
            <router-link class="item" to="/goods">
            <i class="icon-shop"></i>
                Goods
            </router-link>
            </MenuItem> -->
            <router-link class="item" to="/goods">
                <MenuItem name="2">
                    <Icon type="bag"></Icon>
                    <span class="item-name">Shopping</span>
                </MenuItem>
            </router-link>
            <router-link class="item" to="/cart">
                <MenuItem name="3">
                <Icon type="ios-cart-outline"></Icon>
                    <span class="item-name">Shopping Cart</span>
                    <div class="quantity" v-if="cartProductsQuantity > 0">{{cartProductsQuantity}}</div>
                </MenuItem>
            </router-link>
        </MenuGroup>
        <MenuGroup title="敬请期待">
        </MenuGroup>
    </Menu>
    <br>
</div>
</template>

<script>
import $ from 'jQuery'
import { mapGetters } from 'Vuex'
export default {
    computed: {
        ...mapGetters({
            cartProductsQuantity: 'cartProductsQuantity'
        })
    },
    data() {
        return {
            name: "2",
            isMenuOpen: true
        }
    },
    methods: {
        select(name) {
            // console.log(name);
        },
        menuChange() {
            let isMenuOpen = this.isMenuOpen;
            console.log(isMenuOpen);
            if (isMenuOpen) {
                this.isMenuOpen = false;
                $('.menu').addClass('menu-close');
                // $('.menu .ivu-menu ').addClass('no-padding');
                // $('.menu li').addClass('padding-left');
                $('.ivu-menu-item-group-title').addClass('hide');
                $('.item-name').addClass('hide');
            } else {
                this.isMenuOpen = true;
                $('.menu').removeClass('menu-close');
                $('.ivu-menu-item-group-title').removeClass('hide');
                $('.item-name').removeClass('hide');
            }
        }
    }
}
</script>

<style scoped>
.arrow {
  position: absolute;
  left: 100%;
  top: 50%;
  cursor: pointer;
}
.hide {
  display: none;
}
.ivu-icon .quantity {
  position: absolute;
  top: 15%;
  right: 50%;
  position: absolute;
  z-index: 3;
  right: 2px;
  top: -5px;
  height: 11px;
  padding: 1px 2px;
  /* border: 1px solid #b61d1d; */
  overflow: hidden;
  color: #fff;
  font: 11px/11px verdana;
  text-align: center;
  min-width: 11px;
  _width: 20px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-color: #cc6060;
  background-image: -moz-linear-gradient(top, #cc6060, #b61d1d);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #cc6060),
    color-stop(1, #b61d1d)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#cc6060",
      endColorstr="#b61d1d",
      GradientType="0"
    );
  -ms-filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#cc6060",
      endColorstr="#b61d1d"
    );
  background-image: linear-gradient(to bottom, #cc6060 0, #b61d1d 100%);
}
</style>