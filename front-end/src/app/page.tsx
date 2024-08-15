// src/app/page.tsx
"use client";
import RegisterLayout from "@/components/layouts/register_layout";
import Sidebar from "@/components/sidebar/page";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import React from "react";
import AuthLayout from "./(auth)/(with_auth_layout)/layout";

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <>
          <AuthLayout/>
        </>
      ) : (
        <RegisterLayout />
      )}
    </>
  );
};

export default Home;
