import { combineReducers } from 'redux'
import allPets from './allPets'
import allUsers from './allUsers'
import currentlyLoggedIn from './currentlyLoggedIn'
import currentlyFetching from './currentlyFetching'
import currentUser from './currentUser'



export default combineReducers({
  allPets,
  allUsers,
  currentlyLoggedIn,
  currentlyFetching,
  currentUser
})
