"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MD. Fahim</Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="#experience" className="hover:text-primary">Experience</Link>
          <Link href="#education" className="hover:text-primary">Education</Link>
          <Link href="#skills" className="hover:text-primary">Skills</Link>
          <Link href="#projects" className="hover:text-primary">Projects</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link href="#experience" className="hover:text-primary" onClick={toggleMenu}>Experience</Link>
            <Link href="#education" className="hover:text-primary" onClick={toggleMenu}>Education</Link>
            <Link href="#skills" className="hover:text-primary" onClick={toggleMenu}>Skills</Link>
            <Link href="#projects" className="hover:text-primary" onClick={toggleMenu}>Projects</Link>
            <Link href="#contact" className="hover:text-primary" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;