import { Controller, Get, HttpCode } from "@nestjs/common";
import { FindAllProductsService } from "./find-all-product.service";

@Controller('/products')
export class FindAllProductsController {
    constructor(private findAllProductsService: FindAllProductsService) { }

    @Get()
    @HttpCode(200)
    async handle() {
        const result = await this.findAllProductsService.execute();

        const products = result.products.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description ?? undefined,
            price: product.price,
            inStock: product.inStock,
            isAvailable: product.isAvailable,
            category: product.category,
            tags: product.tags,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt ?? undefined,
        }));

        return { products };
    }
}
