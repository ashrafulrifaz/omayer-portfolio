import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omayer - Professional Video Editor",
  description: "professional Video Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-main">{children}</body>
    </html>
  );
}
