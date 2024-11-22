// app/about/page.tsx
import { Container, Typography } from '@mui/material';
import SEO from '../../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Healthy Eating and Nutrition"
        description="Learn about our mission to promote healthy eating habits and nutrition education."
        url="https://www.example.com/about"
        image="https://www.example.com/about-og-image.jpg"
      />
      <Container>
        <Typography variant="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to help you achieve a balanced diet, leading to a healthy lifestyle. We provide educational resources about healthy eating, practical nutrition tips, and expert advice.
        </Typography>
      </Container>
    </>
  );
}
