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
    model: Model
}

@Injectable()
export class CreateModelService {
    constructor(private modelRepository: ModelRepository){ }

    async execute({
        name,
    }: CreateModelServiceRequest): Promise<CreateModelServiceResponse> {
        const person = {
            name,
        };

        const newPerson = await this.modelRepository.create(person);

        return {
            model: {
                id: newPerson.id?.toString() || "",
                name,
                createdAt: newPerson.name,
                updatedAt: newPerson.updatedAt ?? null
            }
        }
    }

}