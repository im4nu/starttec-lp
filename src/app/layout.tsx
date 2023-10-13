import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StartTec | Soluções em Tecnologia",
  description:
    "A líder no mercado de desenvolvimento de softwares a mais de 7 anos",
  openGraph: {
    images: ["/images/mobilePreview.jpeg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <meta property="og:image:alt" content="About Acme" />

        <meta property="twitter:image:alt" content="About Acme" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
