import { motion } from "framer-motion";
import { ShoppingBag, Headphones, Wrench, Film, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen font-sans text-gray-800">
      
      {/* Navbar */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">
            YOUNIS MOBILE ZONE
          </h1>
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 text-center container mx-auto px-6">
        <motion.h2 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Everything Your Mobile Needs!
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Accessories, Repairs, Movies, Music, and More — All in One Place. 
          Visit <span className="font-semibold text-blue-600">YOUNIS MOBILE ZONE</span>.
        </p>
        <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
          Shop Now
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <ServiceCard 
              icon={<Wrench size={40} className="text-blue-600"/>} 
              title="Mobile Repair" 
              desc="Expert repair services for all mobile phones." 
            />
            <ServiceCard 
              icon={<Film size={40} className="text-blue-600"/>} 
              title="Movies & Songs" 
              desc="Get the latest movies, songs, and seasons." 
            />
            <ServiceCard 
              icon={<ShoppingBag size={40} className="text-blue-600"/>} 
              title="Accessories" 
              desc="Covers, protectors, chargers, earbuds & more." 
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">Popular Products</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <ProductCard icon={<Headphones size={50}/>} name="Headphones" />
            <ProductCard icon={<Phone size={50}/>} name="Mobile Covers" />
            <ProductCard icon={<Phone size={50}/>} name="Screen Protectors" />
            <ProductCard icon={<Headphones size={50}/>} name="Earbuds" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-700 text-white py-10 mt-10">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xl font-semibold mb-4">YOUNIS MOBILE ZONE</h4>
          <p>Mobile Accessories, Repairs & Entertainment Hub</p>
          <p className="mt-2">📍 Madina Town , Zilla Tax , Tarnol , Islamabad</p>
          <p>📞 +92 3475376502</p>
          <p className="mt-4 text-sm">© 2025 YOUNIS MOBILE ZONE. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

// Components
function ServiceCard({icon, title, desc}) {
  return (
    <motion.div 
      whileHover={{scale:1.05}} 
      className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

function ProductCard({icon, name}) {
  return (
    <motion.div 
      whileHover={{scale:1.05}} 
      className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center"
    >
      <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
      <h5 className="font-semibold text-lg">{name}</h5>
    </motion.div>
  );
}
