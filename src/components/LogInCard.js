import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

class LogInCard extends React.Component {

  constructor() {
     super()
     this.state = {
       email: "",
       password: ""
     }
   }

   emailOnChangeHandler = event => {
     this.setState({
       email: event.target.value
     })
   }

   passwordOnChangeHandler = event => {
     this.setState({
       password: event.target.value
     })
   }

   onClickHandler = event => {
     event.preventDefault()
     if (this.state.email === "admin" && this.state.password === "admin") {
      this.props.getCurrentUser()
     }
     this.setState({
       email: "",
       password: ""
     })
   }

   

  render() {
    const {classes} = this.props
    return (
      <div id="navbar" className={classes.navbar}>
        <Header
          brand="Welcome to PetFolio"
          color="info"
          rightLinks={
            <div>
              <CustomInput
                white
                formControlProps={{
                  className: classes.formControl
                }}
                inputProps={{
                  onChange: this.emailOnChangeHandler,
                  value: this.state.email,
                  placeholder: "Email",
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                  autoComplete: "off"
                }}
              />
              <CustomInput
                white
                formControlProps={{
                  className: classes.formControl
                }}
                inputProps={{
                  onChange: this.passwordOnChangeHandler,
                  value: this.state.password,
                  placeholder: "Password",
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  ),
                  autoComplete: "off"
                }}
              />
              <Button onClick={this.onClickHandler}round color="primary">
                Log In
              </Button>
            </div>
          }
        />
      </div>
    );
  }
}


export default withStyles(styles)(LogInCard)
