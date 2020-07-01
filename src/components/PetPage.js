import React from "react";
import classNames from "classnames";
import {Link} from 'react-router-dom'
import combineStyles from 'assets/combine-function/combineStyles'
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Pets from "@material-ui/icons/Pets";
import Cake from "@material-ui/icons/Cake"
import Email from "@material-ui/icons/Email"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Parallax from "components/Parallax/Parallax.js";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

// async-actions


class CurrentPetPage extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      imageUrl: ""
    }
  }

  componentDidMount() {
    // it'd be better if I can "search for" breed image api
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(response => response.json())
      .then(response => response.message)
      .then(url => {
        this.setState({imageUrl: url})
      })
  }


  render() {
    const {classes} = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const matchId = this.props.match.params.id
    const matchedPet = this.props.pets.find(pet => pet.id === parseInt(matchId, 10))

    if (matchedPet) {
      return (
        <div>
        <Parallax small filter image={require("assets/img/dog1.jpg")} />
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={this.state.imageUrl} alt={matchedPet.breed} className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{matchedPet.name}</h3>
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
                        tabName: "Breed",
                        tabIcon: Pets,
                        tabContent: (
                          <p className={classes.textCenter}>
                            {matchedPet.animal_type}
                          </p>
                        )
                      },
                      {
                        tabName: "Age",
                        tabIcon: Cake,
                        tabContent: (
                          <p className={classes.textCenter}>
                            {matchedPet.age} years old
                          </p>
                        )
                      },
                      {
                        tabName: "Care Instructions",
                        tabIcon: Email,
                        tabContent: (
                          <p className={classes.textCenter}>
                            {matchedPet.pet_care}
                          </p>
                        )
                      }
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
                        tabName: "Owner",
                        tabIcon: Face,
                        tabContent: (
                          <ul className={classes.textCenter}>
                              <div className={classes.container}>
                                <GridContainer justify="flex-start">
                                  <GridItem>
                                    <Link to={`/users/${matchedPet.user.id}`}>
                                      <h5>
                                        Name: <strong> {matchedPet.user.name} </strong> - Email: <strong> {matchedPet.user.email} </strong>
                                      </h5>
                                    </Link>
                                  </GridItem>
                                </GridContainer>
                              </div>
                          </ul>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div>Loading Pets... </div>
      )
    }
  }


}

// this approach combines both styles to accomplish the goal from template.
const combinedStyles = combineStyles(stylesA, stylesB);

export default withStyles(combinedStyles)(CurrentPetPage);
