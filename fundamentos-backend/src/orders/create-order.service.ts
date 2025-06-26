import { Injectable } from "@nestjs/common";
import { OrderRepository } from "src/orderRepository";

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}


export interface Order {
  id: string;
  total: number;
  userID: string;
  orderItems: OrderItem[];
  createdAt: string | Date | undefined;
  updatedAt: string | Date | undefined | null;
}


export interface CreateOrderServiceRequest {
  total: number;
  userID: string;
  orderItems: OrderItem[];
}


export interface CreateOrderServiceResponse {
  order: Order;
}

@Injectable()
export class CreateOrderService {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    total,
    userID,
    orderItems,
  }: CreateOrderServiceRequest): Promise<CreateOrderServiceResponse> {
    const newOrder = await this.orderRepository.create({
      total,
      userID,
      orderItems: {
        createMany: {
          data: orderItems.map((item) => ({
            productID: item.productId,
            price: item.price,
            total: item.quantity * item.price,
          })),
        },
      },
    });

    return {
      order: {
        id: newOrder.id,
        total: newOrder.total,
        userID: newOrder.userID,
        orderItems,
        createdAt: newOrder.createdAt,
        updatedAt: newOrder.updatedAt,
      },
    };
  }
}
