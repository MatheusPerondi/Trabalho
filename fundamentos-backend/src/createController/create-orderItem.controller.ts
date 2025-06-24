import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { CreateOrderItemsService } from "./create-orderItem.service";


const createOrderItemSchema = z.object({
  orderID: z.string().uuid({ message: "ID do pedido inválido" }),
  productID: z.string().uuid({ message: "ID do produto inválido" }),
  total: z.number().min(0, { message: "Total deve ser >= 0" }),
});

const bodyValidationPipe = new ZodValidationPipe(createOrderItemSchema);
type CreateOrderItemBody = z.infer<typeof createOrderItemSchema>;

@Controller("order-items")
export class CreateOrderItemsController {
  constructor(private createOrderItemsService: CreateOrderItemsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(
    @Body(bodyValidationPipe) body: CreateOrderItemBody
  ) {
    const orderItem = await this.createOrderItemsService.execute(body);
    return { orderItem };
  }
}
