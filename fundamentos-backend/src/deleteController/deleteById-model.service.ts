import { Injectable, NotFoundException } from "@nestjs/common";
import { ModelRepository } from "src/model.repository";


export interface DeleteModelServiceRequest {
  id: string;
}

export interface DeleteModelServiceResponse {
  deletedId: string;
}

@Injectable()
export class DeleteModelService {
  constructor(private modelRepository: ModelRepository) {}

  async execute({ id }: DeleteModelServiceRequest): Promise<DeleteModelServiceResponse> {
    // Verifica se o model existe antes de tentar deletar
    const existingModel = await this.modelRepository.findById(id);
    if (!existingModel) {
      throw new NotFoundException(`Model with id ${id} not found`);
    }

    await this.modelRepository.deleteById(id);

    return {
      deletedId: id,
    };
  }
}
