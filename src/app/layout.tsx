import { Rubik, Satisfy, Playfair } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Metadata } from "next";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

const playfairSans = Playfair({
  variable: "--font-playfair-sans",
  subsets: ["latin"],
});

const satisfySans = Satisfy({
  weight: "400",
  variable: "--font-satisfy-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Kira Glam Salon — Nail Salon in Amsterdam",
  description:
    "Welcome to Kira Glam — a cozy and professional nail salon in Amsterdam. We offer manicure, nail art, nail extensions, and more. Book your appointment online!",
  keywords: [
    "nail salon Amsterdam",
    "manicure Amsterdam",
    "nail salon Netherlands",
    "nail care Amsterdam",
    "nail art Amsterdam",
    "nail design Amsterdam",
    "nail extensions Amsterdam",
    "nail studio Amsterdam",
    "professional manicure Amsterdam",
    "nail styling Amsterdam",
    "beauty salon Amsterdam",
    "nail technician Amsterdam",
    "nail spa Amsterdam",
    "relaxing manicure Amsterdam",
  ].join(", "),
  openGraph: {
    title: "Kira Glam Salon",
    description:
      "Professional nail salon in Amsterdam — manicure, nail art, and nail extensions. Book your visit today!",
    url: "https://yourdomain.com",
    siteName: "Kira Glam Salon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kira Glam Salon interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rubikSans.variable} ${satisfySans.variable} ${playfairSans.variable}  `}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
