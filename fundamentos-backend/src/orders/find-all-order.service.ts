import { Injectable } from "@nestjs/common";
import { Order } from "@prisma/client";
import { OrderRepository } from "src/orderRepository";


@Injectable()
export class FindAllOrdersService {
  constructor(private orderRepository: OrderRepository) {}

  async execute(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }
}
