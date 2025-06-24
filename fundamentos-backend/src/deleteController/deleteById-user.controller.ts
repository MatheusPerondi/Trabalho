import { Controller, Delete, HttpCode, NotFoundException, Param } from "@nestjs/common";
import { DeleteModelService } from "./deleteById-model.service";

@Controller('/users')
export class DeleteByIdUserController {
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