<template>
  <div class="my-32">
    <div id="right" class="mx-auto flex justify-center justify-self-center">
      <div><img alt="homeGif" src="../assets/homeGif.gif"></div>
      <div class=" w-2/5 bg-base-100 shadow-2xl py-12">
        <div class="card-body items-center text-center">
          <h2 class="text-3xl font-black">经济学行为决策实验平台</h2>
          <p class="text-sm">Behavior decision-making experimental platform</p>
          <input v-model="seatNumber" class="input input-bordered w-80 mx-auto my-24" placeholder="请输入八位座位号"
                 type="text"/>
          <button class="btn btn-primary w-80 mx-auto" @click="toPrepare">开始试验</button>

          <div class="alert alert-error shadow-lg w-64" v-show="alert">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>请输入八位数字</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  watch: {
    seatNumber(val, oldVal) {
      this.seatNumber = val.replace(/\D/g, '')
      if (this.seatNumber.length === 9 ) {
        this.seatNumber = oldVal
      }
    }
  },
  data() {
    return {
      seatNumber: "",
      alert: false,
      setTimeoutId: null
    }
  },
  methods: {
    toPrepare() {
      if (this.seatNumber.length === 8) {
        this.$store.commit('setSearNumber', this.seatNumber)
        // post
        this.$store.commit('postSeatNumber')

        this.$router.push({path: '/prepare'})
        clearTimeout(this.setTimeoutId)
      } else {
        this.alert = true
        this.setTimeoutId = setTimeout(() => {
          this.alert = false
        }, 3000)
      }

    }
  }

}
</script>

<style scoped>
body {
  margin: 0;
  height: 100%
}

html {
  height: 100%
}

</style>