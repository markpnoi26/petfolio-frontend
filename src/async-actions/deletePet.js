export default function deletePet(id) {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    dispatch({type: "DELETE_PET", payload: id})
    fetch(`https://petfolio-backend-api.herokuapp.com/pets/${id}`, {method: "DELETE"})
      .then(response => response.json())
      .then(pets => {
        dispatch({type: 'SET_ALL_PETS', payload: pets})
        return pets
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
