import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Order, Prisma } from "@prisma/client";

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async create(order: Prisma.OrderUncheckedCreateInput): Promise<Order> {
    return await this.prisma.order.create({
      data: order,
    });
  }

  async findAll(): Promise<Order[]> {
    return await this.prisma.order.findMany();
  }

  async findById(id: string): Promise<Order | null> {
    return await this.prisma.order.findUnique({
      where: { id },
    });
  }

  async deleteById(id: string): Promise<Order> {
    return await this.prisma.order.delete({
      where: { id },
    });
  }

  async update(
    id: string,
    data: Partial<Prisma.OrderUpdateInput>
  ): Promise<Order> {
    return await this.prisma.order.update({
      where: { id },
      data,
    });
  }

  async findManyByUserId(userID: string): Promise<Order[]> {
    return await this.prisma.order.findMany({
      where: { userID },
    });
  }
}
