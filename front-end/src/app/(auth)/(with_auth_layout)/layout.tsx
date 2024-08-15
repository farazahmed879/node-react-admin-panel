// src/app/layout.tsx
"use client";

import Sidebar from "@/components/sidebar/page";
import Dashboard from "./dashboard/page";

const AuthLayout = ({ children }: any) => {
  console.log('children',children)
  return (
    <>
      <Sidebar />
      {children ? children : <Dashboard />}
    </>
  );
};

export default AuthLayout;
