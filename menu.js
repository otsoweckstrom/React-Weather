import React from "react";
import ReactDOM from "react-dom";
import {
  DropdownButton,
  MenuItem,
  Grid,
  Row,
  Col,
  Image,
  Button,
  Jumbotron
} from "react-bootstrap";

class Card extends React.Component {
  render() {
    return (
      <DropdownButton bsStyle="primary" title="Primary">
        <MenuItem eventKey="1">Lappeenranta</MenuItem>
        <MenuItem eventKey="2">Ebin</MenuItem>
        <MenuItem eventKey="3">Spurdo</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Spädrö</MenuItem>
      </DropdownButton>
    );
  }
}
export default Card;
