import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10
}

// 定义所需的 mutations
// mutations 与事件类似，更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。所以 mutations 上存放的一般就是我们要改变 state 的一些方法。
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})