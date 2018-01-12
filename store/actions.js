import * as types from './mutation-types'

export const increment = ({ commit }) => {
  console.log('increment called')
  commit(types.COUNTER_INCREMENT)
}

export const decrement = ({ commit }) => {
  console.log('decrement called')
  commit(types.COUNTER_DECREMENT)
}
