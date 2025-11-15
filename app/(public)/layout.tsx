import Navbar from "@/components/common/navbar";
import Footer from "@/components/landing/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </div>
  );
}
