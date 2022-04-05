<template>
  <div class="app">
    <main>
    <div>
      <input type="text" name="" id="">
    </div>

      <ul>
        <li  class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name">
          <p>{{ product.name}}</p>
          <span>{{ product.price}}</span>
        </li>
      </ul>
    </main>
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
  },
  methods:{
    moveToDetailPage(id){
      console.log(id);
      // nuxt에 라우터를 가지고 있어서 아래와 가이 쓸수 있다.
      this.$router.push(`detail/${id}`);
    }

  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
