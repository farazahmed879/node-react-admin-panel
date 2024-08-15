// src/app/layout.tsx
"use client";
import React from "react";
import Sidebar from "@/components/sidebar/page";
import { AuthProvider, useAuth } from "@/context/AuthContext";

const RootLayout = ({ children }: any) => {
  return (
    <html>
      <AuthProvider>
        <body>
          <div style={{ display: "flex" }}>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;
