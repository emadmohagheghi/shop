import { NuqsAdapter } from "nuqs/adapters/next";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NuqsAdapter>{children}</NuqsAdapter>;
}
