import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Courses for Careers',
  description: '100% Assured PL-300 Certification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo_onlyicon.png" sizes="any" />
      </head>
      <body className={poppins.className + "  box-border p-0"}>{children}</body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </html>
  );
}
