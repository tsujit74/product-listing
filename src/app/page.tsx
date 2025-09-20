import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductGrid from "@/components/ProductGrid/ProdductGrid";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar logoSrc="/images/logo.svg" />

      <div className="flex min-h-screen p-4 gap-6">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="w-3/4">
          <ProductGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
