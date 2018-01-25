const LIVINGHOOD_STORAGE_KEY = 'LIVINGHOOD_STORAGE_KEY'

export default class LivinghoodService {
  fetch () {
    console.log('LivinghoodService.fetch called')
    const items = JSON.parse(localStorage.getItem(LIVINGHOOD_STORAGE_KEY))
    if (items === null) return
    items.forEach((item, index) => {
      item.id = index
    })

    console.log('item loaded')
    return items
  }

  store (items) {
    localStorage.setItem(LIVINGHOOD_STORAGE_KEY, JSON.stringify(items))
    console.log('item stored')
  }
}
