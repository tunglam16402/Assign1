"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { CartIcon } from "@/components/cart/CartIcon";
import { SideCart } from "@/components/cart/SideCart";
import { useCartUI } from "@/hook/cart/useCart";
import { navItems } from "@/constanst/navItems";
import MobileMenu from "../NavMobile/NavbarMobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCart } = useCartUI();

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
        <div className="w-main h-[80px] flex items-center justify-between">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={scrolled ? "/logo_white.png" : "/logo.png"}
                alt="Logo"
                width={130}
                height={90}
              />
            </Link>

            <div className="flex gap-10 uppercase text-lg">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href} className={linkClass(href)}>
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-hover">
                <User />
              </Link>
              <CartIcon onClick={openCart} />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="flex md:hidden items-center justify-between w-full px-2">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/">
              <Image
                src={scrolled ? "/logo_white.png" : "/logo.png"}
                alt="Logo"
                width={130}
                height={90}
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <User className="w-5 h-5" />
              </Link>
              <CartIcon onClick={openCart} />
            </div>
          </div>
        </div>
      </nav>
      <div>
        <SideCart />
      </div>

      {/* nav mobile */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
