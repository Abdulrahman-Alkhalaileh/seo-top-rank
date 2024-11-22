// app/contact/page.tsx
import { Button, Container, TextField, Typography } from "@mui/material";
import SEO from "../../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us - Healthy Eating and Nutrition"
        description="Get in touch with us to learn more about healthy eating and nutrition."
        url="https://www.example.com/contact"
        image="https://www.example.com/contact-og-image.jpg"
      />
      <Container>
        <Typography variant="h1" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Container>
    </>
  );
}
