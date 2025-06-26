import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductsRepository } from "src/products.repository";
import { Product, Category } from "@prisma/client";

interface UpdateProductServiceRequest {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  inStock: number;
  isAvailable: boolean;
  category: Category;
  tags: string[];
}

export interface UpdateProductServiceResponse {
  product: Product;
}

@Injectable()
export class UpdateProductService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    name,
    description,
    price,
    inStock,
    isAvailable,
    category,
    tags,
  }: UpdateProductServiceRequest): Promise<UpdateProductServiceResponse> {
    const existingProduct = await this.productsRepository.findById(id);

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }

    const product = await this.productsRepository.update({
      id,
      name,
      description,
      price,
      inStock,
      isAvailable,
      category,
      tags,
    });

    return { product };
  }
}
