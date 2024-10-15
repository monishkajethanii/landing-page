"use client"
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC Landing Page</title>
        <meta name="description" content="Join the Google Developer Student Club." />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Events />
      <Testimonials />
    </div>
  );
}
