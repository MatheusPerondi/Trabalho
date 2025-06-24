import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { Interface } from "readline";
import { ModelRepository } from "../model.repository";
import { ProductsRepository } from "src/products.repository";


export interface Product {
    name: string;
}

interface FindManyProductsServiceRequest {
    name: string;
}

type FindManyProductsServiceResponse = {
    product: Product[]
}

@Injectable()
export class FindManyByNameProduct {
    constructor(private productRepository: ProductsRepository) {}

    async execute({
        name,
    }: FindManyProductsServiceRequest): Promise<FindManyProductsServiceResponse>{
        const product = await this.productRepository.findByName(name);

         return {
            product: product.map(m => ({
                name: m.name,
            }))
        };
    }
}
