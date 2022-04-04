<template>
  <div>
    <h1>메인 페이지</h1>
    <p>메인 페이지입니다.</p>
<!--    <ProductList></ProductList>-->
<!--    {{ products }}-->
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.name">
        <p>{{ product.name}}</p>
        <p>{{ product.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import ProductList from "~/components/ProductList";
export default {

  async asyncData(){
    const response = await axios.get('http://localhost:3000/products');
    // this.products = response.data;
    // asyncData() 에서는 this에 접근이 불가능 하다
    const products = response.data.map((item) => ({
        ...item,
      // http://placeimg.com
        imageUrl : `${item.imageUrl}?random=${Math.random()}`
    }));
    console.log(products);

    return { products }

  },

  name: "mainPage",
  data(){
    return{
      // products:[]
    }
  },

  async created() {
    // 기존 클라이언트 사이드 렌더링 방식의 데이터 호출
    // const response = await axios.get('http://localhost:3000/products');
    // console.log(response);
    // this.products = response.data;

  },
  components:{
    // ProductList
  }
}
</script>

<style scoped>

</style>
