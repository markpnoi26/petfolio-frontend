export default function currentUser(
  state = {}
  , action) {

  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.payload
    case 'UPDATE_CURRENT_USER':
      return {...state, about_me: action.payload.about_me, current_address: action.payload.current_address}
    case 'DELETE_PET':
      return { ...state, pets: state.pets.filter(pet => pet.id !== action.payload)}
    case 'ADD_PET':
      return { ...state, pets: state.pets.concat(action.payload)}
    case 'LOG_OUT':
      return {}
    default:
      return state
  }
}
