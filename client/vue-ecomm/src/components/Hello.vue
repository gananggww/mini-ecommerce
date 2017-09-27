<template>
  <div class="hello">
    <div>
      <img src="../assets/logo.png">
      <h1>Vue-Commerce</h1>
      <Buttonfb></Buttonfb>
      <Buttongo></Buttongo>
    </div>
  </div>
</template>

<script>
import Buttonfb from '@/components/Buttonfb'
import Buttongo from '@/components/Buttongo'

export default {
  name: 'hello',
  components: {
    Buttonfb,
    Buttongo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
