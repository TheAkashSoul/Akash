import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {children}

      <div className="mt-20 max-w-2xl mx-auto px-6 md:px-0">
        <Footer />
      </div>
    </div>
  );
}
