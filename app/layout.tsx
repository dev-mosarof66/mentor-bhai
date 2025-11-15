import type { Metadata } from "next";
import ThemeProvider from "@/lib/theme";
import { generateMetadataDescription } from "@/utils/description-generator";
import './globals.css'
export const metadata: Metadata = {
  title: "Mentor Bhai - AI powered Mentorship",
  description: `${generateMetadataDescription("home")}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-roboto antialiased`}>
        <ThemeProvider>
          <div className="w-full h-screen flex flex-col">
            <div className="w-full flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
