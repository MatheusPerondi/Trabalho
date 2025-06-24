import { Injectable, NotFoundException } from "@nestjs/common";
import { Order } from "@prisma/client";
import { OrderRepository } from "src/orderRepository";


@Injectable()
export class DeleteOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string): Promise<Order> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return this.orderRepository.deleteById(id);
  }
}
