import type { Metadata } from "next";
import JsonLd
  from "@/components/seo/JsonLd";

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

  title: {
    default:
      "TalentDash | Software Engineer Salary Intelligence",

    template:
      "%s | TalentDash"
  },


  description:
    "Explore software engineer salaries, company compensation insights, and compare tech salaries.",


  keywords: [

    "software engineer salary",

    "developer compensation",

    "tech salary comparison",

    "salary dashboard",

    "TalentDash"

  ],


  authors: [

    {
      name: "TalentDash"
    }

  ],


  robots: {
    index: true,
    follow: true
  },


  openGraph: {


    title:
      "TalentDash | Software Engineer Salary Intelligence",


    description:
      "Compare software engineer salaries across companies.",


    type: "website",


    locale: "en_US"


  }


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
        <JsonLd />

        <Navbar />


        {children}



      </body>


    </html>


  );


}