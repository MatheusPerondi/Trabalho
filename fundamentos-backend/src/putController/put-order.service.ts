import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderRepository } from "src/orderRepository";

import { Order, Prisma } from "@prisma/client";

@Injectable()
export class UpdateOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(
    id: string,
    data: Partial<Omit<Prisma.OrderUpdateInput, 'orderItems'>>
  ): Promise<Order> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return this.orderRepository.update(id, data);
  }
}
