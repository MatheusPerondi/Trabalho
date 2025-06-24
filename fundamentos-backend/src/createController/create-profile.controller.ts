import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { CreateProfileService } from "./create-profile.service";

const createProfileBodySchema = z.object({
    avatarUrl: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createProfileBodySchema);
type CreateProfileBody = z.infer<typeof createProfileBodySchema>;

@Controller('/profile')
export class CreateProfileController {
    constructor(private createProfileService: CreateProfileService) {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: CreateProfileBody) {
        const { avatarUrl } = body;

        const profile = await this.createProfileService.execute({
            avatarUrl,
        });

        return profile;
    }
}