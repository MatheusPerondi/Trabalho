import { Controller, Delete, HttpCode, Param, NotFoundException } from "@nestjs/common";
import { DeleteModelService } from "./deleteById-model.service";


@Controller('/models')
export class DeleteModelController {
  constructor(private deleteModelService: DeleteModelService) {}

  @Delete(':id')
  @HttpCode(204) 
  async handle(@Param('id') id: string) {
    try {
      await this.deleteModelService.execute({ id });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}


