import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const store = () => new Vuex.Store({
  state: {
    counter: 1,
    items: []
  },
  mutations,
  actions,
  getters
})

export default store
