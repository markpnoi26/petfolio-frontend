import React from "react";
import ReactModal from 'react-modal'
import {connect} from 'react-redux'

import "assets/scss/material-kit-react.scss?v=1.8.0";
import LogInContainer from './containers/LogInContainer'
import ApplicationContainer from './containers/ApplicationContainer'


class App extends React.Component {

  renderContainer() {
    if (this.props.currentlyLoggedIn) {
      return <ApplicationContainer />
    } else if (this.props.currentlyFetching) {
      return (
          <ReactModal isOpen={
            this.props.currentlyFetching
          }>
            <h1>Loading demo user... please wait.</h1>
          </ReactModal>
      )
    } else {
      return <LogInContainer />
    }
  }

  render() {
    return(
      <React.Fragment>
        {this.renderContainer()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentlyLoggedIn: state.currentlyLoggedIn,
    currentlyFetching: state.currentlyFetching
  }
}

export default connect(mapStateToProps)(App)
