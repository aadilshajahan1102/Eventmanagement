import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" component="h2" paragraph>
          This is a simple home page created using React and Material-UI.
        </Typography>
        <Button variant="contained" color="primary" href="#">
          Learn More
        </Button>
      </Box>
    </Container>
  );
}
