<template>
  <div class="right menu">
    <a @click="goLogin()" class="item">Sign In</a>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
