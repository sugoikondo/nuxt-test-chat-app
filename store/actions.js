import * as types from './mutation-types'
import LivinghoodService from '../services/LivinghoodService'

const livinghoodService = new LivinghoodService()

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
  livinghoodService.store(items)
  // commit(types.STORE_LIVINGHOOD_ITEMS, items)
}

export const loadItems = ({ commit }) => {
  console.log('loadItems called')
  const items = livinghoodService.load()
  commit(types.SET_LIVINGHOOD_ITEMS, items)
}

export const addItem = ({ commit }, item) => {
  console.log('addItem called')
  commit(types.ADD_LIVINGHOOD_ITEM, item)
}
