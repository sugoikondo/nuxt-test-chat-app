import * as types from './mutation-types'

// -- [ Counter ] ----------------------------------------------------------
export const increment = ({ commit }) => {
  console.log('increment called')
  commit(types.INCREMENT_COUNTER)
}

export const decrement = ({ commit }) => {
  console.log('decrement called')
  commit(types.DECREMENT_COUNTER)
}

// -- [ Livinghood ] ----------------------------------------------------------
export const storeItems = ({ commit }, items) => {
  console.log('storeItem called')
}

export const loadItems = ({ commit }) => {
  console.log('loadItems called')
}

export const addItem = ({ commit }, item) => {
  console.log('addItem called')
  commit(types.ADD_LIVINGHOOD_ITEM, item)
}
