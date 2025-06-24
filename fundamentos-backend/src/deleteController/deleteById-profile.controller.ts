import { Controller, Delete, HttpCode, NotFoundException, Param } from "@nestjs/common";
import { DeleteByIdProfileService } from "./deleteById-profile.service";

@Controller('/profile')
export class DeleteByIdProfileController {
    constructor(private deleteProfileService: DeleteByIdProfileService) {} 
    
    @Delete(':id')
    @HttpCode(204)
    async handle(@Param('id') id: string) {
        try {
            await this.deleteProfileService.execute({ id });
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw error;
        }
    }
}