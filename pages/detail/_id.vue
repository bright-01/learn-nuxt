<template>
<div>
  <h1>상세페이지</h1>
  <div>
    <img :src="product.imageUrl" :alt="product.name">
    <p>name : {{ product.name}}</p>
    <span>price : {{ product.price}}</span>
  </div>

</div>
</template>

<script>

import { fetchProductById } from "@/api/index";
export default {
  name: "_id",
  data(){
    return {
      path : ""
    }
  },

  async asyncData({params}){ // context
    const response = await fetchProductById(params.id);
    const product = response.data;
    return { product }
  }

  // created() {
  //   fetchProductById(this.$route.params.id);
  // }
}
</script>

<style scoped>

</style>
