/**
 * 同步
 */
import types from './mutation-types.js'
console.log(types.DEMO_INDEX)
export default{
  [types.DEMO_INDEX](state){
    console.log(state.demo_index)
    state.demo_index++
  }
}