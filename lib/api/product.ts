// import axios from "@/lib/axios";

// export type ProductFromApi = {
//   _id: string;
//   title: string;
//   price: number;
//   thumbnail: string;
//   description: string;
//   compareAtPrice: number;
//   slug: string;
// };

// export const getAllProducts = async (): Promise<ProductFromApi[]> => {
//   try {
//     const res = await axios.get("/api/products");
//     return res.data;
//   } catch (error) {
//     console.error("getProducts error:", error);
//     throw new Error("Failed to fetch products");
//   }
// };

// export const getProductDetails = async (slug: string): Promise<ProductFromApi | null> => {
//   try {
//     const res = await axios.get(`/api/products/${slug}`);
//     return res.data;
//   } catch (error) {
//     console.error("getProductDetails error:", error);
//     return null;
//   }
// };

import ProductModel from "@/models/Product";
export type ProductFromDb = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map(arg0: (product: any) => any): ProductFromDb[] | PromiseLike<ProductFromDb[]>;
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  compareAtPrice: number;
  slug: string;
};


export const getAllProducts = async (): Promise<ProductFromDb[]> => {
  const products = await ProductModel.find({}).lean<ProductFromDb>();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
};

export const getProductDetails = async (
  slug: string
): Promise<ProductFromDb | null> => {
  const product = await ProductModel.findOne({ slug }).lean<ProductFromDb>();

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
};
