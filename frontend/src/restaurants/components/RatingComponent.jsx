import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function RatingComponent({ rating }) {
    const [value, setValue] = React.useState(rating);

    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            <Rating
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
}
