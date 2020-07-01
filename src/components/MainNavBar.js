import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// @material-ui/icons
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";

import {Link} from 'react-router-dom'

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

class MainNavBar extends React.Component {

  constructor() {
     super()
     this.state = {
      text: ""
     }
   }

   onClickHandler = () => {
     this.props.logOut()
   }

  render() {
    const {classes} = this.props
    return (
      <div id="navbar" className={classes.navbar}>
        <Header
          brand=""
          color="primary"
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Link
                  to="/"
                  className={classes.navLink}
                  color="transparent"
                >
                  Home
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  to="/users"
                  className={classes.navLink}
                  color="transparent"
                >
                  Owners
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  to="/pets"
                  className={classes.navLink}
                  color="transparent"
                >
                    Pets
                </Link>
              </ListItem>
            </List>
          }
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.registerNavLink}
                  onClick={this.onClickHandler}
                  color="rose"
                  round
                >
                  Log Out
                </Button>
              </ListItem>
            </List>
          }
        />
      </div>
    );
  }
}


export default withStyles(styles)(MainNavBar)
