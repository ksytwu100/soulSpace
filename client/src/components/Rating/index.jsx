import Rating from '@mui/material/Rating';
import { Box } from "@mui/material";

const CarRating = (props) => {
    return (

        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating name="read-only" value={props.value} precision={0.1} readOnly />
        </Box>
    );
}

export default CarRating;