import React from 'react';

import Footer from '@/components/footer';
import Faq from '@/components/home/faq';
import Hero from '@/components/home/hero';
import Partners from '@/components/home/partners';
import Pricing from '@/components/home/pricing';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className='flex min-h-dvh flex-col'>
      <Navbar />
      <Hero />
      <Partners />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
