<template>
  <div>

    <div class="navbar pointer-events-none no-animation  bg-neutral text-neutral-content absolute z-50">
      <div class="flex-1"></div>
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl block mx-auto flex  ">行为实验决策平台</a>
      </div>
      <div class="flex-1">
      </div>
    </div>
    <Prepare1 v-show="prepare1"></Prepare1>
    <Prepare2 v-if="!prepare1"></Prepare2>
    <router-view></router-view>


  </div>
</template>

<script>
import Prepare1 from "@/components/Prepare/Prepare1";
import Prepare2 from "@/components/Prepare/Prepare2";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Prepare",
  components: {
    Prepare1, Prepare2
  },
  data() {
    return {
      prepare1: true
    }
  },
  methods: {
    goToPrepare2() {
      this.prepare1 = !this.prepare1
    }
  },

}
</script>

<style scoped>

</style>