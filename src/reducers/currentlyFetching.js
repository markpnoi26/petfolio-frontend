export default function currentlyFetching(state = false, action) {
  switch(action.type) {
    case 'FETCH':
      return true
    case 'SUCCESS':
      return false
    case 'FAILURE':
      return false
    default:
      return state
  }
}
