<template>
  <div>
    <!-- <div class="ui top attached label">Cart</div> -->
    <div class="ui relaxed divided list">
      <div class="item">
        <div class="ui two item menu">
          <a class="item"><i class="trash outline icon"></i> Delete All</a>
          <a @click="goTrans()" class="item"><i class="opencart icon"></i>Checkout</a>
        </div>
      </div>
      <div class="item" v-for="all in all">
        <div class="ui three column grid">
          <div class="five wide column">
            <img class="ui small image" src="https://semantic-ui.com/images/wireframe/image.png">
          </div>
          <div class="eight wide column">
            <div class="content">
              <a class="header">{{all.nama}}</a>
              <div class="description">Rp.2000.000</div>
            </div>
          </div>
          <div class="one wide column">
            <a class="item"><i class="trash outline icon"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  methods: {
    ...mapState([
      'cartTemp'
    ]),
    ...mapMutations([
      'setTransTemp'
    ]),
    goTrans () {
      // console.log(this.all)
      this.setTransTemp(this.all)
      this.$router.push(`/transaction`)
    }
  },
  computed: {
    all () {
      return this.cartTemp()
    }
  }
}
</script>

<style lang="css">
</style>
