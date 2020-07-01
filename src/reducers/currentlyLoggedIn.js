export default function currentlyLoggedIn(state = false, action) {
  switch(action.type) {
    case 'LOG_IN':
      return true
    case 'LOG_OUT':
      return false
    default:
      return state
  }
}
