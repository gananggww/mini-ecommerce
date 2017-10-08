<template>
  <div>
    <div class="ui form">
      <center>
        <h1>Tambah Lapak Agan..!</h1>
      </center>
      <div class="field">
        <label>Judul lapak agan</label>
        <input v-model="jualan.title"></input>
      </div>
      <div class="field">
        <label>Jumlah Stock</label>
        <input v-model="jualan.stock" type="number" name="" value="">
      </div>
      <div class="field">
        <label>URL gambar agan</label>
        <input v-model="jualan.img"></input>
      </div>
      <div class="field">
        <label>Deskripsi singkat agan</label>
        <input v-model="jualan.short_desc"></input>
      </div>
      <div class="field">
        <label>Deskripsi lapak agan</label>
        <textarea v-model="jualan.desc"></textarea>
      </div>
      <button @click="postingGan()" class="fluid green ui button">Jual gan</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      jualan: {
        title: '',
        img: '',
        short_desc: '',
        desc: '',
        stock: ''
      }
    }
  },
  methods: {
    ...mapActions({
      atap: 'postGood'
    }),
    postingGan () {
      this.atap(this.jualan)
    }
  }
}
</script>

<style lang="css">
</style>
