import * as types from './mutation-types'

const mutations = {
  [types.COUNTER_INCREMENT] (state) {
    console.log('increment called')
    state.counter++
  },
  [types.COUNTER_DECREMENT] (state) {
    console.log('decrement called')
    state.counter--
  }
}

export default mutations
