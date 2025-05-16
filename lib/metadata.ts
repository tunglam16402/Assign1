export const generateProductMetadata = (product: {
  title: string;
  description?: string;
  thumbnail: string;
}) => {
  return {
    title: `${product.title} | Amazon`,
    description: product.description || "Buy quality products at MyStore.",
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.thumbnail,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};
