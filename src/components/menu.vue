<template>
<div>
    <Menu :active-name="name" width="auto" :select-on="select(name)" >
        <MenuGroup title="SHOPPING" >
            <MenuItem name="1" >
            <router-link class="item" to="/goods">
            <i class="icon-shop"></i>
                Goods
            </router-link>
            </MenuItem>
            <MenuItem name="2">
            <router-link class="item" to="/shopping">
                 <Icon type="bag"></Icon>
                Shopping
            </router-link>
            </MenuItem>
            <MenuItem name="3">
             <router-link class="item" to="/cart">
            <Icon type="ios-cart-outline"></Icon>
            Shopping Cart
            </router-link>
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="敬请期待">
        </MenuGroup>
    </Menu>
    <br>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "1"
        }
    },
    methods: {
        select(name) {
            console.log(name);
        }
    }
}
</script>

<style scoped>

</style>