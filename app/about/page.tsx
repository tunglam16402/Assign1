// app/about/page.tsx
import Breadcrumb from "@/components/common/Breadcrumb";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <div className="w-main mx-auto px-40 py-12">
      <Breadcrumb base="about" current="" />
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About Us</h1>

      <div className="gap-8 items-center">
        <div className={`${styles.customText} text-gray-700`}>
          <p className="mb-4">
            We are a modern e-commerce store, committed to providing quality
            products at competitive prices.
          </p>
          <p className="mb-4">
            Our team constantly innovates to deliver an excellent shopping
            experience for customers – from the ordering process to after-sales
            service.
          </p>
          <p>Thank you for trusting and supporting us!</p>
        </div>
      </div>
    </div>
  );
}
