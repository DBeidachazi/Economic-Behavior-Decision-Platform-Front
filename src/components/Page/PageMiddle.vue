<template>
  <div class="flex">
    <div class="flex-1 flex pr-4">
      <div class="flex-1"></div>
      <div class="indicator flex-1">
        <Note></Note>
      </div>
    </div>
    <Slider class="flex-1"></Slider>
    <div class="flex-1"></div>
  </div>

</template>

<script>
import Note from "@/components/Page/Note";
import Slider from "@/components/Page/Slider/Slider";
export default {
  name: "PageMiddle",
  components: {
    Note, Slider
  }
}
</script>

<style scoped>

</style>