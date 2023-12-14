import { Metadata } from "next";
import Head from "next/head";

import "@/scss/globals.scss";

import { Sidebar } from "@/components/shared/sidebar";
import { GoogleAnalytics } from "@/components/shared/google-analytics";

interface Props {
  children: React.ReactNode;
}

const title = "John Paul Ong | Web Developer";
const description =
  "Web development expert in Metro Manila. Translates designs into efficient systems. Delivers elegant solutions for clients and codebase for developers.";
const baseUrl = "https://johnpaulong.dev";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    siteName: title,
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <div className="root">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
