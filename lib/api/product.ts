import axios from "@/lib/axios";

export type ProductFromApi = {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  compareAtPrice: number;
  slug: string;
};

export const getAllProducts = async (): Promise<ProductFromApi[]> => {
  try {
    const res = await axios.get("/api/products");
    return res.data;
  } catch (error) {
    console.error("getProducts error:", error);
    throw new Error("Failed to fetch products");
  }
};

export const getProductDetails = async (
  slug: string
): Promise<ProductFromApi | null> => {
  try {
    const res = await axios.get(`/api/products/${slug}`);
    return res.data;
  } catch (error) {
    console.error("getProductDetails error:", error);
    return null;
  }
};
