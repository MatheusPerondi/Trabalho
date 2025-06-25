import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderItems } from "@prisma/client";
import { OrderItemsRepository } from "src/orderItem.repository";

@Injectable()
export class UpdateOrderItemService {
  constructor(private readonly orderItemsRepository: OrderItemsRepository) {}

  async execute(
    orderID: string,
    productID: string,
    data: { total?: number }
  ): Promise<OrderItems> {
    const item = (await this.orderItemsRepository.findByOrderId(orderID))
      .find(i => i.productID === productID);

    if (!item) {
      throw new NotFoundException(
        `OrderItem with orderID ${orderID} and productID ${productID} not found`
      );
    }

    return this.orderItemsRepository.update(orderID, productID, {
      total: data.total
    });
  }
}
