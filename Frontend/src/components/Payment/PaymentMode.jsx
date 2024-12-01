import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  radio: {
    "&.MuiRadio-root": {
      color: "#212ea0", // Custom radio button color
    },
    "&.Mui-checked": {
      color: "#212ea0", // Custom color for checked state
    },
  },
}));

export default function PaymentMode() {
  const classes = useStyles();
  const [paymentMode, setPaymentMode] = React.useState("card"); // Default to card payment

  const handleChange = (event) => {
    setPaymentMode(event.target.value); // Update payment mode based on selected option
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Payment Mode</FormLabel>
          <RadioGroup value={paymentMode} onChange={handleChange}>
            <FormControlLabel
              control={<Radio className={classes.radio} />}
              label="Credit / Debit Card"
              value="card" // Value for Credit/Debit Card
            />
            <FormControlLabel
              control={<Radio className={classes.radio} />}
              label="UPI"
              value="upi" // Value for UPI
            />
          </RadioGroup>
          <FormHelperText>* COD option is currently unavailable</FormHelperText>
        </FormControl>
      </CardContent>
    </Card>
  );
}
