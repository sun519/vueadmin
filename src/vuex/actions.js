//test
// mutation 像事件注册，需要相应的触发条件。而 Action 就那个管理触发条件的。
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
