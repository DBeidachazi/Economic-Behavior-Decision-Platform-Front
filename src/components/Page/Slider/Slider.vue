<template>
  <div class="flex flex-col">
    <div class="text-center font-mono">基金Ⅰ: <p class="inline text-2xl">{{$store.state.slider1}}</p> %</div>
    <Slider1></Slider1>
    <div class="divider"></div>
    <div class="text-center font-mono">基金Ⅱ: <p class="inline text-2xl">{{$store.state.slider2}}</p> %</div>
    <Slider2></Slider2>
    <div class="divider"></div>
    <div class="text-center font-mono">基金Ⅲ: <p class="inline text-2xl">{{$store.state.slider3}}</p> %</div>
    <Slider3></Slider3>
  </div>

</template>

<script>
import Slider2 from "@/components/Page/Slider/Slider2";
import Slider3 from "@/components/Page/Slider/Slider3";
import Slider1 from "@/components/Page/Slider/Slider1";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  components: {
    Slider1, Slider2, Slider3
  }
}
</script>

<style scoped>

</style>