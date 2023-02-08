<template>
<div>
  <div class="h-40 text-center font-mono font-bold text-3xl">请您决定是否查看本轮您的个人资产组合收益情况</div>
  <div class="h-24 text-center font-mono font-bold text-2xl flex">
    <div class="flex-1"></div>
    <div class="flex-1 flex">
      <div class="flex-1"></div>
      <button class="btn btn-active btn-secondary btn-xl btn-lg w-44" @click="enter">是</button>
      <div class="flex-1"></div>
      <button class="btn btn-active btn-accent btn-xl btn-lg w-44" @click="jump">否</button>
      <div class="flex-1"></div>
    </div>
    <div class="flex-1"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "DecidePersonalProperty",
  methods: {
    enter() {
     this.$store.commit('controlDecidePersonalPropertyFunction')
      this.$store.commit('controlPersonalPropertyFunction')
    },
    jump() {
      this.$store.commit('controlDecidePersonalPropertyFunction')
      this.$store.commit('controlFundChatFunction')
      this.$store.commit('controlFundWatchButtonFunction')
    }
  }
}
</script>

<style scoped>

</style>