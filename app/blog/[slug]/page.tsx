// app/blog/[slug]/page.tsx
import { Container, Typography } from "@mui/material";
import SEO from "@/components/SEO";

interface PostType {
  [key: string]: { title: string; content: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const posts: PostType = {
    "healthy-snacking": {
      title: "Healthy Snacking for Energy",
      content:
        "Learn the best healthy snacks to keep you energized throughout the day...",
    },
    "nutrition-basics": {
      title: "Understanding Nutrition Basics",
      content: "Nutrition is the cornerstone of a healthy life...",
    },
  };

  const post = posts[params.slug];

  return {
    title: post.title,
    description: post.content.substring(0, 150),
    url: `https://www.example.com/blog/${params.slug}`,
    image: "https://www.example.com/og-image.jpg",
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts: PostType = {
    "healthy-snacking": {
      title: "Healthy Snacking for Energy",
      content:
        "Learn the best healthy snacks to keep you energized throughout the day...",
    },
    "nutrition-basics": {
      title: "Understanding Nutrition Basics",
      content: "Nutrition is the cornerstone of a healthy life...",
    },
  };

  const post = posts[params.slug];

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.substring(0, 150)}
        url={`https://www.example.com/blog/${params.slug}`}
        image="https://www.example.com/og-image.jpg"
      />
      <Container>
        <Typography variant="h1">{post.title}</Typography>
        <Typography variant="body1" paragraph>
          {post.content}
        </Typography>
      </Container>
    </>
  );
}
