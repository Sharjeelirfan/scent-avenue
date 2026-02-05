import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import icon from '../../public/assets/icon.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Scent Avenue",
  description: "Perfume Brand Scent Avenue",
  icons: {
    icon: "/assets/icon.png", 
    shortcut: "/assets/icon.png",
    apple: "/assets/icon.png",  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
