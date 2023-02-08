<template>
  <div class="flex ">
    <div class="px-20"></div>
    <Jijin1></Jijin1>
    <div class="px-5"></div>
    <Jijin2></Jijin2>
    <div class="px-5"></div>
    <Jijin3></Jijin3>
    <div class="px-20"></div>
  </div>
</template>

<script>
import Jijin3 from "@/components/Page/Jijin/Jijin3";
import Jijin2 from "@/components/Page/Jijin/Jijin2";
import Jijin1 from "@/components/Page/Jijin/Jijin1";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Jijin",
  components: {
    Jijin3, Jijin2, Jijin1
  }
}
</script>

<style scoped>

</style>