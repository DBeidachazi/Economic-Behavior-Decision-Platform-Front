import {createStore} from "vuex";
import axios from "axios";
const store = createStore({
    state() {
        return{
            // final

            // home
            seatNumber: "",
            userOldMoney: 1000,
            userNewMoney: 0,
            userAfterStageMoney: [],
            userFinalIncome: 0,

            // page
            experimentalStage: 1, // 周期
            experimentalStageValue: 33.33,
            taskProcess: 1, // 轮
            taskProcessValue: 8.33,
            pageHomeInterval: null,

            remainMinute: 14,
            remainSeconds: 59,

            // Slider
            slider1: 0,
            slider2: 0,
            slider3: 0,
            totalSlider: 0,
            sliderFinalData: [],

            // fund
            fund1: 100, fund1Probability: 65,
            fund2: 100, fund2Probability: 50,
            fund3: 100, fund3Probability: 35,
            fundChat: {
                fund1: [],
                fund2: [],
                fund3: []
            },


            // 控制page页面
            controlPageHome: true,
            // 控制滑动条按钮的选项
            controlPageButton: true,
            //控制基金
            controlJijin: true,
            // 个人资产查看控制页面
            controlDecidePersonalProperty: false,
            // 个人资产页面
            controlPersonalProperty: false,
            // 基金查看按钮
            controlFundWatchButton: false,
            // 基金表格查看控制页面
            controlFundChat: false,
            // 基金表格查看控制页面
            controlLine: false,
            lineId: 0,

            userThisRoundIncome: 0,
            userThisExperimentalStageTotalIncome: 0,


        }
    },
    mutations: {
        calculationFund(state) {
            let number1 = Math.round(Math.random()*100)
            let number2 = Math.round(Math.random()*100)
            let number3 = Math.round(Math.random()*100)
            
            if (number1 <= state.fund1Probability) {
                state.fund1 = Math.round((state.fund1 + (state.fund1 * 0.06)) * 10) / 10
            } else {
                state.fund1 = Math.round((state.fund1 - (state.fund1 * 0.05)) * 10) / 10
            }
            if (number2 <= state.fund2Probability) {
                state.fund2 = Math.round((state.fund2 + (state.fund2 * 0.06)) * 10) / 10
            } else {
                state.fund2 = Math.round((state.fund2 - (state.fund2 * 0.05)) * 10) / 10
            }
            if (number3 <= state.fund3Probability) {
                state.fund3 = Math.round((state.fund3 + (state.fund3 * 0.06)) * 10) / 10
            } else {
                state.fund3 = Math.round((state.fund3 - (state.fund3 * 0.05)) * 10) / 10
            }

            state.fundChat.fund1.push(state.fund1)
            state.fundChat.fund2.push(state.fund2)
            state.fundChat.fund3.push(state.fund3)

        },
        calculationUserMoney(state) {
            let one = state.userOldMoney * (state.slider1/100) * (state.fund1/100)
            let two = state.userOldMoney * (state.slider2/100) * (state.fund2/100)
            let three = state.userOldMoney * (state.slider3/100) * (state.fund3/100)
            let less = 1000 - state.slider1*10 - state.slider2*10 - state.slider3*10
            // console.log(one + two + three + less)
            state.userNewMoney = Math.round(one + two + three + less)
            state.userThisRoundIncome = state.userNewMoney - state.userOldMoney
            state.userThisExperimentalStageTotalIncome = state.userNewMoney - 1000
            state.userOldMoney = state.userNewMoney
        },
        setSearNumber(state, payload) {
            state.seatNumber = payload
        },
        carouselTime(state) {
            if (state.remainSeconds === 0) {
                if (state.remainMinute !== 0) {
                    --state.remainMinute
                } else {
                    return false
                }

                state.remainSeconds = 59
            } else {
                --state.remainSeconds
            }
        },
        increaseExperimentalStage(state) {
            ++state.experimentalStage
            state.experimentalStageValue += 33.33
        },
        increaseTaskProcess(state) {
            ++state.taskProcess
            state.taskProcessValue += 8.33
            // console.log(state.taskProcessValue)
        },
        increaseUserFinalIncome(state) {
            let randomNumber = Math.ceil(Math.random()*3) - 1
            let number = Math.round(state.userAfterStageMoney[randomNumber]/20)
            state.userFinalIncome = number
        },
        addSliderObj(state, obj) {
            state.sliderFinalData.push(obj)
            console.log(state.sliderFinalData)
        },
        controlPageButtonFunction(state) {
            state.controlPageButton = !state.controlPageButton
        },
        controlJijinFunction(state) {
            state.controlJijin = !state.controlJijin
        },
        controlDecidePersonalPropertyFunction(state) {
            state.controlDecidePersonalProperty = !state.controlDecidePersonalProperty
        },
        controlPersonalPropertyFunction(state) {
            state.controlPersonalProperty = !state.controlPersonalProperty
        },
        controlFundWatchButtonFunction(state) {
            state.controlFundWatchButton = !state.controlFundWatchButton
        },
        controlFundChatFunction(state) {
            state.controlFundChat = !state.controlFundChat
        },
        controlPageHomeFunction(state) {
            state.controlPageHome = !state.controlPageHome
        },
        clearTaskProcess(state) {
            state.taskProcess = 1
            state.taskProcessValue = 8.33
            state.pageHomeInterval =  null

            state.remainMinute =  14
            state.remainSeconds = 59
        },
        clearFundAndSlider(state) {
            // 将数据添加进object
            state.slider1 = 0
            state.slider2 = 0
            state.slider3 = 0
            state.fund1 =  100
            state.fund2 =  100
            state.fund3 =  100
            state.fundChat.fund1 = []
            state.fundChat.fund2 = []
            state.fundChat.fund3 = []
            state.sliderFinalData = []
            state.totalSlider = 0
        },
        clearUserMoney(state) {
            state.userAfterStageMoney.push(state.userNewMoney)
            console.log(state.userAfterStageMoney)
            state.userNewMoney = 0
            state.userOldMoney = 1000
            state.userThisRoundIncome = 0
            state.userThisExperimentalStageTotalIncome = 0
        },
        controlLineFunction(state, payload) {
            state.lineId = payload
            state.controlLine = !state.controlLine
        },
        recoveryPage(state) {
            state.controlPageButton = true
            state.controlJijin = true
            state.controlDecidePersonalProperty = false
            state.controlPersonalProperty = false
            state.controlFundWatchButton = false
            state.controlFundChat = false
            state.controlLine = false
        },
        postSeatNumber(state) {
          axios.post('http://127.0.0.1:8080/user/userpost', {
              seatnumber: state.seatNumber
          }).then(res => {
              console.log(res.data)
          })
        },
        postSlider(state) {
            axios.post('http://127.0.0.1:8080/investment/investpost', {
                seatnumber: state.seatNumber,
                fundid: 1,
                slider: state.slider1,
                userthisroundincome: state.userThisRoundIncome
            }
            ).then(res => {
                console.log(res.data)
            })
            axios.post('http://127.0.0.1:8080/investment/investpost', {
                seatnumber: state.seatNumber,
                fundid: 2,
                slider: state.slider2,
                userthisroundincome: state.userThisRoundIncome
            }
            ).then(res => {
                console.log(res.data)
            })
            axios.post('http://127.0.0.1:8080/investment/investpost', {
                seatnumber: state.seatNumber,
                fundid: 3,
                slider: state.slider3,
                userthisroundincome: state.userThisRoundIncome
            }
            ).then(res => {
                console.log(res.data)
            })
        },
        postFund(state) {
            let fundArray = [
                {
                    experimentstage: state.experimentalStage,
                    taskprocess: state.taskProcess,
                    fundid: 1,
                    fund: state.fund1
                },
                {
                    experimentstage: state.experimentalStage,
                    taskprocess: state.taskProcess,
                    fundid: 2,
                    fund: state.fund2
                },
                {
                    experimentstage: state.experimentalStage,
                    taskprocess: state.taskProcess,
                    fundid: 3,
                    fund: state.fund3
                },
            ]
            axios.post("http://127.0.0.1:8080/funds/post",fundArray)
                .then(res => {
                    console.log(res.data)
                })
        },
        postFinalMoney(state) {
            axios.post(`http://127.0.0.1:8080/user/update/${state.seatNumber}/${state.userFinalIncome}`)
                .then(res => {
                    console.log(res.data)
            })
        }

    }
})
export default store