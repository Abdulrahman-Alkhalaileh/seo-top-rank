// components/ArticleCard.tsx
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

interface ArticleCardProps {
  post: { slug: string; title: string };
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </CardContent>
    </Card>
  );
}
