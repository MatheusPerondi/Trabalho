import { Injectable } from "@nestjs/common";
import { ModelRepository } from "../model.repository";

export interface Model {
    id: string;
    name: string;
}

interface UpdateModelServiceRequest {
    id: string;
    name: string;
}

type UpdateModelServiceResponse = {
    model: Model;
}

@Injectable()
export class UpdateModelService {
    constructor(private modelRepository: ModelRepository) {}

    async execute({
        id,
        name,
    }: UpdateModelServiceRequest): Promise<UpdateModelServiceResponse> {
        const updatedModel = await this.modelRepository.update(id, name);

        return {
            model: {
                id: updatedModel.id.toString(),
                name: updatedModel.name
            }
        };
    }
}
