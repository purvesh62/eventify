import React, { useState } from "react";
// import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiPhoneNumber from "material-ui-phone-number";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link to="/">Eventify</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignUpStart = () => {
  const navigate = useNavigate();

  const classes = useStyles();
  const [userType, setUserType] = useState("");

  const handleUserType = (type) => {
    setUserType(type);
  };

  // ********************************************* SignUp Attendee *********************************************

  const emailValidation = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);


  const handleSubmitAttendee = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get("firstName"),
      lastname: data.get("lastName"),
      countryCode: data.get("countryCode"),
      phonenumber: data.get("phoneNumber"),
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/login");
  };

  const handleSubmitOrganizer = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get("firstName"),
      lastname: data.get("lastName"),
      countryCode: data.get("countryCode"),
      phonenumber: data.get("phoneNumber"),
      email: data.get("email"),
      password: data.get("password"),
      
      organizer: data.get("organizer"),
      occupation: data.get("occupation"),
      about: data.get("about"),
      city: data.get("city"),
      state: data.get("state"),
      
    });
    navigate("/login");
  };
  const handlePhoneNumberChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9 +()-]/g, "");
    setPhoneNumber(newValue);
  };

  function handleCountryCodeChange(value) {
    console.log(value);
    setCountryCode(value);
  }

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    // setEmail(newValue);
    if (!emailValidation.test(newValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (event) => {
    const newValue = event.target.value;
    setPassword(newValue);
    if (newValue.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // *****************************************************************************************************************

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          align="center"
          justify="center"
          alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper
              className={classes.paper}
              onClick={() => handleUserType("Attendee")}
              style={{
                backgroundColor:
                  userType === "Attendee" ? "#1976d2" : "#f0f0f0",
                color: userType === "Attendee" ? "#ffffff" : "#000000",
              }}>
              <Typography variant="h4">Attendee</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              className={classes.paper}
              onClick={() => handleUserType("Organizer")}
              style={{
                backgroundColor:
                  userType === "Organizer" ? "#1976d2" : "#f0f0f0",
                color: userType === "Organizer" ? "#ffffff" : "#000000",
              }}>
              <Typography variant="h4">Organizer</Typography>
            </Paper>
          </Grid>
        </Grid>
        {/* <Grid align="center" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={!userType}
            style={{ marginTop: "2rem" }}
            onClick={() => handleSubmit(userType)}>
            Continue as {userType}
          </Button>
        </Grid> */}
      </Container>

      {/* ********************************************* Signup Attendee ********************************************* */}
      {userType === "Attendee" && (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmitAttendee}
                sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <MuiPhoneNumber defaultCountry={'us'} onChange={handleCountryCodeChange}/> */}
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      fullWidth
                      required
                      name="phoneNumber"
                      autoFocus
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MuiPhoneNumber
                              value={countryCode}
                              id="countryCode"
                              name="countryCode"
                              defaultCountry={"ca"}
                              onChange={handleCountryCodeChange}
                            />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={
                        emailError && "Please enter valid email address"
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      fullWidth
                      required
                      error={passwordError}
                      helperText={
                        passwordError &&
                        "Password must be at least 6 characters"
                      }
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login">Already have an account? Sign in</Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}

      {/* ********************************************* Signup Organizer ********************************************* */}
      {userType === "Organizer" && (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmitOrganizer}
                sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <MuiPhoneNumber defaultCountry={'us'} onChange={handleCountryCodeChange}/> */}
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      fullWidth
                      required
                      name="phoneNumber"
                      autoFocus
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MuiPhoneNumber
                              value={countryCode}
                              id="countryCode"
                              name="countryCode"
                              defaultCountry={"ca"}
                              onChange={handleCountryCodeChange}
                            />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={
                        emailError && "Please enter valid email address"
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      fullWidth
                      required
                      error={passwordError}
                      helperText={
                        passwordError &&
                        "Password must be at least 6 characters"
                      }
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="organization"
                      label="Organization"
                      name="organization"
                      autoComplete="organization"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="occupation"
                      label="Occupation"
                      name="occupation"
                      autoComplete="occupation"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="city-name"
                      name="city"
                      fullWidth
                      id="city"
                      label="City"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                      autoComplete="state-name"
                    />
                  </Grid>
                  <Grid item sm={20}>
                    <TextField
                    fullWidth
                      id="outlined-multiline-static"
                      label="About"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login">Already have an account? Sign in</Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
};

export default SignUpStart;
