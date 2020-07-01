export default function getAllUsers() {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    fetch(`https://petfolio-backend-api.herokuapp.com/users`)
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
