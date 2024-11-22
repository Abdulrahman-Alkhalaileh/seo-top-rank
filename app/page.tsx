// app/page.tsx
import SEO from '../components/SEO';
import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <>
      <SEO
        title="Healthy Eating and Nutrition - Home"
        description="Discover healthy eating tips and nutrition advice to help you live a better life."
        url="https://www.example.com/"
        image="https://www.example.com/og-image.jpg"
      />
      <Container>
        <Typography variant="h1" gutterBottom>
          Welcome to Healthy Eating and Nutrition
        </Typography>
        <Typography variant="h6" paragraph>
          Discover tips and articles to improve your diet and lifestyle. Get started with a healthier you today.
        </Typography>
        <Button variant="contained" color="primary" href="/about">
          Learn More
        </Button>
      </Container>
    </>
  );
}
