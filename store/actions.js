import * as types from './mutation-types'

export const increment = ({ commit }) => {
  console.log('increment called')
  commit(types.INCREMENT_COUNTER)
}

export const decrement = ({ commit }) => {
  console.log('decrement called')
  commit(types.DECREMENT_COUNTER)
}
