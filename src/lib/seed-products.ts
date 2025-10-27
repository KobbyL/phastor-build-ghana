import { productService } from "./product-service";
import type { ProductInsert } from "@/types/product";

const sampleProducts: ProductInsert[] = [
  {
    name: "Hollow Block - 6 inch",
    description: "Standard 6-inch hollow concrete block for construction",
    price: 12.50,
    category: "Hollow Blocks",
    stock_quantity: 1000
  },
  {
    name: "Solid Block - 6 inch",
    description: "Heavy-duty 6-inch solid concrete block",
    price: 15.00,
    category: "Solid Blocks",
    stock_quantity: 800
  },
  {
    name: "U-Drain - 12 inch",
    description: "12-inch concrete U-drain for water management",
    price: 45.00,
    category: "U-Drains",
    stock_quantity: 200
  },
  {
    name: "Culvert - 24 inch",
    description: "24-inch diameter concrete culvert pipe",
    price: 180.00,
    category: "Culverts",
    stock_quantity: 50
  },
  {
    name: "Paving Stone - Hexagonal",
    description: "Hexagonal interlocking paving stone",
    price: 8.50,
    category: "Paving Stones",
    stock_quantity: 2000
  },
  {
    name: "Ready Mix Concrete - Grade 25",
    description: "High-quality ready-mix concrete Grade 25, delivered fresh to your site",
    price: 350.00,
    category: "Ready Mix Concrete",
    stock_quantity: 100
  }
];

export async function seedProducts() {
  try {
    for (const product of sampleProducts) {
      await productService.createProduct(product);
      console.log(`Created product: ${product.name}`);
    }
    console.log('Sample products added successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}
