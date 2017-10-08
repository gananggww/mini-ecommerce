<template>
  <div>
    <div class="ui fixed menu heads">
      <div class="header item">
        Vuepedia
      </div>
      <Tohome v-show="router === '/admin'"></Tohome>
      <div class="right menu">
        <Adminbutton v-show="validasi !== null"></Adminbutton>
        <Loginbutton v-if="validasi === null"></Loginbutton>
        <Logoutbutton v-else></Logoutbutton>
      </div>
    </div>
  </div>
</template>

<script>
import Loginbutton from '@/components/Loginbutton'
import Logoutbutton from '@/components/Logoutbutton'
import Adminbutton from '@/components/Adminbutton'
import Tohome from '@/components/Tohome'
export default {
  data () {
    return {
      validasi: localStorage.getItem('token'),
      router: this.$router.app._route.fullPath
    }
  },
  components: {
    Loginbutton,
    Logoutbutton,
    Adminbutton,
    Tohome
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
