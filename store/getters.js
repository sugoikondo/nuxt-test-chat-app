export const counter = state => {
  return state.counter
}

export const getIncomeItems = state => {
  return state.items.filter(item => {
    return item.price > 0
  })
}

export const getExpenceItems = state => {
  return state.items.filter(item => {
    return item.price < 0
  })
}
