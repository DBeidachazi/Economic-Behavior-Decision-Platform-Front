<template>

  <div class="hero min-h-screen bg-base-200 bg-white">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div id="prepareImg" class="mb-4"> <img src="../../assets/prepare.png" alt="img" class="h-3/4 w-3/4 mx-auto"> </div>
        <h1 class="text-5xl font-bold">欢 迎</h1>
        <p class="pt-6 pb-2">感谢您参与我们的行为决策实验！</p>
        <p class="pb-6">请您等候实验员的指令再点击下方按钮进入实验。</p>
        <button class="btn btn-primary" @click="leave">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Prepare1",
  methods: {
    leave() {
      this.$parent.goToPrepare2()

      // this.$router.push({path: '/prepare/prepare2'})
    },
    myBack() {
      history.pushState(null, null, document.URL);
    }
  },
  mounted() {
    // this.$router.push({path: '/prepare/prepare1'})
    //禁止后退
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", this.myBack, false);
  },


}
</script>

<style scoped>

</style>