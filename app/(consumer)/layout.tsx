import Footer from "@/components/main/Footer/page";
import MenuBar from "@/components/main/header/Menubar/page";
import React from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <MenuBar/>
      {children}
      <Footer/>
    </div>
  );
}
