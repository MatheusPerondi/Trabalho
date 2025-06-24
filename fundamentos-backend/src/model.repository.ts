import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Model, Prisma } from "@prisma/client";

@Injectable()
export class ModelRepository {
    constructor(private prisma: PrismaService) { }

    async create(model: Prisma.ModelUncheckedCreateInput): Promise<Prisma.ModelUncheckedCreateInput> {
        return await this.prisma.model.create({
            data: model
        })
    }

    async findManyByName(name: string): Promise<Prisma.ModelUncheckedCreateInput[]> {
        const model = await this.prisma.model.findMany({
            where: {
                name,
            }
        })

        return model;
    }

    async findAll(): Promise<Prisma.ModelUncheckedCreateInput[]> {
        return await this.prisma.model.findMany();
    }

    async update(id: string, name: string): Promise<Promise<Model>> {
        return await this.prisma.model.update({
            where: { id },
            data: { name }
        });
    }

    async deleteById(id: string): Promise<Model> {
        return this.prisma.model.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Model | null> {
        return await this.prisma.model.findUnique({
            where: { id },
        });
    }


}