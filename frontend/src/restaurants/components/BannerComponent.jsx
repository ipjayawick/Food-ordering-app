import { Paper, Typography } from '@mui/material';

const BannerComponent = ({ title, address, imgUrl }) => {
  const bannerStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    height: '350px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
    borderRadius: '6px',
  };

  return (
    <div style={bannerStyle}>
      <Paper
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: Add a semi-transparent overlay
          padding: '20px', // Optional: Add padding to the Paper component
          position: 'absolute', // Position the Paper absolutely within the div
          bottom: 0, // Align the Paper to the bottom
          left: 0, // Align the Paper to the left
          margin: '10px'
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'left' }}>{title}</Typography>
        {address && <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>{address}</Typography>}
      </Paper>
    </div>
  );
};

export default BannerComponent;