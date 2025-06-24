import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { OrderItems } from "@prisma/client";

@Injectable()
export class OrderItemsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    orderID: string;
    productID: string;
    total: number;
  }): Promise<OrderItems> {
    return this.prisma.orderItems.create({
      data,
    });
  }

  async findByOrderId(orderID: string): Promise<OrderItems[]> {
    return this.prisma.orderItems.findMany({
      where: { orderID },
    });
  }

  async update(
    orderID: string,
    productID: string,
    data: { total?: number }
  ): Promise<OrderItems> {
    return this.prisma.orderItems.update({
      where: {
        orderID_productID: {
          orderID,
          productID,
        },
      },
      data,
    });
  }

    async findAll(): Promise<OrderItems[]> {
        return this.prisma.orderItems.findMany();
    }

  async delete(orderID: string, productID: string): Promise<OrderItems> {
    return this.prisma.orderItems.delete({
      where: {
        orderID_productID: {
          orderID,
          productID,
        },
      },
    });
  }
}
