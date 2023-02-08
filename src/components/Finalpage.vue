<template>
  <div class="flex-col">
    <div class="flex-initial h-40"></div>
    <div class="flex flex-1">
      <div class="flex-1"></div>
      <img src="../assets/final.svg" class="scale-125 justify-center" alt="rest">
      <div class="flex-1"></div>
    </div>
    <div class="h-40"></div>
    <div class="text-center top-20 font-mono font-bold text-2xl">您最后的收益是：{{$store.state.userFinalIncome}} 元
    </div>
  </div>
</template>

<script>
export default {
  name: "Finalpage",
  data() {

  },
  mounted() {
    this.$store.commit('increaseUserFinalIncome')
    console.log(this.$store.state.userFinalIncome)
    this.$store.commit('postFinalMoney')
  }
}
</script>
