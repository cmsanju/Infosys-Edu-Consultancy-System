import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Details from "./Details";
import PaymentMode from "./PaymentMode";
import Success from "./Success";
import PayCard from "./Paycard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function getSteps() {
  return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function getStepContent(step, formData, handleInputChange) {
  switch (step) {
    case 0:
      return <Details formData={formData} handleInputChange={handleInputChange} />;
    case 1:
      return <PaymentMode />;
    case 2:
      return <PayCard />;
    case 3:
      return <Success />;
    default:
      return "Unknown step";
  }
}

export default function Form() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const steps = getSteps();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateDetails = () => {
    const { username, email, phoneNumber } = formData;
    if (!username.trim() || !email.trim() || !phoneNumber.trim()) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      // Validate details before moving to the next step
      if (!validateDetails()) return;
    }
  
    if (activeStep === steps.length - 2) {
      setIsSubmitting(true);
      setSubmissionError("");
  
      try {
        const response = await fetch("http://localhost:8085/api/payments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          const errorText = await response.text(); // Read the error message
          console.error("Backend Error Response:", errorText);
          throw new Error(errorText || "Unknown error.");
        }
  
        // Try to parse the response
        try {
          const result = await response.json(); // Parse the response
          console.log("Submission Successful:", result);
        } catch (parseError) {
          console.warn("Failed to parse response JSON:", parseError.message);
        }
  
        alert("Details submitted successfully!");
        setActiveStep((prevStep) => prevStep + 1);
      } catch (error) {
        console.error("Submission Error:", error.message);
        setSubmissionError(error.message || "An unexpected error occurred. Please try again.");
        // Allow the user to move to the next step even if there’s an error
        setActiveStep((prevStep) => prevStep + 1);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
      const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <div className={classes.root}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Card variant="outlined" style={{ marginTop: "15%" }}>
            <CardContent>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep, formData, handleInputChange)}
              </Typography>
              {submissionError && (
                <Typography color="error" style={{ marginTop: "10px" }}>
                  {submissionError}
                </Typography>
              )}
              <div className={classes.actions}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  disabled={isSubmitting}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
