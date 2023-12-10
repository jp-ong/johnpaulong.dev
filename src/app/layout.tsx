import Script from "next/script";

import "@/scss/globals.scss";

import { Sidebar } from "@/components/shared/sidebar";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GA_ID}');
        `}
      </Script>
      <body>
        <div className="root">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
