<template>
  <div class="flex-col">
    <div class="text-center font-bold text-xl font-mono">
      <p>您选择查看当前</p><p class="text-2xl text-red-700">{{this.infomation}}</p>的市场价格走势
    </div>
    <div class="mx-auto inset-x-0"  ref="mychart" style="width: 1000px;height:500px;" id="mychart"></div>
    <div class="flex ">
      <div class="mx-auto inset-x-0">
        <button class="btn btn-primary text-2xl" @click="back" >返回</button>
      </div>
    </div>
  </div>


</template>

<script>
let echarts=require('echarts')
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{...mapState(["fundChat","lineId"])},
  data(){
    return{
      infomation:"",
      datax:['1','2','3','4','5','6','7','8','9','10','11','12'],
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Line',
  mounted() {
    this.draw()
  },
  methods:{
    ...mapMutations(["exchange"]),
    arrylist(){
      if (this.lineId===3){
        this.infomation="基金Ⅲ"
        return this.fundChat.fund3
      }
      else if(this.lineId===2){
        this.infomation="基金Ⅱ"
        return this.fundChat.fund2
      }
      else {
        this.infomation = "基金Ⅰ"
        return this.fundChat.fund1
      }
    },
    draw(){
      let myecharts=echarts.init(document.getElementById('mychart'))
      let xData=this.datax;
      let data=this.arrylist();
      let option={
        xAxis: {
          type:"category",
          data:xData
        },
        yAxis: {
          type:"value"
        },
        series: [{
          data,
          type:'line',
          stack:'x',
          label: {
            show: true,
            position: 'bottom',
            textStyle: {
              fontSize: 14,
              color:'gray'
            }}
        }
        ]
      }
      myecharts.setOption(option)
    },
    back() {
      this.$store.commit('controlLineFunction')
      this.$store.commit('controlFundChatFunction')
      this.$store.commit('controlJijinFunction')
    }

  }
}
</script>