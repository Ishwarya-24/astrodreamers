import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link as LinkComponent } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';


import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import CheckoutScreen from './CheckoutScreen';



const mainFeaturedPost = {
  title: 'Grow your career with best in class courses..',
  description:
    "Best platform to learn coding and business analytics courses.",
  image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  imageText: 'main image description',
  
};

const featuredPosts = [
  {
    title: 'Python',
   
    description:
      'Learn more about python and build your own apps.',
    image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'SQL',
    
    description:
      'Learn more about SQL and create your own databases.',
    image: 'https://media.istockphoto.com/photos/wooden-mannequin-demonstrating-this-word-picture-id185085453?s=612x612',
    imageLabel: 'Image Text',
  },
  {
    title: 'Java Script',
    
    description:
      'Learn more about java script and build your own websites.',
    image: 'https://media.istockphoto.com/photos/stylized-3d-javascript-icon-design-picture-id1413514720',
    imageLabel: 'Image Text',
  },
  {
    title: 'Java',
    
    description:
      'Learn more about Java and work on web development. ',
    image: 'https://media.istockphoto.com/photos/computer-with-elements-of-program-code-on-the-screen-and-the-java-a-picture-id1335247101?s=612x612',
    imageLabel: 'Image Text',
  },
  
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Our courses are specifically designed to make you build real-life projects from start to finish. We also provide certificate for the same..',
  
  
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost component='a' href='/docs' key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }} component={LinkComponent} to='/Docs'>


          </Grid>
        </main>
      </Container>

    </ThemeProvider> 
  )}