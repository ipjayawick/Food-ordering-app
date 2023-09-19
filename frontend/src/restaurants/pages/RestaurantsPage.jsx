import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
} from "@mui/material";
import CardComponent from "../components/CardComponent";

const cardData = [
    {
        imgUrl: "/images/restaurants/1.jfif",
        imgAlt: "shop",
        name: "Sahana",
        address: "Molpe",
        rating: 4,
    },
    {
        imgUrl: "/images/restaurants/1.jfif",
        imgAlt: "shop",
        name: "Mac",
        address: "Molpe",
        rating: 3,
    },
    {
        imgUrl: "/images/restaurants/1.jfif",
        imgAlt: "shop",
        name: "Hela Batha",
        address: "Molpe",
        rating: 4,
    },
    {
        imgUrl: "/images/restaurants/1.jfif",
        imgAlt: "shop",
        name: "Millenium",
        address: "Molpe",
        rating: 4,
    },
    {
        imgUrl: "/images/restaurants/1.jfif",
        imgAlt: "shop",
        name: "Binu",
        address: "Molpe",
        rating: 2,
    },
    {
        imgUrl: "/images/restaurants/1.jfif",
        imgAlt: "shop",
        name: "Vinu",
        address: "Molpe",
        rating: 3,
    },
];

function RestaurantsPage() {
    return (
        <Container maxWidth="none">
            <Grid container spacing={3}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardComponent
                            imgUrl={card.imgUrl}
                            imgAlt={card.imgAlt}
                            name={card.name}
                            rating={card.rating}
                            address={card.address}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default RestaurantsPage;
