<template>
  <div class="text-center card card-side bg-base-100 shadow-xl w-1/3" style="height: 150px">

    <div class="card-body">
      <div class="absolute"><svg t="1669276047897" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3595" width="32" height="32"><path d="M931.417 46.592l-837.418 0c-45.611 0-82.568 36.964-82.568 82.564l0 773.93c0 45.611 36.968 82.568 82.568 82.568l60.952 0c10.895 0 21.046-4.916 27.911-13.278l200.428-248.489 91.493 75.51c14.627 12.091 36.116 10.597 49.103-3.276l268.057-314.048-7.503 66.229c0 19.78 16.036 35.817 35.817 35.817 19.78 0 35.817-16.036 35.817-35.817l17.841-157.491c0.479-2.222 0.737-4.526 0.78-6.882l0.034-0.298c0-0.062-0.01-0.122-0.011-0.186 0-0.062 0.011-0.122 0.011-0.186 0-19.78-16.036-35.817-35.817-35.817l-164.67 18.655c-19.78 0-35.817 16.036-35.817 35.817 0 19.78 16.036 35.817 35.817 35.817l67.331-7.628-247.24 292.437-93.277-77.003c-7.317-6.121-16.87-8.956-26.417-8.058-9.555 0.887-18.211 5.669-24.333 13.131l-211.884 262.806-13.47 0c-22.8 0-41.289-18.466-41.289-41.288l0-712.009c0-22.804 18.473-41.289 41.289-41.289l775.496 0c22.804 0 41.296 18.473 41.296 41.289l0 712.008c0 22.804-18.473 41.288-41.296 41.288l-372.081 0c-19.949 0-36.121 16.17-36.121 36.121s16.17 36.121 36.121 36.121l403.048 0c45.604 0 82.564-36.969 82.564-82.568l0-773.93c0-45.605-36.968-82.564-82.564-82.564z" p-id="3596" fill="#707070"></path></svg></div>
      <h2 class="font-bold text-xl">基金Ⅲ</h2>
      <p>拟任基金经理3</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-sm" v-show="$store.state.controlFundWatchButton" @click="enter()">Watch</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Jijin3",
  methods:{
    enter(){
      this.$store.commit('controlLineFunction', 3)
      this.$store.commit('controlJijinFunction')
      this.$store.commit('controlFundChatFunction')
    }
  }
}
</script>

<style scoped>

</style>