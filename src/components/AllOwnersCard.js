import React from 'react'
import combineStyles from 'assets/combine-function/combineStyles'

import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search"

import OwnerCard from 'components/OwnerCard'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import stylesA from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/profilePage.js";

class AllOwnersCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchBar: "",
      searchedUser: props.users
    }
  }

  componentDidMount() {
    this.setState({
      searchedUser: this.props.users
    })
  }

  renderGridItems() {
    return (
      this.state.searchedUser.map(user => {
        return(
          <div key={user.id}>
            <GridItem xs={12} sm={12} md={6}>
              <OwnerCard {...this.props.match} {...user}/>
            </GridItem>
          </div>
        )
      })
    )
  }

  changeHandler = event => {
    let filtered = this.props.users.filter(user => user.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
    this.setState({
      searchBar: event.target.value,
      searchedUser: filtered
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
              placeholder: "Search Owner by Name...",
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

export default withStyles(combinedStyles)(AllOwnersCard);
