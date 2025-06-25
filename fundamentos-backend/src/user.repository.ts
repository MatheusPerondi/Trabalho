import { Injectable } from "@nestjs/common";

import { PrismaService } from "./prisma.service";
import { Prisma, User } from "@prisma/client";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: Prisma.UserUncheckedCreateInput): Promise<Prisma.UserUncheckedCreateInput> {
        return await this.prisma.user.create({
            data: user
        });
    }

    async findManyByEmail(email: string): Promise<Prisma.UserUncheckedCreateInput[]> {
        return await this.prisma.user.findMany({
            where: {
                email,
            }
        });
    }

    async findAll(): Promise<Prisma.UserUncheckedCreateInput[]> {
        return await this.prisma.user.findMany();
    }

    async update(id: string, email: string): Promise<Promise<User>> {
        return await this.prisma.user.update({
            where: { id },
            data: { email }
        });
    }

    async DeleteByIdUserService(id: string): Promise<User> {
        return this.prisma.user.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }
}