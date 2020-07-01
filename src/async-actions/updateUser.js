export default function updateUser(user_id, formData) {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    fetch(`https://petfolio-backend-api.herokuapp.com/users/${user_id}`, configObj)
      .then(response => response.json())
      .then(userInfo => {
        dispatch({
          type: 'UPDATE_CURRENT_USER',
          payload: {
            current_address: userInfo.current_address,
            about_me: userInfo.about_me
          }
        })
        dispatch({type: 'SUCCESS'})
      })
      .catch(error => {
        console.log(error)
        dispatch({type: "FAILURE"})
      })
  }

}
