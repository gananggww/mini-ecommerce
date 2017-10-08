<template>
  <div class="right menu">
    <a @click="keluar()" class="item">Sign Out</a>
  </div>
</template>

<script>
export default {
  methods: {
    keluar () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
