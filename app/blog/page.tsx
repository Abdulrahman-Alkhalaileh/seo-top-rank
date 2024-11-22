// app/blog/page.tsx

import ArticleCard from "@/components/ArticleCard";
import SEO from "@/components/SEO";
import { Container, Grid, Typography } from "@mui/material";

export default function Blog() {
  const posts = [
    { slug: 'healthy-snacking', title: 'Healthy Snacking for Energy' },
    { slug: 'nutrition-basics', title: 'Understanding Nutrition Basics' },
  ];

  return (
    <>
      <SEO
        title="Healthy Eating and Nutrition Blog"
        description="Browse articles about healthy eating and nutrition."
        url="https://www.example.com/blog"
        image="https://www.example.com/blog-og-image.jpg"
      />
      <Container>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.slug}>
              <ArticleCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
