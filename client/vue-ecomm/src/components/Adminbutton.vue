<template>
  <div class="right menu">
    <a @click="goAdmin" class="item">Buka lapak mu</a>
  </div>
</template>

<script>
export default {
  methods: {
    goAdmin () {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="css">
</style>
