<template lang="html">
<div>
  <div class="">
    <Headers/>
  </div>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui items">
        <div class="item" v-for="(data, index) in all">
          <div class="ui tiny image">
            <img :src="data.img">
          </div>
          <div class="middle aligned content">
            <a class="header">{{data.nama}}</a>
            <a class="right floated header">Rp.{{data.harga}}</a>
            <br>
            <button @click="removetrans(index)" class="ui basic icon button" type="button" name="button"><i class="trash icon"></i></button>
            <!-- <div class="ui form">
              <div class="one wide field">
                <input type="text" name="" value="">
              </div>
            </div> -->
          </div>
          <div class="">
          </div>
        </div>
      </div>
    </div>
    <div class="ui segment">
      <Addressfinal/>
    </div>
  </div>
</div>
</template>

<script>
import Headers from '@/components/Headers'
import Addressfinal from '@/components/Addressfinal'
import {mapState, mapMutations} from 'vuex'
export default {
  components: {
    Headers,
    Addressfinal
  },
  methods: {
    ...mapState([
      'transaction'
    ]),
    ...mapMutations([
      'setDelTrans'
    ]),
    removetrans (id) {
      this.setDelTrans(id)
    }
  },
  computed: {
    all () {
      return this.transaction()
    }
  }
}
</script>

<style lang="css">
</style>
