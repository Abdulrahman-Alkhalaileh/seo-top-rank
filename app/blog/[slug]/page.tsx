import { Container, Typography } from "@mui/material";
import { Metadata } from "next";
import SEO from "@/components/SEO";

// Define the type for your post
interface PostType {
  [key: string]: { title: string; content: string };
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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

  const post = posts[slug];

  return {
    title: post.title,
    description: post.content.substring(0, 150),
    openGraph: {
      images: ["https://www.example.com/og-image.jpg"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
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

  const post = posts[slug];

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.substring(0, 150)}
        url={`https://www.example.com/blog/${slug}`}
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
