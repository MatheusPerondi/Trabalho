import { Injectable } from "@nestjs/common";
import { ModelRepository } from "../model.repository";

export interface Model {
    id: string;
    name: string;
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

interface CreateModelServiceRequest {
    name: string;
}

type CreateModelServiceResponse = {
    model: Model;
}

@Injectable()
export class CreateModelService {
    constructor(private modelRepository: ModelRepository) {}

    async execute({ name }: CreateModelServiceRequest): Promise<CreateModelServiceResponse> {
        const modelData = { name };

        const newModel = await this.modelRepository.create(modelData);

        return {
            model: {
                id: newModel.id?.toString() || "",
                name: newModel.name,
                createdAt: newModel.createdAt,
                updatedAt: newModel.updatedAt ?? null,
            },
        };
    }
}
