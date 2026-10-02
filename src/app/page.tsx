import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services & Value Proposition Section */}
        <Services />

        {/* About & Methodology Section */}
        <About />

        {/* Contact & Social Links Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
