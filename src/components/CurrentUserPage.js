import React from "react";
import classNames from "classnames";
import {Link} from 'react-router-dom'
import combineStyles from 'assets/combine-function/combineStyles'
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Explore from "@material-ui/icons/Explore";
import Pets from "@material-ui/icons/Pets";
import Build from "@material-ui/icons/Build";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import profile from "assets/img/admin.jpg";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

// async-actions


class CurrentUserPage extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      about_me: props.currentUser.about_me,
      current_address: props.currentUser.current_address,
      pet_name: "",
      pet_breed: "",
      pet_care: ""
    }
  }

  aboutMeChange = event => {
    this.setState({
      about_me: event.target.value
    })
  }

  addressChange = event => {
    this.setState({
      current_address: event.target.value
    })
  }

  petNameChange = event => {
    this.setState({
      pet_name: event.target.value
    })
  }

  petBreedChange = event => {
    this.setState({
      pet_breed: event.target.value
    })
  }

  petCareChange = event => {
    this.setState({
      pet_care: event.target.value
    })
  }

  onClickHandler = (user_id) => {
    alert("You have Added a Pet!")
    this.props.addPet(user_id, {pet_name: this.state.pet_name, pet_care: this.state.pet_care, pet_breed: this.state.pet_breed})
    this.setState({
      pet_name: "",
      pet_breed: "",
      pet_care: ""
    })
  }

  submitHandler = (user_id) => {
    alert("Your Profile has been updated")
    this.props.updateUser(user_id, this.state)
  }

  deletePet = (id) => {
    this.props.deletePet(id)
  }

  render() {
    const {classes} = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div>
      <Parallax small filter image={require("assets/img/dog.jpg")} />
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{this.props.currentUser.name}</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div id="nav-tabs">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                </h3>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "About me",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter}>
                          {this.props.currentUser.about_me}
                        </p>
                      )
                    },
                    {
                      tabName: "Current Address",
                      tabIcon: Explore,
                      tabContent: (
                        <p className={classes.textCenter}>
                          {this.props.currentUser.current_address}
                        </p>
                      )
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                </h3>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Pets",
                      tabIcon: Pets,
                      tabContent: (
                        <ul className={classes.textCenter}>
                          {this.props.currentUser.pets.map(pet => {
                            return(
                              <div key={pet.id} className={classes.container}>
                                <GridContainer justify="flex-start">
                                  <GridItem>
                                    <Link to={`/pets/${pet.id}`}>
                                      <h5>
                                        Name: <strong> {pet.name} </strong> - Breed: <strong> {pet.animal_type} </strong>
                                      </h5>
                                    </Link>
                                  </GridItem>
                                  <GridItem>
                                    <Button onClick={() => this.deletePet(pet.id)} justIcon round><Close style={{color: "#FFFFFF"}}/></Button>
                                  </GridItem>
                                </GridContainer>
                              </div>
                            )
                          })}
                        </ul>
                      )
                    },
                    {
                      tabName: "Add Pet",
                      tabIcon: Add,
                      tabContent: (
                        <div>
                          <CustomInput
                            labelText="Pet Name"
                            id="pet_name"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: this.state.pet_name,
                              onChange: this.petNameChange
                            }}
                          />
                          <CustomInput
                            labelText="Pet Breed"
                            id="pet_breed"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: this.state.pet_breed,
                              onChange: this.petBreedChange
                            }}
                          />
                          <CustomInput
                            labelText="Pet Care Instructions"
                            id="pet_care"
                            formControlProps={{
                              fullWidth: true,
                              className: classes.textArea
                            }}
                            inputProps={{
                              value: this.state.pet_care,
                              onChange: this.petCareChange,
                              multiline: true,
                              rows: 5
                            }}
                          />
                          <ul className={classes.textCenter}>
                            <Button onClick={() => this.onClickHandler(this.props.currentUser.id)} round color='primary'>Add Pet</Button>
                          </ul>
                        </div>
                      )
                    },
                    {
                      tabName: "Edit Profile",
                      tabIcon: Build,
                      tabContent: (
                        <div>
                          <CustomInput
                            labelText="About Me"
                            id="message"
                            formControlProps={{
                              fullWidth: true,
                              className: classes.textArea
                            }}
                            inputProps={{
                              value: this.state.about_me,
                              onChange: this.aboutMeChange,
                              multiline: true,
                              rows: 5
                            }}
                          />
                          <CustomInput
                            labelText="Address"
                            id="address"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: this.addressChange,
                              value: this.state.current_address
                            }}
                          />
                          <Button onClick={() => this.submitHandler(this.props.currentUser.id)} round color='primary'>Submit Changes</Button>
                        </div>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }


}

// this approach combines both styles to accomplish the goal from template.
const combinedStyles = combineStyles(stylesA, stylesB);

export default withStyles(combinedStyles)(CurrentUserPage);
