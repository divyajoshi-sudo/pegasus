import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="font-bold text-2xl tracking-tighter text-dark">PEGASUS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-dark/80">
          <Link href="#" className="hover:text-primary transition-colors">HOME</Link>
          <Link href="#" className="hover:text-primary transition-colors">SOLUTIONS</Link>
          <Link href="#" className="hover:text-primary transition-colors">ADVANTAGES</Link>
          <Link href="#" className="hover:text-primary transition-colors">RESOURCES</Link>
          <Link href="#" className="hover:text-primary transition-colors">CONTACT</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="#contact" className="bg-primary hover:bg-secondary text-white px-6 py-2.5 font-bold tracking-wider rounded-sm transition-colors uppercase text-sm">
            Partner With Us
          </Link>
        </div>

        <button className="md:hidden text-dark">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
