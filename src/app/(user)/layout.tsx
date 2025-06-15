import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import { Header } from "../_components/header";
import NextTopLoader from "nextjs-toploader";
import { Notifications } from "../_components/ui/notification/notification";
import QueryProvider from "@/providers/react-query-provider";
import { GetHeaderData } from "@/service/categories-service";
import { useHeaderStore } from "@/stores/header-data.store";
import HeaderDataProvider from "@/providers/header-data-provider";
import { Footer } from "../_components/footer";

const iranyekan = localFont({
  src: [
    {
      path: "../../../public/fonts/iranyekan/IRANYekanXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/iranyekan/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/iranyekan/IRANYekanXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/iranyekan/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

export const metadata: Metadata = {
  title: "تکنوشاپ",
  description: "فروشگاه آنلاین تکنوشاپ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranyekan.variable} bg-white antialiased`}>
        <NextTopLoader showSpinner={false} color="#5e0a8e" />
        <Notifications />
        <QueryProvider>
          <HeaderDataProvider>
            <Header />
            <main className="mt-[75px] lg:mt-[160px]">{children}</main>
            <Footer />
          </HeaderDataProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
