import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-svh px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
};

export default AuthLayout;
