import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Session from '../components/session'
function AddOrderPage() {
    return (
        <Container maxWidth="none">
            <Stack direction="row" sx={{ mb: 5 }}>
                <Typography variant='h4'>
                    Order Session Page
                </Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <Button >Create a Trip</Button>
                </Box>
            </Stack>
            <Session />
            <Button color='error' sx={{ float: "right" }} >End Session</Button>
        </Container>
    )
}

export default AddOrderPage 