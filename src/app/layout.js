import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Israel Oluwasami",
  description: "Full Stack Developer | Code Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
