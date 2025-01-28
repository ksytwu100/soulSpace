import { useState } from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import Auth from "../../utils/auth";

const CarRating = (props) => {
  // State to manage the controlled rating if the user is logged in
  const [rating, setRating] = useState(props.value);

  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();

  const handleRatingChange = (event, newValue) => {
    if (isLoggedIn) {
      setRating(newValue);
    }
  };

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name={isLoggedIn ? "uncontrolled" : "read-only"}
        value={isLoggedIn ? rating : props.value}
        precision={0.1}
        onChange={handleRatingChange}
        readOnly={!isLoggedIn}
      />
    </Box>
  );
};

export default CarRating;