import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



 function AboutScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
          ABOUT US
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'As an education provider in computer science, our goal is to train people to apply their knowledge to solve complex real-world problems through building apps, websites and creating databases.'}<br></br><br></br>
        <Typography variant="h3" component="h2" gutterBottom>
          OUR MENTORS
        </Typography>
          {'We have a team of instructors who is now growing to include world-class experts from industry.'}
        </Typography>
        
        
      </Container>
      
    </Box>
  );
}

export default AboutScreen;