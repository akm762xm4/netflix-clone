import React from "react"
import { Navbar } from "../Navbar/Navbar"

interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="bg-[#292f33]">{children}</main>
    </div>
  )
}
