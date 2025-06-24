import { Controller, Put, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { UpdateOrderItemService } from "./put-orderItem.service";


const updateOrderItemBodySchema = z.object({
  total: z.number().min(0).optional(),
});

const bodyValidationPipe = new ZodValidationPipe(updateOrderItemBodySchema);
type UpdateOrderItemBody = z.infer<typeof updateOrderItemBodySchema>;

@Controller("order-items")
export class OrderItemsController {
  constructor(private updateOrderItemService: UpdateOrderItemService) {}

  @Put(":orderID/:productID")
  @HttpCode(HttpStatus.OK)
  async update(
    @Param("orderID") orderID: string,
    @Param("productID") productID: string,
    @Body(bodyValidationPipe) body: UpdateOrderItemBody
  ): Promise<{ orderItem: any }> {
    const orderItem = await this.updateOrderItemService.execute(orderID, productID, body);
    return { orderItem };
  }
}
