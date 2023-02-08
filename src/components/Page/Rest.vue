<template>
  <div class="flex-col">
    <div class="flex-initial h-40"></div>
    <div class="flex flex-1">
      <div class="flex-1"></div>
      <img src="../../assets/rest.svg" class="scale-125 justify-center" alt="rest">
      <div class="flex-1"></div>
    </div>
    <div class="h-40"></div>
    <div class="text-center top-20 font-mono font-bold text-2xl">请您耐心等待
      <span class="countdown font-mono text-4xl">
          <span id="second"></span>
        </span>
    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Rest",
  mounted() {
    let counter = 16;
    let willClearId = setInterval(() => {
      if (counter >= -1) {
        counter--
      }
      document.getElementById('second').style.setProperty('--value', counter)
    }, 1000)
    setTimeout(() => {
      clearInterval(willClearId)
      this.$store.commit('clearTaskProcess')
      this.$store.commit('controlPageHomeFunction')
      this.$store.commit('recoveryPage')
      this.$store.commit('clearFundAndSlider')
      this.$store.commit('clearUserMoney')
      this.$router.push({path: '/page'})
    }, 17000)
  }

}
</script>

<style scoped>

</style>