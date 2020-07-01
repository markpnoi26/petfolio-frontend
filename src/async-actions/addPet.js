export default function addPet(user_id, pet_info) {
  return (dispatch) => {
    dispatch({type: "FETCH"})

    let formData = {
      user_id: user_id,
      pet_info: pet_info
    }

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    fetch(`http://localhost:4000/pets`, configObj)
      .then(response => response.json())
      .then(pet => {
        dispatch({type: "ADD_PET", payload: pet})
        return pet
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
