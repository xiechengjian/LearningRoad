<template>
    <div>
        <ul>
            <li v-for="(opeartion,key) in operationList" :key="key">
                <span v-text="opeartion.name" @click="opeartion.event(product)"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["operationList", "product"],
  mounted() {
    // console.log(this.product);
  }
};
</script>

<style scoped>
span {
  color: #666;
  cursor: pointer;
}
span:hover {
  color: red;
}
</style>