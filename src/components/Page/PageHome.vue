<template>
  <div v-if="controlPageHome">
    <div class="flex-1">
      <div class="navbar bg-neutral text-neutral-content z-50">
        <div class="flex-1">
          <div class="btn pointer-events-none no-animation btn-ghost normal-case text-xl mx-auto flex-1 flex">
            <div>实验阶段 :</div>
            <div class="ml-2">
              <div id="experimentalStage" class="radial-progress" style="--size:3rem;">
                {{ $store.state.experimentalStage }}/3
              </div>
            </div>
          </div>
          <div class="btn no-animation pointer-events-none btn-ghost normal-case text-xl mx-auto flex-1 flex">
            <div>投资任务进度 :</div>
            <div class="ml-2">
              <div id="taskProcess" class="radial-progress" style="--size:3rem;">
                <p class="text-xs">{{ $store.state.taskProcess }}/12</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <a class="btn no-animation pointer-events-none btn-ghost normal-case text-3xl block mx-auto flex">行为实验决策平台</a>
        </div>
        <div class="flex-1">
          <div class="btn no-animation pointer-events-none btn-ghost normal-case text-xl mx-auto flex flex-1">
            <div>当前周期剩余时间 :</div>
            <div id="remainingTime" class="ml-2">
            <span class="countdown font-mono text-4xl">
              <span id="minute"></span>m
            </span>
              <span class="countdown font-mono text-4xl ml-1">
              <span id="second"></span>s
            </span>
            </div>
          </div>
          <div class="flex flex-none">
          </div>
        </div>
      </div>
    </div>

    <div class="h-40" v-show="!controlLine"></div>
<!--    基金面板-->
    <div v-show="controlJijin">
      <Jijin></Jijin>
    </div>

    <div class="h-20"></div>
<!--    滑动条-->
    <div v-show="controlPageButton">
      <PageMiddle></PageMiddle>
    </div>

    <div class="h-24" v-show="controlPageButton"></div>
<!--    按钮-->
    <div v-if="controlPageButton">
      <PageButton></PageButton>
    </div>

<!--    个人资产查看控制页面-->
    <div v-show="controlDecidePersonalProperty">
      <DecidePersonalProperty></DecidePersonalProperty>
    </div>

<!--    个人资产页面-->
    <div v-show="controlPersonalProperty">
        <PersonalProperty></PersonalProperty>
    </div>

<!--    基金表格查看控制页面-->
    <div v-show="controlFundChat">
      <DecideFuntChat></DecideFuntChat>
    </div>

<!--    折线图控制页面-->
    <div v-if="controlLine">
      <Line></Line>
    </div>
  </div>

</template>
<script>
import {mapState} from "vuex";
import PageMiddle from "@/components/Page/PageMiddle";
import Jijin from "@/components/Page/Jijin/Jijin"
import PageButton from "@/components/Page/PageButton";
import DecidePersonalProperty from "@/components/Page/DecidePersonalProperty";
import PersonalProperty from "@/components/Page/PersonalProperty";
import DecideFuntChat from "@/components/Page/DecideFuntChat";
import Line from "@/components/Page/Jijin/Line";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PageHome",
  computed: {
    ...mapState(['controlFundChat']),
    ...mapState(['controlPageButton']),
    ...mapState(['controlJijin']),
    ...mapState(['controlDecidePersonalProperty']),
    ...mapState(['controlPersonalProperty']),
    ...mapState(['controlPageHome']),
    ...mapState(['controlLine'])
  },
  components: {
    Jijin, PageMiddle, PageButton, DecidePersonalProperty, PersonalProperty, DecideFuntChat, Line
  },
  methods: {
    increaseTaskProcess() {
      this.$store.commit('increaseTaskProcess')
      const experimentalStage = document.getElementById('experimentalStage');
      const taskProcess = document.getElementById('taskProcess')
      experimentalStage.style.setProperty('--value', this.$store.state.experimentalStageValue)
      taskProcess.style.setProperty('--value', this.$store.state.taskProcessValue)
      // if (this.$store.state.taskProcess === 13) {
      //
      // }
    },
    increaseExperimentalStage() {
      this.$store.commit('increaseExperimentalStage')
      const experimentalStage = document.getElementById('experimentalStage');
      const taskProcess = document.getElementById('taskProcess')
      experimentalStage.style.setProperty('--value', this.$store.state.experimentalStageValue)
      taskProcess.style.setProperty('--value', this.$store.state.taskProcessValue)
    }
  },
  mounted() {
    const second = document.getElementById('second');
    const minute = document.getElementById('minute');
    this.$store.state.pageHomeInterval = setInterval(() => {
      second.style.setProperty('--value', this.$store.state.remainSeconds)
      minute.style.setProperty('--value', this.$store.state.remainMinute)
      this.$store.commit('carouselTime')
      if (this.$store.state.remainMinute === 0 && this.$store.state.remainSeconds === 0) {
        clearInterval(this.$store.state.pageHomeInterval)
        setTimeout(() => {
          this.increaseExperimentalStage()
          if (this.$store.state.experimentalStage === 4) {
            this.$store.commit('clearUserMoney')
            this.$router.push({path: '/finalpage'})
          } else {
            this.$store.commit('controlPageHomeFunction')
            clearInterval(this.$store.state.pageHomeInterval)
            this.$router.push({path: '/rest'});
          }

        }, 2000)
      }
    }, 1000)

    const experimentalStage = document.getElementById('experimentalStage');
    const taskProcess = document.getElementById('taskProcess')
    experimentalStage.style.setProperty('--value', this.$store.state.experimentalStageValue)
    taskProcess.style.setProperty('--value', this.$store.state.taskProcess)

  }
}
</script>