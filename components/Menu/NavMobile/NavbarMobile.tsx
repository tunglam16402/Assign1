"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navItems } from "@/constanst/navItems";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed md:hidden inset-0 z-40 bg-black/50"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed md:hidden top-0 left-0 z-50 h-screen w-3/5 sm:w-1/3 bg-white p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full">
          {/* Nút X ở góc trên bên phải */}
          <button
            onClick={onClose}
            className="absolute right-[-8px] text-gray-700 hover:text-black"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nội dung menu */}
          <div className="flex flex-col gap-6 text-lg">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="text-black text-hover"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
