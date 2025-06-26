import { Injectable } from "@nestjs/common";

import { OrderItems } from "@prisma/client";
import { OrderItemsRepository } from "src/orderItem.repository";

interface CreateOrderItemRequest {
  orderID: string;
  productID: string;
  total: number;
}

@Injectable()
export class CreateOrderItemsService {
  constructor(private orderItemsRepository: OrderItemsRepository) {}

  async execute(data: CreateOrderItemRequest): Promise<OrderItems> {
    return this.orderItemsRepository.create(data);
  }

}
