export default function getCurrentUser(id = 1) {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    fetch(`http://localhost:4000/users/${id}`)
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
