<template>
  <div class="flex">
    <div class="flex-1"></div>
    <button class="btn btn-wide btn-lg flex-1" @click="clickButton">确认(
      <span class="countdown font-mono text-2xl">
        <span  id="secondButton"></span>
      </span>
      )</button>
    <div class="flex-1"></div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
// import axios from 'axios'
export default {
  name: "PageButton",
  data() {
    return {
      willClearId: null,
      willClearTimeOutId: null,
      counter: 26,
    }
  },
  mounted() {

    this.willClearId = setInterval(() => {
      if (this.counter >= -1) {
        this.counter--
      }
      document.getElementById('secondButton').style.setProperty('--value', this.counter)
    }, 1000)
    this.willClearTimeOutId = setTimeout(() => {
      clearInterval(this.willClearId)
      clearTimeout(this.willClearTimeOutId)
      let sliderObj = {
        'slider1': this.slider1,
        'slider2': this.slider2,
        'slider3': this.slider3
      }
      this.buttonOver(sliderObj)

      // this.$router.push({path: '/page'})
    }, 27000)


  },
  computed: {
    ...mapState(['slider2']),
    ...mapState(['slider3']),
    ...mapState(['slider1']),
  },
  methods: {
    buttonOver(sliderObj) {
      this.$store.commit('addSliderObj', sliderObj)
      this.$store.commit('calculationFund')
      this.$store.commit('calculationUserMoney')
      this.$store.commit('controlPageButtonFunction')
      this.$store.commit('controlDecidePersonalPropertyFunction')

      // post
      this.$store.commit('postSlider')
      this.$store.commit('postFund')

    },
    clickButton() {
      let sliderObj = {
        'slider1': this.slider1,
        'slider2': this.slider2,
        'slider3': this.slider3
      }
      this.buttonOver(sliderObj)

    }
  },
  unmounted() {
    clearInterval(this.willClearId)
    clearTimeout(this.willClearTimeOutId)
  }
}
</script>