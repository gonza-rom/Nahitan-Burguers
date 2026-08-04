import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MenuSection />
      <Footer />
      <CartDrawer />
    </main>
  );
}