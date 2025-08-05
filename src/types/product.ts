import type { Database } from "./database.types";

// Base product type from database
type BaseProduct = Database["public"]["Tables"]["products"]["Row"];

// Extended product type with additional properties used in the app
export type Product = Partial<BaseProduct> & {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock_quantity: number;
  image?: string;
  sizes?: string[];
  applications?: string[];
  features?: string[];
  priceText?: string;
};

export type ProductInsert = Database["public"]["Tables"]["products"]["Insert"];
export type ProductUpdate = Database["public"]["Tables"]["products"]["Update"];