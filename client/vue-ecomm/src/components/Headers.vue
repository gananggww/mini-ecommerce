<template>
  <div>
    <div class="ui fixed menu heads">
      <div class="header item">
        Vuepedia
      </div>
      <div class="right menu">
        <Loginbutton v-if="validasi === null"></Loginbutton>
        <Logoutbutton v-else></Logoutbutton>
      </div>
    </div>
  </div>
</template>

<script>
import Loginbutton from '@/components/Loginbutton'
import Logoutbutton from '@/components/Logoutbutton'
export default {
  data () {
    return {
      validasi: localStorage.getItem('token')
    }
  },
  components: {
    Loginbutton,
    Logoutbutton
  }
}
</script>

<style scoped>
  /*.heads {
    background-color: #00BCD4;
    color: ;
  }*/
  .item {
    color: white;
  }
</style>
