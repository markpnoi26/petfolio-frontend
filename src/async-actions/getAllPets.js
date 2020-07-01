export default function getAllPets() {
  return (dispatch) => {
    dispatch({type: "FETCH"})
    fetch(`https://petfolio-backend-api.herokuapp.com/pets`)
      .then(response => response.json())
      .then(allPets => {
        dispatch({type: 'SET_ALL_PETS', payload: allPets})
        return allPets
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
