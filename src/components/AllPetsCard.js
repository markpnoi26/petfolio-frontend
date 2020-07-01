import React from 'react'
import combineStyles from 'assets/combine-function/combineStyles'

import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search"

import PetCard from 'components/PetCard'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

class AllPetsCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchBar: "",
      searchedPet: props.pets
    }
  }

  renderGridItems() {
    return (
      this.state.searchedPet.map(pet => {
        return(
          <div key={pet.id}>
            <GridItem xs={12} sm={12} md={6}>
              <PetCard {...this.props.match} {...pet}/>
            </GridItem>
          </div>
        )
      })
    )
  }

  changeHandler = event => {
    let filtered = this.props.pets.filter(pet => pet.animal_type.toLowerCase().startsWith(event.target.value.toLowerCase()))
    this.setState({
      searchBar: event.target.value,
      searchedPet: filtered
    })
  }

  render() {
    const {classes} = this.props;
    return(
      <div className={classes.container}>
        <div id="nav-tabs">
          <CustomInput
                black
                formControlProps={{
                  className: classes.formControl
                }}
                inputProps={{
                  onChange: this.changeHandler,
                  value: this.state.searchBar,
                  placeholder: "Search Pet by Breed...",
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                  autoComplete: "off"
                }}
              />
          <GridContainer>
            {this.renderGridItems()}
          </GridContainer>
        </div>
      </div>
    )
  }

}

const combinedStyles = combineStyles(stylesA, stylesB);

export default withStyles(combinedStyles)(AllPetsCard);
