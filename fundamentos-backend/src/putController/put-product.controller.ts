import { Body, Controller, HttpCode, Param, Put } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { UpdateProductService, UpdateProductServiceResponse } from "./put-product.service";

const categoryEnum = z.enum(["ELECTRONICS", "FOODS", "MATERIALS"]);

const updateProductBodySchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3).optional(),
  price: z.number().positive(),
  inStock: z.number().int().nonnegative(),
  isAvailable: z.boolean(),
  category: categoryEnum,
  tags: z.array(z.string()),
});

const bodyValidationPipe = new ZodValidationPipe(updateProductBodySchema);
type UpdateProductBodySchema = z.infer<typeof updateProductBodySchema>;

@Controller('/products')
export class UpdateProductController {
  constructor(private updateProductService: UpdateProductService) {}

  @Put(':id')
  @HttpCode(200)
  async handle(
    @Param('id') id: string,
    @Body(bodyValidationPipe) body: UpdateProductBodySchema){
    const updatedProduct = await this.updateProductService.execute({
      id,
      ...body,
    });

    return { product: updatedProduct };
  }
}
