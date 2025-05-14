"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `pb-1 border-b-2 transition ${
      pathname === path ? "border-main-color" : "border-transparent text-hover"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{ top: scrolled ? 0 : "60px" }}
        className={`sticky z-50 transition-all duration-200 shadow-sm ${
          scrolled
            ? "bg-black/80 backdrop-blur text-white"
            : "bg-transparent text-black"
        }`}
      >
        <div className="w-main flex items-center justify-between h-[80px]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={scrolled ? "/logo_white.png" : "/logo.png"}
              alt="Logo"
              width={130}
              height={90}
            />
          </Link>

          <div className="hidden md:flex gap-10 uppercase text-lg ">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block uppercase text-lg">
            <Link href="/login" className="text-hover">
              Login
            </Link>
          </div>
          <button
            className="md:hidden hover:cursor-pointer hover-text"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* nav mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-3/4 sm:w-1/3 bg-white p-6 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-6 text-lg">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-black text-hover"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-hover"
            >
              Login
            </Link>
          </div>
          <div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
