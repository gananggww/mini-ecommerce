<template>
  <div class="ui container asas">
    <div class="ui segment">
      <div class="ui center aligned basic segment">
        <h1>Vue-Commerce</h1>

        <!-- <div class="ui left icon action input">
          <i class="search icon"></i>
          <input type="text" placeholder="Order #">
          <div class="ui blue submit button">Search</div>
        </div> -->
        <div class="ui horizontal divider">
          Or
        </div>
        <Buttonfb></Buttonfb>
        <Buttongo></Buttongo>
      </div>
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
<style>
.asas {
    text-align: center;
}
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
