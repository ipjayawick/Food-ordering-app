import {
  Container,
  Grid,
} from "@mui/material";
import BannerComponent from "../components/BannerComponent";
import CardComponent from "../components/CardComponent";

const bannerData = {
  title: "Sahana",
  address: "Molpe",
  imgUrl: "/images/restaurants/1.jfif",
};

const cardData = [
  {
    imgUrl: "/images/meals/friedrice.jpg",
    imgAlt: "meal",
    name: "Chicken Fried Rice",
    rating: 4,
  },
  {
    imgUrl: "/images/meals/friedrice.jpg",
    imgAlt: "meal",
    name: "Egg Fried Rice",
    rating: 4,
  },
  {
    imgUrl: "/images/meals/friedrice.jpg",
    imgAlt: "meal",
    name: "Vegetable Fried Rice",
    rating: 4,
  },
  {
    imgUrl: "/images/meals/friedrice.jpg",
    imgAlt: "meal",
    name: "Fish Fried Rice",
    rating: 4,
  },
];

function MealsPage() {
  return (
    <>
      <Container>
        <BannerComponent
          title={bannerData.title}
          address={bannerData.address}
          imgUrl={bannerData.imgUrl}
        />
      </Container>

      <Container>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardComponent
                imgUrl={card.imgUrl}
                imgAlt={card.imgAlt}
                name={card.name}
                rating={card.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default MealsPage;
