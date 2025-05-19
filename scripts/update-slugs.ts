import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../models/Product";
import slugify from "slugify";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(" Missing MONGODB_URI in environment variables");
}

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI as string);
    console.log("✅ Connected to MongoDB");
  }
}

async function updateSlugs() {
  try {
    await connectDB(); 

    const products = await Product.find({ slug: { $exists: false } });

    for (const product of products) {
      const slug = slugify(product.title, { lower: true });
      product.slug = slug;
      await product.save();
      console.log(`✅ Updated: ${product.title} → ${slug}`);
    }

    console.log("Done!");
    process.exit(0);
  } catch (err) {
    console.error(" Error updating slugs:", err);
    process.exit(1);
  }
}

updateSlugs();
