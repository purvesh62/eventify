/**
 * @author Arpitkumar Patel (B00927071)
 * A component that renders a form for creating a new password. The form includes
 * fields for entering and confirming a password, with options to toggle visibility
 * of the password fields. The component also includes validation for password length
 * and matching confirmation password.
 * @returns A React Fragment containing the new password form.
 */
import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function NewPassword(props) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    /**
     * Handles the change event for the password input field. Updates the password state
     * and checks if the new password meets the minimum length requirement. If the new password
     * is less than 6 characters, sets the password error state to true and clears the new password.
     */
    const handlePasswordChange = (event) => {
        const newValue = event.target.value;
        setPassword(newValue);
        if (newValue.length < 6) {
            setPasswordError(true);
            props.setNewPassword("");
        } else {
            setPassword(newValue);
            setPasswordError(false);
            props.setNewPassword(newValue);
        }
        if (newValue == confirmPassword) {
            setConfirmPasswordError(false);
        }
        else {
            setConfirmPasswordError(true);
            props.setNewPassword("");
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const newValue = event.target.value;
        setConfirmPassword(newValue);
        if (newValue == password) {
            setConfirmPasswordError(false);
            props.setNewPassword(newValue);
        }
        else{
            setConfirmPasswordError(true);
            props.setNewPassword("");
        }
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    /**
     * Renders a form for creating a new password with two input fields for password and confirm password.
     * @returns A React Fragment containing the form elements.
     */
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                New Password
            </Typography>
            <Grid container spacing={3}>
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
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Confirm Passrod"
                        variant="outlined"
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        fullWidth
                        required
                        error={confirmPasswordError}
                        helperText={
                            confirmPasswordError &&
                            "Confirm password must same as Password"
                        }
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    onClick={handleToggleConfirmPasswordVisibility}
                                    edge="end">
                                    {showConfirmPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
