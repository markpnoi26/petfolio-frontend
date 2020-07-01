import React from 'react'
import LogInCard from '../components/LogInCard'
import SignUpCard from '../components/SignUpCard'
import {connect} from 'react-redux'

// async-actions
import getCurrentUser from "async-actions/getCurrentUser"

class LogInContainer extends React.Component {

  render() {
    return(
      <div>
        <LogInCard {...this.props}/>
        <SignUpCard {...this.props} />
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(null, mapDispatchToProps)(LogInContainer)
