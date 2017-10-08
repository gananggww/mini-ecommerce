<template lang="html">
  <div>
    <a @click="goHome()" class="item">Home</a>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
