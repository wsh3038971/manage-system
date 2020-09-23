<template>
  <div class="home">home</div>
</template>

<script>
export default {
  created() {
    this.$http.get('/home/getData').then(response => {
      console.log(response)
    })
  }
}
</script>

<style>

</style>