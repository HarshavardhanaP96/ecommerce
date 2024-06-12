import { Inter } from "next/font/google";
  import Topbar from "./_components/Topbar";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <Topbar/>
      <div className="flex">
        <Navbar/>  
        <div >{children}</div>
      </div>
      
    </div>
  );
}
