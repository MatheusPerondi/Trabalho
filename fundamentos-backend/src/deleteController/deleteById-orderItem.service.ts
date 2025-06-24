import { Injectable, NotFoundException } from "@nestjs/common";

import { OrderItems } from "@prisma/client";
import { OrderItemsRepository } from "src/orderItem.repository";

@Injectable()
export class DeleteOrderItemService {
  constructor(private orderItemsRepository: OrderItemsRepository) {}

  async execute(orderID: string, productID: string): Promise<OrderItems> {
    const existing = await this.orderItemsRepository.findByOrderId(orderID);
    const item = existing.find(i => i.productID === productID);

    if (!item) {
      throw new NotFoundException(`OrderItem with orderID ${orderID} and productID ${productID} not found`);
    }

    return this.orderItemsRepository.delete(orderID, productID);
  }
}
