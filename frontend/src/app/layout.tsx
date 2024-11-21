import "@/assets/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ReactNode } from "react";
import { UIProvider } from "@yamada-ui/react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <UIProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
