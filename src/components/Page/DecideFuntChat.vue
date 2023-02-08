<template>
<div class="flex flex-row h-64">
    <div class="flex-initial w-56"></div>
    <img src="../../assets/Jijin.svg" alt="jijin" class="scale-125 flex-initial">

    <div class="flex-1 flex-col flex">
      <div class="flex-1 font-bold text-2xl font-mono text-center">请您决定是否查看本轮市场价格走势</div>
      <div class="flex-1 justify-center text-center"><button class="btn btn-active btn-accent btn-xl btn-lg w-44" @click="jump">否</button></div>
    </div>
  <div class="flex-initial w-64"></div>

</div>
</template>

<script>

export default {
  name: "DecideFuntChat",

  methods: {
    jump() {
      this.$store.commit('controlFundChatFunction')
      this.$store.commit('controlFundWatchButtonFunction')

      this.$store.commit('controlPageButtonFunction')

      this.$parent.increaseTaskProcess()
      if (this.$store.state.taskProcess === 13) {
        if (this.$store.state.experimentalStage === 3) {
          this.$store.commit('clearUserMoney')
          this.$router.push({path: '/finalpage'})
        } else {
          this.$parent.increaseExperimentalStage()
          this.$store.commit('controlPageHomeFunction')
          clearInterval(this.$store.state.pageHomeInterval)
          this.$router.push({path: '/rest'});
        }

      }
    }
  }

}
</script>

<style scoped>

</style>