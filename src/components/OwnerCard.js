import React from "react";
import {Link} from 'react-router-dom'
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function OwnerCard(props) {
  const classes = useStyles();

  return (
    <Card style={{width: "20rem"}}>
      <CardBody>
        <h4 className={classes.cardTitle}>{props.name}</h4>
        <p>
          <strong>{props.email}</strong>
        </p>
        <p>
          {props.current_address}
        </p>
        <Link key={props.id} to={`users/${props.id}`}><Button color='info'>Go To Owner Page</Button></Link>
      </CardBody>
    </Card>
  );
}
