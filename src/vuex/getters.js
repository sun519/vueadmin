//test
// getters上简单来说就是存放一些公共函数供组件调用。getters 会暴露为 store.getters 对象，也就是说可以通过 store.getters[属性]来进行相应的调用。
export const getCount = state => {
    return state.count
}
