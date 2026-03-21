import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alw Agency — Tech & Software",
  description: "Agency web development yang mengubah ide bisnis menjadi produk digital yang fungsional dan berdampak.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
