import { Controller, Get, HttpCode, Param } from "@nestjs/common";
import { FindManyByNameProduct } from "./find-by-name-products.service";

@Controller('/products/findManyByName')
export class FindManyByNameController {
  constructor(private findManyByName: FindManyByNameProduct) {}

  @Get(':name')
  @HttpCode(200)
  async handle(@Param('name') name: string) {
    const result = await this.findManyByName.execute({ name });

    const products = result.product.map(product => ({
      name: product.name,
    }));

    return { products };
  }
}
