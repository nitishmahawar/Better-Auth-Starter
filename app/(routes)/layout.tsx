import { Navbar } from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-svh pt-16">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
