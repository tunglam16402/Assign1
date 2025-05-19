import Link from "next/link";

interface BreadcrumbProps {
  current: string; 
  base?: "products" | "about" | "blog" | "cart"; 
}

export default function Breadcrumb({
  current,
  base = "products",
}: BreadcrumbProps) {
  const basePathMap = {
    products: { name: "Products", href: "/products" },
    about: { name: "About", href: "/about" },
    blog: { name: "Blog", href: "/blog" },
    cart: { name: "Shopping Cart", href: "/cart" },
  };

  const basePath = basePathMap[base];

  return (
    <nav className="text-md py-2 my-2 text-gray-600 mb-4">
      <Link href="/" className="hover:underline text-hover">
        Home
      </Link>
      {" > "}
      <Link href={basePath.href} className="hover:underline text-hover">
        {basePath.name}
      </Link>
      {current && (
        <>
          {" > "}
          <span
            className="truncate max-w-[500px] inline-block align-bottom"
            title={current}
          >
            {current}
          </span>
        </>
      )}
    </nav>
  );
}
