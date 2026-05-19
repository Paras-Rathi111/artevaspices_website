import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Leaf, MapPin, MessageCircle, Star, Truck, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';

const InstagramIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const products = [
  {
    name: 'Kerala Black Pepper',
    tag: 'Bold • Aromatic • Whole',
    desc: 'Sun-dried peppercorns with a deep aroma and strong finishing heat for everyday Indian cooking.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Green Cardamom',
    tag: 'Fresh • Fragrant • Premium pods',
    desc: 'Naturally dried elaichi pods selected for aroma, sweetness, and freshness.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Clove',
    tag: 'Handpicked • Warm • Intense',
    desc: 'Whole cloves with a rich, warm note for biryani, chai, marinades, and festive recipes.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cinnamon',
    tag: 'Sweet spice • Whole bark',
    desc: 'Naturally aromatic cinnamon sticks for desserts, curries, tea blends, and spice mixes.',
    image: 'https://images.unsplash.com/photo-1606525338097-3a2f1eb9f4df?auto=format&fit=crop&w=900&q=80',
  },
];

const features = [
  { icon: Leaf, title: 'Pure Kerala sourcing', text: 'Spices selected from trusted farms and traditional growing regions.' },
  { icon: Sprout, title: 'Handpicked batches', text: 'Small-batch selection focused on aroma, texture, and natural freshness.' },
  { icon: ShieldCheck, title: 'Freshly packed', text: 'Packed carefully to retain natural flavour and kitchen-ready aroma.' },
  { icon: Truck, title: 'Order via DM / WhatsApp', text: 'Simple ordering flow for retail packs and bulk enquiries.' },
];

const reviews = [
  'The pepper aroma is strong and fresh. You can feel the quality as soon as you open the pack.',
  'Cardamom pods were fragrant and clean. Perfect for chai and sweets.',
  'Good packaging and quick response on WhatsApp. Loved the authentic spice flavour.',
];

export default function ArtevaSpicesWebsite() {
  return (
    <div className="min-h-screen bg-[#fbf7ef] text-[#2a1b10]">
      <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#fbf7ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#58351f] text-white shadow-md">
              <Leaf size={22} />
            </div>
            <div>
              <p className="text-lg font-black tracking-wide">ARTEVA</p>
              <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">Spices & Co.</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#products" className="hover:text-amber-800">Products</a>
            <a href="#story" className="hover:text-amber-800">Our Story</a>
            <a href="#quality" className="hover:text-amber-800">Quality</a>
            <a href="#contact" className="hover:text-amber-800">Contact</a>
          </nav>
          <a
            href="https://www.instagram.com/artevaspices/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#58351f] px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#3f2617]"
          >
            <InstagramIcon size={17} /> Follow
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-green-700/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/70 px-4 py-2 text-sm font-bold text-amber-900 shadow-sm">
                <MapPin size={16} /> Authentic Kerala products for your kitchen
              </div>
              <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Pure spices, handpicked for real flavour.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f513f]">
                Bring home freshly packed whole spices with natural aroma, bold taste, and the warmth of traditional Indian kitchens.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#58351f] px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#3f2617]"
                >
                  Explore Products <ArrowRight size={18} />
                </a>
                <a
                  href="https://www.instagram.com/artevaspices/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#58351f]/20 bg-white px-7 py-4 font-bold text-[#58351f] shadow-sm transition hover:-translate-y-1"
                >
                  Order on Instagram <InstagramIcon size={18} />
                </a>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-sm font-semibold text-[#7c5d49]">Whole spices</p>
                </div>
                <div>
                  <p className="text-3xl font-black">Fresh</p>
                  <p className="text-sm font-semibold text-[#7c5d49]">Small batches</p>
                </div>
                <div>
                  <p className="text-3xl font-black">DM</p>
                  <p className="text-sm font-semibold text-[#7c5d49]">Easy ordering</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#6d3f24] p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80"
                  alt="Assorted spices"
                  className="h-[540px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-md">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-800">Featured</p>
                  <h2 className="mt-1 text-2xl font-black">Kerala Black Pepper</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6f513f]">Bold aroma, natural heat, and freshly packed whole peppercorns.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.22em] text-amber-800">Shop by aroma</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Popular products</h2>
            </div>
            <p className="max-w-xl text-[#6f513f]">Replace these sample products, prices, and images with your live catalogue when ready.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <motion.article
                key={product.name}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[1.75rem] border border-amber-900/10 bg-white shadow-sm"
              >
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">{product.tag}</p>
                  <h3 className="mt-2 text-xl font-black">{product.name}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#6f513f]">{product.desc}</p>
                  <a
                    href="https://www.instagram.com/artevaspices/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f1dfbf] px-4 py-3 text-sm font-black text-[#58351f] transition hover:bg-[#e7c98e]"
                  >
                    Enquire now <ShoppingBag size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="story" className="bg-[#58351f] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=80"
                alt="Spice ingredients"
                className="h-[430px] w-full object-cover"
              />
            </div>
            <div>
              <p className="font-black uppercase tracking-[0.22em] text-amber-200">From farm to kitchen</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Made for people who can smell the difference.</h2>
              <p className="mt-6 text-lg leading-8 text-amber-50/85">
                ARTEVA Spices & Co. celebrates the original character of Indian spices: earthy, fragrant, and honest. Every batch is selected with care, packed fresh, and sent to homes that value real flavour over mass-market blandness.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-3xl bg-white/10 p-5 backdrop-blur-md">
                    <Icon className="text-amber-200" />
                    <h3 className="mt-4 font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-amber-50/80">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-black uppercase tracking-[0.22em] text-amber-800">Quality promise</p>
                <h2 className="mt-3 text-4xl font-black">No shortcuts. Just naturally rich spices.</h2>
                <p className="mt-5 text-lg leading-8 text-[#6f513f]">
                  Build trust with clear quality points: sourcing region, batch freshness, packaging, return policy, and bulk availability.
                </p>
                <div className="mt-7 space-y-4">
                  {['Carefully selected whole spices', 'Freshly packed to protect aroma', 'Retail and bulk enquiry support', 'Fast response on Instagram / WhatsApp'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#fbf7ef] p-4 font-bold">
                      <Star className="fill-amber-500 text-amber-500" size={19} /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {reviews.map((review, index) => (
                  <div key={review} className="rounded-3xl border border-amber-900/10 bg-[#fbf7ef] p-6">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={17} className="fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 leading-7 text-[#6f513f]">“{review}”</p>
                    <p className="mt-4 font-black">Customer {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-16">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#2f1d12] text-white shadow-2xl">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="font-black uppercase tracking-[0.22em] text-amber-200">Ready to order?</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Get fresh spices delivered to your kitchen.</h2>
                <p className="mt-5 text-lg leading-8 text-white/75">
                  Message us for the latest product list, prices, pack sizes, and bulk availability.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.instagram.com/artevaspices/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-[#2f1d12] transition hover:-translate-y-1"
                  >
                    DM on Instagram <InstagramIcon size={18} />
                  </a>
                  <a
                    href="https://wa.me/910000000000?text=Hi%20ARTEVA%20Spices%2C%20I%20want%20to%20place%20an%20order."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-green-700"
                  >
                    WhatsApp Us <MessageCircle size={18} />
                  </a>
                </div>
                <p className="mt-5 text-sm text-white/50">Replace the WhatsApp number in the code with your actual business number.</p>
              </div>
              <div className="min-h-[380px] bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-900/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-semibold text-[#7c5d49] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ARTEVA Spices & Co. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#products" className="hover:text-[#58351f]">Products</a>
            <a href="#quality" className="hover:text-[#58351f]">Quality</a>
            <a href="https://www.instagram.com/artevaspices/" target="_blank" rel="noreferrer" className="hover:text-[#58351f]">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
