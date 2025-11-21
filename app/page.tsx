import Image from 'next/image'
import SharedImage from './components/SharedImage'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            Square Connect<br />Advisory
          </motion.h1>
          <p className="text-2xl md:text-4xl mb-10 text-gold font-light">Your Success. Our Strategy.</p>
          <a href="#contact" className="inline-block bg-gold text-black px-14 py-7 rounded-full text-2xl font-bold hover:scale-110 transition shadow-2xl">
            Start Your Journey
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {["Mortgage & Finance", "Tax & Accounting", "Legal Services", "Real Estate Advisory", "Business Strategy", "Digital Solutions"].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition duration-300"
              >
                <h3 className="text-3xl font-bold mb-4 text-gold">{s}</h3>
                <p className="text-gray-600 text-lg">Expert guidance that delivers real results.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + BHAVIN */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10 text-xl leading-relaxed">
              <h2 className="text-5xl font-bold mb-8">Why Choose Us?</h2>
              <p>With <span className="text-gold font-bold">15+ years of excellence</span>, we deliver unmatched expertise in finance, law, tax, and real estate.</p>
              <p>Our clients trust us because we don’t just advise — <span className="text-gold font-bold">we deliver results</span>.</p>
              <p>From first home buyers to multi-million dollar deals — we’ve done it all.</p>
            </div>
            <SharedImage 
              src="/bhavin.jpg" 
              alt="Bhavin Shah - Founder" 
              className="rounded-full w-96 h-96 mx-auto border-12 border-gold shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: "Omkar Solanki", role: "Asset Finance", text: "Fantastic experience with Bhavin and team. Highly recommended!" },
              { name: "Harshad Patel", role: "Refinance", text: "Best service I've ever received. 5 stars!" },
              { name: "Rihin Pathak", role: "First Home Buyer", text: "Made the impossible possible. Thank you!" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20"
              >
                <p className="text-7xl text-gold mb-4 leading-none">“</p>
                <p className="text-xl italic mb-8">"{t.text}"</p>
                <p className="font-bold text-2xl">{t.name}</p>
                <p className="text-gold text-lg">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-12">Let’s Build Your Future</h2>
          <form action="https://formspree.io/f/xdoqkwjr" method="POST" className="max-w-3xl mx-auto space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <input type="text" name="name" placeholder="Your Name" required className="bg-white/10 border border-white/20 rounded-2xl px-10 py-7 text-xl placeholder-gray-400 focus:outline-none focus:border-gold transition" />
              <input type="email" name="email" placeholder="Your Email" required className="bg-white/10 border border-white/20 rounded-2xl px-10 py-7 text-xl placeholder-gray-400 focus:outline-none focus:border-gold transition" />
            </div>
            <textarea name="message" rows={7} placeholder="Tell us about your goals..." required className="w-full bg-white/10 border border-white/20 rounded-2xl px-10 py-7 text-xl placeholder-gray-400 focus:outline-none focus:border-gold transition"></textarea>
            <button type="submit" className="bg-gold text-black px-20 py-8 rounded-full text-2xl font-bold hover:scale-110 transition shadow-2xl">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
