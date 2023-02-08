<template>
  <input type="range"  v-model="$store.state.slider2" min="0" max="100" class="range range-primary" />
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider2",
  watch: {
    // eslint-disable-next-line vue/no-arrow-functions-in-watch,no-unused-vars
    '$store.state.slider2': function (newValue, oldValue) {
      if (Number(this.$store.state.slider1)+ Number(this.$store.state.slider2)+ Number(this.$store.state.slider3) >= 101) {
        this.$store.state.slider2 = oldValue
      }
    }
  }
}
</script>

<style scoped>

</style>