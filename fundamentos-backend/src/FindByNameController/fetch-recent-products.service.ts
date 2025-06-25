import { Injectable } from "@nestjs/common";
import { ModelRepository } from "../model.repository";


export interface Model {
    name: string;
}

interface FindManyProductsServiceRequest {
    name: string;
}

type FindManyProductsServiceResponse = {
    model: Model[]
}

@Injectable()
export class FindManyByName {
    constructor(private modelRepository: ModelRepository) {}

    async execute({
        name,
    }: FindManyProductsServiceRequest): Promise<FindManyProductsServiceResponse>{
        const model = await this.modelRepository.findManyByName(name);

         return {
            model: model.map(m => ({
                name: m.name,
            }))
        };
    }
}
