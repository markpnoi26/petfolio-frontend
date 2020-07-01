export default function getCurrentUser(id = 1) {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    fetch(`https://petfolio-backend-api.herokuapp.com/users/${id}`)
      .then(response => response.json())
      .then(currentUser => {
        dispatch({type: 'SET_CURRENT_USER', payload: currentUser})
        return currentUser
      })
      .then(() => {
        dispatch({type: "SUCCESS"})
        dispatch({type: 'LOG_IN'})
      })
      .catch(error => {
        console.log(error)
        dispatch({type: "FAILURE"})
      })
  }

}
