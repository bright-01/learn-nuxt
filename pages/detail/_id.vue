<template>
<div>
  <h1>상세페이지</h1>
  {{ $router }}
</div>
</template>

<script>
export default {
  name: "_id",
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
