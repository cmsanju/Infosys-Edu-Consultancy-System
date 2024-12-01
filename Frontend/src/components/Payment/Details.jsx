import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  title: {
    fontSize: 14,
  },
  text: {
    width: 350,
    margin: "10px",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
});

export default function Details({ formData, handleInputChange }) {
  const classes = useStyles();
  const [errors, setErrors] = useState({}); // To track errors for validation

  const validateField = (fieldName, value) => {
    let error = "";
    if (!value.trim()) {
      if (fieldName === "username") error = "Username is required";
      if (fieldName === "email") error = "Email is required";
      if (fieldName === "phoneNumber") error = "Phone number is required";
    }
    return error;
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          User Details
        </Typography>

        {/* Username Field */}
        <TextField
          id="username"
          label="Username"
          variant="filled"
          className={classes.text}
          name="username" // Match the name key in formData
          value={formData.username} // Bind to formData
          onChange={handleInputChange} // Use handler from props
          onBlur={handleBlur} // Trigger validation on blur
          error={!!errors.username} // Material-UI error styling
          helperText={errors.username} // Display error message
        />
        <br />

        {/* Email Field */}
        <TextField
          id="email"
          label="Email"
          variant="filled"
          className={classes.text}
          name="email" // Match the name key in formData
          value={formData.email} // Bind to formData
          onChange={handleInputChange} // Use handler from props
          onBlur={handleBlur} // Trigger validation on blur
          error={!!errors.email} // Material-UI error styling
          helperText={errors.email} // Display error message
        />
        <br />

        {/* Phone Field */}
        <TextField
          id="phoneNumber"
          label="Phone"
          variant="filled"
          className={classes.text}
          name="phoneNumber" // Match the name key in formData
          value={formData.phoneNumber} // Bind to formData
          onChange={handleInputChange} // Use handler from props
          onBlur={handleBlur} // Trigger validation on blur
          error={!!errors.phoneNumber} // Material-UI error styling
          helperText={errors.phoneNumber} // Display error message
        />
        <br />
      </CardContent>
    </Card>
  );
}
