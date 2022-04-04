<template>
  <div>
    <h1>메인 페이지</h1>
    <p>메인 페이지입니다.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "mainPage",
  async created() {
    const response = await axios.get('https://localhost:3000/products');
    console.log(response);

  }
}
</script>

<style scoped>

</style>
