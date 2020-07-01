import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/dog4.jpg";

class SignUpCard extends React.Component {

  constructor(props) {
    super(props)
    const { classes } = props
    this.state = {
      cardAnimation: classes.cardHidden,
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  }

  nameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  emailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  passwordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  confirmChange = event => {
    this.setState({
      passwordConfirm: event.target.value
    })
  }

  signUpClick = () => {
    if (this.state.name === "admin" && this.state.email === "admin" && this.state.password === "admin" && this.state.passwordConfirm === "admin") {
      this.props.getCurrentUser()
    }
    this.setState({
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    })
  }

  componentDidMount() {
    setTimeout(() => this.setState({cardAnimation: ""}), 1500)
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "right center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="flex-end">
              <GridItem xs={12} sm={12} md={4}>
                <Card id="login-card" className={this.state.cardAnimation}>
                  <form className={classes.form}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h3>New User?</h3>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.nameChange,
                          value: this.state.name,
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.emailChange,
                          value: this.state.email,
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Enter Your Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.passwordChange,
                          value: this.state.password,
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

                      <CustomInput
                        labelText="Confirm Your Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.confirmChange,
                          value: this.state.passwordConfirm,
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
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button round color="primary" size="lg" onClick={this.signUpClick}>
                        Sign Up for an Account
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(SignUpCard)
