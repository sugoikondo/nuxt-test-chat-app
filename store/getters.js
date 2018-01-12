export const roomList = state => {
  return state.rooms
}

// ルームのIDに応じたチャットを返却する
export const chatsByRoomId = state => (roomId) => {
  return state.chats.filter((chat) => roomId === chat.roomId)
}
export const counter = state => {
  return state.counter
}
