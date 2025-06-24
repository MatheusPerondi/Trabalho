import { Body, Controller, HttpCode, Put } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";

const updateProfileBodySchema = z.object({
    avatarUrl: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(updateProfileBodySchema);
type UpdateProfileBody = z.infer<typeof updateProfileBodySchema>;

@Controller('/profile')
export class UpdateProfileController {
    constructor(private updateProfileService: any) {} 

    @Put()
    @HttpCode(200)
    async handle(@Body(bodyValidationPipe) body: UpdateProfileBody) {
        const { avatarUrl } = body;

        const profile = await this.updateProfileService.execute({
            avatarUrl,
        });

        return profile;
    }
}