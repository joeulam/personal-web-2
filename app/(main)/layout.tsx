import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joey Lam — Software Engineer",
  description:
    "Full-stack engineer and Computer Science + Economics student at Boston University. I design and ship web products end to end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="1d5a711d-7f27-401c-a0c0-712b1b844992"
        strategy="afterInteractive"
      />
      {isProduction && (
        <script
          defer
          src="https://joey-analytics-cloud.vercel.app/script.js"
          data-website-id="653d6b88-c3d0-4ad8-af65-af7ba13380be"
        ></script>
      )}
      <body>{children}</body>
    </html>
  );
}
