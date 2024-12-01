import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import succlogo from "/src/assets/animat-checkmark.gif";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
  img: { width: "200px" },
  con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    position: "fixed",
    top: "20px",
    right: "-300px", // Start off-screen
    width: "250px",
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    fontSize: "14px",
    transition: "right 0.5s ease-in-out",
  },
  notificationVisible: {
    right: "20px", // Slide into view
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
});

export default function Success() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation(); // Get state passed via navigate
  const [showNotification, setShowNotification] = useState(false);
  const purchasedCourse = location.state?.purchasedCourse; // Extract the purchased course

  useEffect(() => {
    if (purchasedCourse) {
      // Get the userId from localStorage (you can adjust this to your user management system)
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.userId;

      if (userId) {
        // Retrieve the user's specific courses
        const existingCourses = JSON.parse(localStorage.getItem(`myCourses_${userId}`)) || [];
        const updatedCourses = [...existingCourses, purchasedCourse];

        // Store the updated courses in user-specific localStorage
        localStorage.setItem(`myCourses_${userId}`, JSON.stringify(updatedCourses));
      }

      // Show notification after a successful course purchase
      setShowNotification(true);

      // Hide the notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  }, [purchasedCourse]);

  const handleGoToCourses = () => {
    navigate("/"); // Navigate to MyCourses
  };

  return (
    <>
      {showNotification && (
        <div
          className={`${classes.notification} ${
            showNotification ? classes.notificationVisible : ""
          }`}
        >
          Course added successfully! Please check "My Courses".
        </div>
      )}
<Card className={classes.root}>
  <CardContent>
    <div className={classes.con}>
      <img src={succlogo} alt="Order Confirmed" className={classes.img} />
    </div>
    <Typography
      className={classes.title}
      variant="h2"
      color="success"
      gutterBottom
    >
      <b>Order Confirmed</b>
    </Typography>

  </CardContent>
</Card>

    </>
  );
}
