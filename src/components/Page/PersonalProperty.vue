<template>
<div class="flex-col text-center text-2xl font-bold font-mono">
  <div class="">您当前个人资产组合市值为：{{$store.state.userNewMoney}}</div>
  <br><br><br>
  <div class="flex">
    <div class="flex-1">本轮收益：{{$store.state.userThisRoundIncome}}</div>
    <div class="flex-1">当前累计收益：{{$store.state.userThisExperimentalStageTotalIncome}}</div>
  </div>
  <br><br><br><br><br><br>
  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-64" @click="quit">确认</button>
</div>
</template>




<script>
export default {
  name: "PersonalProperty",
  methods: {
    quit() {
      this.$store.commit('controlPersonalPropertyFunction')
      this.$store.commit('controlFundWatchButtonFunction')
      this.$store.commit('controlFundChatFunction')
    }
  }
}
</script>

<style scoped>

</style>