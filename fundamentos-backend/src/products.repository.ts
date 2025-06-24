import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Category, Prisma, Product } from "@prisma/client";

@Injectable()
export class ProductsRepository {
    constructor(private prisma: PrismaService) { }


    findById(id: string): Promise<Prisma.ProductUncheckedCreateInput | null> {
        const product = this.prisma.product.findUnique({
            where: {
                id,
            }
        });
        return product;
    }

    async findByName(name: string): Promise<Product[]> {
        return await this.prisma.product.findMany({
            where: {
                name,
            },
        });
    }

    async create(product: Prisma.ProductUncheckedCreateInput): Promise<Prisma.ProductUncheckedCreateInput> {
        return await this.prisma.product.create({
            data: product,
        });
    }

    async findAll(): Promise<Prisma.ProductUncheckedCreateInput[]> {
        return await this.prisma.product.findMany();
    }

    async update(data: {
        id: string;
        name: string;
        description?: string | null;
        price: number;
        inStock: number;
        isAvailable: boolean;
        category: Category;
        tags: string[];
    }): Promise<Product> {
        const { id, ...rest } = data;

        return await this.prisma.product.update({
            where: { id },
            data: { ...rest },
        });
    }

    async deleteById(id: string): Promise<Product> {
        return this.prisma.product.delete({
            where: { id },
        });
    }

}

