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
    </div>
  );
}
