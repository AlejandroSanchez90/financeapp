import React from "react";
import { Header } from "@/components/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Header />
      <main>Layout</main>
    </>
  );
};

export default DashboardLayout;
