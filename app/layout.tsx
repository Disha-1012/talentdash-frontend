import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono
} from "next/font/google";


import "./globals.css";


import Navbar
  from "@/components/ui/Navbar";



const geistSans = Geist({

  variable:
    "--font-geist-sans",

  subsets: ["latin"],

});



const geistMono = Geist_Mono({

  variable:
    "--font-geist-mono",

  subsets: ["latin"],

});





export const metadata: Metadata = {


  title:
    "TalentDash | Software Engineer Salary Intelligence",


  description:
    "Compare software engineer salaries by company, role, location and experience.",


  keywords: [

    "software engineer salary",

    "salary comparison",

    "tech compensation",

    "TalentDash"

  ]

};






export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (


    <html

      lang="en"

      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
        `}

    >



      <body

        className="
            min-h-full
            flex
            flex-col
            bg-[#F7F7F7]
            "

      >


        <Navbar />


        {children}



      </body>


    </html>


  );


}