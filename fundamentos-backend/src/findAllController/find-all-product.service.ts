import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../products.repository";

export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    inStock: number;
    isAvailable: boolean;
    category: string;
    tags: string[];
    createdAt?: string | Date;
    updatedAt?: string | Date | null;
}

type FindAllProductsServiceResponse = {
    products: Product[];
};

@Injectable()
export class FindAllProductsService {
    constructor(private productRepository: ProductsRepository) { }

    async execute(): Promise<FindAllProductsServiceResponse> {
        const products = await this.productRepository.findAll();

        return {
            products: products.map(product => ({
                id: product.id?.toString() || "",
                name: product.name,
                description: product.description ?? undefined,
                price: product.price,
                inStock: product.inStock,
                isAvailable: !!product.isAvailable,
                category: product.category,
                tags: Array.isArray(product.tags) ? product.tags : [],
                createdAt: product.createdAt,
                updatedAt: product.updatedAt ?? undefined,
            })),
        };
    }

}
