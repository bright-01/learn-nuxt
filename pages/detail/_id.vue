<template>
<div>
  <h1>상세페이지</h1>
  {{ path }}
</div>
</template>

<script>
export default {
  name: "_id",
  data(){
    return {
      path : ""
    }
  },
  created() {
    console.log(this.$route)
    this.path = this.$route.path;
  }
}
</script>

<style scoped>

</style>
