import Image from 'next/image';

export default function PromoBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md scroll-mt-24">
      <div className="flex justify-center bg-tertiary rounded-xl p-md shadow-hard-lg border-4 border-primary">
        <Image
          src="/hamburguesas-flyer.jpeg"
          alt="Promo hamburguesas Nahitan Burger's"
          width={1131}
          height={1600}
          className="w-full max-w-xs sm:max-w-sm rounded-lg border-2 border-primary shadow-hard"
          sizes="(max-width: 640px) 90vw, 384px"
        />
      </div>
    </section>
  );
}
