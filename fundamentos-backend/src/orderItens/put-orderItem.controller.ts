import { Controller, Put, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { UpdateOrderItemService } from "./put-orderItem.service";

const schema = z.object({
  total: z.number().min(0).optional(),
});

type BodyDTO = z.infer<typeof schema>;

@Controller("order-items")
export class OrderItemsController {
  constructor(private readonly updateOrderItemService: UpdateOrderItemService) {}

  @Put(":orderID/:productID")
  @HttpCode(HttpStatus.OK)
  async update(
    @Param("orderID") orderID: string,
    @Param("productID") productID: string,
    @Body(new ZodValidationPipe(schema)) body: BodyDTO
  ) {
    const orderItem = await this.updateOrderItemService.execute(orderID, productID, body);
    return { orderItem };
  }
}
