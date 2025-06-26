import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductsRepository } from "src/products.repository";



export interface DeleteProductServiceRequest {
  id: string;
}

export interface DeleteProductServiceResponse {
  deletedId: string;
}

@Injectable()
export class DeleteProductService {
  constructor(private productRepository: ProductsRepository) {}

  async execute({ id }: DeleteProductServiceRequest): Promise<DeleteProductServiceResponse> {
    // Verifica se o model existe antes de tentar deletar
    const existingModel = await this.productRepository.findById(id);
    if (!existingModel) {
      throw new NotFoundException(`Model with id ${id} not found`);
    }

    await this.productRepository.deleteById(id);

    return {
      deletedId: id,
    };
  }
}
