export default function allPets(state = [], action) {
  switch(action.type) {
    case 'SET_ALL_PETS':
      return(action.payload);
      /* falls through */
    case 'DELETE_PET':
      console.log("Pet with this ID will be deleted", action.payload);
      /* falls through */
    case 'ADD_PET':
      console.log("Pet will be added", action.payload);
      return(state.concat(action.payload));
      /* falls through */
    default:
      return state
  }
}
