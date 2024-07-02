import { Metadata } from "next";

import "@/scss/globals.scss";

import { Sidebar } from "@/components/shared/sidebar";
import { GoogleAnalytics } from "@/components/shared/google-analytics";

interface Props {
  children: React.ReactNode;
}

const title = "John Paul Ong | Software Engineer";
const description =
  "Software Engineer with 2 years of experience specializing in frontend development, including mobile development. Skilled in creating dynamic and responsive web and mobile applications, with a strong focus on user experience and performance. Adept at utilizing modern frameworks and technologies to deliver high-quality solutions. Seeking to leverage my expertise in frontend development to contribute to innovative projects and drive business success.";
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
