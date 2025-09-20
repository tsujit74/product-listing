import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductGrid from "@/components/ProductGrid/ProdductGrid";
import { products } from "@/data/product";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar logoSrc="/images/logo.svg" />

      <div className="flex min-h-screen bg-white p-4 gap-6">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="w-3/4">
          <ProductGrid products={products}/>
        </div>
      </div>

      <Footer />
    </main>
  );
}
