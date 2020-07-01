export default function getAllUsers() {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    fetch(`http://localhost:4000/users`)
      .then(response => response.json())
      .then(allUsers => {
        dispatch({type: 'SET_ALL_USERS', payload: allUsers})
        return allUsers
      })
      .then(() => {
        dispatch({type: "SUCCESS"})
      })
      .catch(error => {
        console.log(error)
        dispatch({type: "FAILURE"})
      })
  }
}
