import { Manrope } from "next/font/google";
import "@/app/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Ehasanul Islam - Professional Video Editor",
  description: "professional Video Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
