<template>
  <div class=" rounded-2xl grid w-64 h-64 bg-base-300 place-items-center relative top-4 text-center font-bold font-mono text-xl">
    <div class="flex-1">
      <p class="">请您拉动滑动条并</p>
      <p>做出您本轮的资产配置决策</p>
      <div class="h-4"></div>
      <p class="">当前已配置资产比例为{{totalSlider}}%</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Note",
  computed: {
    totalSlider() {
      return (Number(this.$store.state.slider1) +Number(this.$store.state.slider2) + Number(this.$store.state.slider3))
    }
  },
}
</script>

<style scoped>

</style>