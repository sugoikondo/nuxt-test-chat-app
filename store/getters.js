export const counter = state => {
  return state.counter
}

// 追加されたアイテムの中から収入に該当するアイテムだけを返却する
export const getIncomeItems = state => {
  return state.items.filter(item => {
    return item.price > 0
  })
}

// 追加された物の中から支出に該当するアイテムだけを返却する
export const getExpenceItems = state => {
  return state.items.filter(item => {
    return item.price < 0
  })
}
// 支出と収入の合計を計算する
// TODO: Paymentってなんやねん
export const calcPayments = state => {
  let payments = 0
  state.items.forEach(item => {
    payments = payments + parseInt(item.price)
  })

  return payments
}
