import { Injectable } from "@nestjs/common";

import { Prisma } from "@prisma/client";
import { ModelRepository } from "src/model.repository";

export interface Model {
  id: string;
  name: string;
  createdAt?: Date | string;
  updatedAt?: Date | string | null;
}

type FindAllModelsResponse = {
  models: Model[];
};

@Injectable()
export class FindAllModelsService {
  constructor(private modelRepository: ModelRepository) {}

  async execute(): Promise<FindAllModelsResponse> {
    const models = await this.modelRepository.findAll();

    return {
      models: models.map(model => ({
        id: model.id?.toString() || "",
        name: model.name,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      })),
    };
  }
}
