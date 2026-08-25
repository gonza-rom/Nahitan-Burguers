import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import MenuSection from '@/components/MenuSection';
import CartDrawer from '@/components/CartDrawer';
import CartToast from '@/components/CartToast';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProcessSection />
      <MenuSection />
      <Footer />
      <CartDrawer />
      <CartToast />
      <WhatsappFloat />
    </main>
  );
}