import { Controller, Delete, HttpCode, Param, NotFoundException } from "@nestjs/common";
import { DeleteProductService } from "./deleteById-product.service";




@Controller('/products')
export class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService) {}

  @Delete(':id')
  @HttpCode(204) 
  async handle(@Param('id') id: string) {
    try {
      await this.deleteProductService.execute({ id });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}