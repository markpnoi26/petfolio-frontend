import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import MainNavBar from '../components/MainNavBar'
import AllOwnersCard from '../components/AllOwnersCard'
import AllPetsCard from '../components/AllPetsCard'
import CurrentUserPage from '../components/CurrentUserPage'
import OwnerPage from '../components/OwnerPage'
import PetPage from '../components/PetPage'

// async actions
import getAllPets from '../async-actions/getAllPets'
import getAllUsers from '../async-actions/getAllUsers'
import deletePet from '../async-actions/deletePet'
import addPet from '../async-actions/addPet'
import updateUser from '../async-actions/updateUser'

class ApplicationContainer extends React.Component {

  componentDidMount() {
    this.props.getAllPets()
    this.props.getAllUsers()
  }

  render() {
    return(
      <Router>
        <div>
          <MainNavBar logOut={this.props.logOut} />
          <Route exact path="/" render={ routerProps => {
            return(
              <CurrentUserPage {...routerProps}
                currentUser={this.props.currentUser}
                addPet={this.props.addPet}
                deletePet={this.props.deletePet}
                updateUser={this.props.updateUser}
              />
            )
          }} />

          <Route exact path="/users" render={ routerProps => <AllOwnersCard {...routerProps} users={this.props.allUsers}/>} />

          <Route exact path="/users/:id" render={ routerProps => <OwnerPage {...routerProps} users={this.props.allUsers}/>} />

          <Route exact path="/pets" render={routerProps => <AllPetsCard {...routerProps} pets={this.props.allPets}/>} />

          <Route exact path="/pets/:id" render={routerProps => <PetPage {...routerProps} pets={this.props.allPets}/>} />

        </div>
      </Router>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: "LOG_OUT"}),
    updateUser: (user_id, formData) => dispatch(updateUser(user_id, formData)),
    addPet: (user_id, pet_info)=> dispatch(addPet(user_id, pet_info)),
    deletePet: id => dispatch(deletePet(id)),
    getAllUsers: () => dispatch(getAllUsers()),
    getAllPets: () => dispatch(getAllPets())
  }
}

const mapStateToProps = state => {
  return {
    allPets: state.allPets,
    allUsers: state.allUsers,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer)
