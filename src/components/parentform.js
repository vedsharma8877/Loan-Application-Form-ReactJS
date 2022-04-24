import React, { Component } from "react";
import { Grid, Button } from "@mui/material";
import InputPhoneField from "./example";

export default class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Phone: "",
      IsValidPhone: false,
    };
    this.handlePhoneNumberChange.bind(this);
  }

  handlePhoneNumberChange = (value, isValid) => {
    console.log(value);
    console.log(isValid);

    this.setState({ Phone: value, IsValidPhone: isValid });
  };

  render() {
    return (
      <Grid container>
        <Grid>
          <InputPhoneField
            placeholder=""
            helperText="(Required)"
            label="Phone"
            fieldName="Phone"
            handleChange={this.handlePhoneNumberChange}
            value={this.state.Phone}
          />
        </Grid>
      </Grid>
    );
  }
}
