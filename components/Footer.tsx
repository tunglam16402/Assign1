import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Amazon</h2>
          <p className="text-sm text-gray-400">
            Providing high-quality products at reasonable prices.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Email: Amazon@myshop.com</p>
          <p className="text-sm text-gray-400">Hotline: 1234 5678</p>
          <p className="text-sm text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Amazon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
