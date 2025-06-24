import { Injectable } from "@nestjs/common";

import { OrderItems } from "@prisma/client";
import { OrderItemsRepository } from "src/orderItem.repository";

@Injectable()
export class FindAllOrderItemsService {
  constructor(private orderItemsRepository: OrderItemsRepository) {}

  async execute(): Promise<OrderItems[]> {
    return this.orderItemsRepository.findAll();
  }
}
