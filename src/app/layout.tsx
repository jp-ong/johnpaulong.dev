import "@/scss/globals.scss";

import { Sidebar } from "@/components/shared/sidebar";
import { GoogleAnalytics } from "@/components/shared/google-analytics";

interface Props {
  children: React.ReactNode;
}

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
