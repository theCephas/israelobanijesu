import { Cantarell } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Cantarell({ subsets: ["latin"], weight: "400" });

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
