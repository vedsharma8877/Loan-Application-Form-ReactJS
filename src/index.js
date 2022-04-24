import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoanPurpose from "./components/loan-purpose";
import FirstName from "./components/first-name";
import LastName from "./components/last-name";
import MiddleName from "./components/middle-name";
import DOB from "./components/dob";
import Email from "./components/email";
import HomePhone from "./components/home-phone";
import MobilePhone from "./components/mobile-phone";
import SSN from "./components/ssn";
import StreetAddress1 from "./components/street-address-1";
import StreetAddress2 from "./components/street-address-2";
import City from "./components/city";
import State from "./components/state";
import Zip from "./components/zip";
import ResidenceDate from "./components/residence-date";
import ResidenceType from "./components/residence-type";
import Buttton from "./components/button";
import Header from "./components/header";
import Foooter from "./components/foooter";
// import ParentForm from './components/parentform';
import { Container, Typography, Grid, Paper } from "@mui/material";
import reportWebVitals from "./reportWebVitals";

import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterMoment}>
  <React.StrictMode>
    <Header />
    <Container>
      <Paper>
       {<center><h1>How much do you need?</h1></center>}
        <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
          <Grid item md={6}>
            <App />
          </Grid>
          <Grid item md={'auto'}>
            <LoanPurpose />
          </Grid> 
        </Grid> 
        {<h1></h1>}
        {
          <center>
            <h1>"Tell us about yourself."</h1>
          </center>
        }
        <Grid container>
          <Grid item xs={4}>
            <FirstName />
          </Grid>
          <Grid item xs={4}>
            <MiddleName />
          </Grid>
          <Grid item xs={4}>
            <LastName />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <DOB />
          </Grid>
          <Grid item xs={4}>
            <Email />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <HomePhone />
          </Grid>
          <Grid item xs={4}>
            <MobilePhone />
          </Grid>
          <Grid item xs={4}>
            <SSN />
          </Grid>
        </Grid>
        {
          <center>
            <h1>"What is your home address?"</h1>
          </center>
        }
          <StreetAddress1 />
          <StreetAddress2 />
          <Grid container>
            <Grid item xs={4}>
              <City />
            </Grid>
            <Grid item xs={4}>
              <State />
            </Grid>
            <Grid item xs={4}>
              <Zip />
            </Grid>
          </Grid>
        <Grid container>
          <Grid item xs={4}>
            <ResidenceDate />
          </Grid>
          <Grid item xs={4}>
            <ResidenceType />
          </Grid>
        </Grid>
        {<h1></h1>}
        <Buttton />
        {<p>  </p>}
        {<h1></h1>}
     </Paper>
        
    </Container>
    <Foooter />
  </React.StrictMode></LocalizationProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
