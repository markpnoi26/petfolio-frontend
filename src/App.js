import React from "react";
import {connect} from 'react-redux'

import "assets/scss/material-kit-react.scss?v=1.8.0";
import LogInContainer from './containers/LogInContainer'
import ApplicationContainer from './containers/ApplicationContainer'


class App extends React.Component {

  renderContainer() {
    if (this.props.currentlyLoggedIn) {
      return <ApplicationContainer />
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
  return{
    currentlyLoggedIn: state.currentlyLoggedIn
  }
}

export default connect(mapStateToProps)(App)
