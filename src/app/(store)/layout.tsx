import { Inter } from "next/font/google";
import TNavbar from "./_components/TNavbar/TNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TNavbar/>
        {children}
      </body>
    </html>
  );
}
