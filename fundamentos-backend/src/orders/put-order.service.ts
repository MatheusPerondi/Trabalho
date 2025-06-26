import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderRepository } from "src/orderRepository";
import { Order, Prisma } from "@prisma/client";

interface UpdateOrderServiceRequest {
  id: string;
  data: Partial<Omit<Prisma.OrderUpdateInput, 'orderItems'>>;
}

type UpdateOrderServiceResponse = {
  order: Order;
};

@Injectable()
export class UpdateOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute({ id, data }: UpdateOrderServiceRequest): Promise<UpdateOrderServiceResponse> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    const updatedOrder = await this.orderRepository.update(id, data);

    return { order: updatedOrder };
  }
}
