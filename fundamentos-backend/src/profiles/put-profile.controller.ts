import { Body, Controller, HttpCode, Put, Param } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { PutProfileService } from "./put-profile.service";

const updateProfileBodySchema = z.object({
    avatarUrl: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(updateProfileBodySchema);
type UpdateProfileBody = z.infer<typeof updateProfileBodySchema>;

@Controller('/profile')
export class UpdateProfileController {
    constructor(private updateProfileService: PutProfileService) {}

    @Put(':id')
    @HttpCode(200)
    async handle(
        @Param('id') id: string,
        @Body(bodyValidationPipe) body: UpdateProfileBody
    ) {
        const { avatarUrl } = body;

        const profile = await this.updateProfileService.execute({
            id,
            avatarUrl,
        });

        return { profile };
    }
}
