import { Injectable } from "@nestjs/common";

import { PrismaService } from "./prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProfileRepository {
    constructor(private prisma: PrismaService) {}

    async create(profile: Prisma.ProfileUncheckedCreateInput): Promise<Prisma.ProfileUncheckedCreateInput> {
        return await this.prisma.profile.create({
            data: profile
        });
    }

    async findAll(): Promise<Prisma.ProfileUncheckedCreateInput[]> {
        return await this.prisma.profile.findMany();
    }

    async update(id: string, avatarUrl: string): Promise<Prisma.ProfileUncheckedCreateInput> {
        return await this.prisma.profile.update({
            where: { id },
            data: { avatarUrl }
        });
    }

    async deleteById(id: string): Promise<Prisma.ProfileUncheckedCreateInput> {
        return this.prisma.profile.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Prisma.ProfileUncheckedCreateInput | null> {
        return await this.prisma.profile.findUnique({
            where: { id },
        });
    }
}