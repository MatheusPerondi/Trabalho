import { Controller, Get } from "@nestjs/common";

import { OrderItems } from "@prisma/client";
import { FindAllOrderItemsService } from "./find-all-orderItem.service";

@Controller("order-items")
export class OrderItemsController {
  constructor(private findAllOrderItemsService: FindAllOrderItemsService) {}

  @Get()
  async findAll(): Promise<{ orderItems: OrderItems[] }> {
    const orderItems = await this.findAllOrderItemsService.execute();
    return { orderItems };
  }
}
