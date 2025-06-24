import { Controller, Get } from "@nestjs/common";

import { Order } from "@prisma/client";
import { FindAllOrdersService } from "./find-all-order.service";


@Controller("orders")
export class OrderController {
  constructor(private findAllOrdersService: FindAllOrdersService) {}

  @Get()
  async findAll(): Promise<{ orders: Order[] }> {
    const orders = await this.findAllOrdersService.execute();
    return { orders };
  }
}
