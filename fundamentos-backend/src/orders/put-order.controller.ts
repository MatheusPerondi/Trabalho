import { Controller, Put, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { UpdateOrderService } from "./put-order.service";

const updateOrderBodySchema = z.object({
  total: z.number().min(0).optional(),
  userID: z.string().uuid().optional(),
});

const bodyValidationPipe = new ZodValidationPipe(updateOrderBodySchema);
type UpdateOrderBody = z.infer<typeof updateOrderBodySchema>;

@Controller("orders")
export class OrderController {
  constructor(private updateOrderService: UpdateOrderService) {}

  @Put(":id")
  @HttpCode(HttpStatus.OK)
  async update(
    @Param("id") id: string,
    @Body(bodyValidationPipe) body: UpdateOrderBody
  ): Promise<{ order: any }> {
    const order = await this.updateOrderService.execute({ id, data: body });
    return { order };
  }
}
