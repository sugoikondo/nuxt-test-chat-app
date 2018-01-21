import * as types from './mutation-types'

const mutations = {
  [types.INCREMENT_COUNTER] (state) {
    console.log('increment called')
    state.counter++
  },
  [types.DECREMENT_COUNTER] (state) {
    console.log('decrement called')
    state.counter--
  },
  [types.SET_LIVINGHOOD_ITEMS] (state, items) {
    state.items = items
  }
}

export default mutations
