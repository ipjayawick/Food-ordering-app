import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import RatingComponent from "./RatingComponent";

export default function CardComponent({
  imgUrl,
  imgAlt,
  name,
  address,
  rating,
}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" width="100%" image={imgUrl} alt={imgAlt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <RatingComponent rating={rating} />
      </CardActions>
    </Card>
  );
}
