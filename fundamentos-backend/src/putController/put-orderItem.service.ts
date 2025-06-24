import { Injectable, NotFoundException } from "@nestjs/common";

import { OrderItems, Prisma } from "@prisma/client";
import { OrderItemsRepository } from "src/orderItem.repository";

@Injectable()
export class UpdateOrderItemService {
  constructor(private orderItemsRepository: OrderItemsRepository) {}

  async execute(
  orderID: string,
  productID: string,
  data: { total?: number }
): Promise<OrderItems> {
  const items = await this.orderItemsRepository.findByOrderId(orderID);
  const foundItem = items.find(i => i.productID === productID);
  if (!foundItem) {
    throw new NotFoundException(`OrderItem with orderID ${orderID} and productID ${productID} not found`);
  }
  const updateData = {
    total: data.total !== undefined ? data.total : undefined,
  };

  return this.orderItemsRepository.update(orderID, productID, updateData);
}
}
