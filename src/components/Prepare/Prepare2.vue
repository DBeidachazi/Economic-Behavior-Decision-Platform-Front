<template>
  <div class="hero min-h-screen bg-base-200 bg-white">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div id="prepareImg" class="mb-4"><img alt="img" class="h-3/4 w-3/4 mx-auto" src="../../assets/prepare2.png">
        </div>
        <p class="pt-6 pb-2 inline">请您耐心等待 </p>
        <span class="countdown font-mono text-4xl">
          <span id="second"></span>
        </span>
        <span>  sec</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Prepare2",
  mounted() {
    let counter = 11;
    let willClearId = setInterval(() => {
      if (counter >= -1) {
        counter--
      }
      document.getElementById('second').style.setProperty('--value', counter)
    }, 1000)
    setTimeout(() => {
      clearInterval(willClearId)
      this.$router.push({path: '/page'})
    }, 12000)
  }
}
</script>