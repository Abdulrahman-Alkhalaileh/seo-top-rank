// app/layout.tsx
import { ReactNode } from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Healthy Eating and Nutrition",
  description: "Promote a healthy lifestyle with the best nutrition advice.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Main content passed to the layout */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
