import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "../ConvexClientProvider";
import Header from "../_components/Header";
import "./globals.css";
import Sidebar from "../_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body>
          <ConvexClientProvider>
            <Header />
            <div className="flex">
              <Sidebar />
              <div className="w-fit mx-auto">{children}</div>
            </div>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
