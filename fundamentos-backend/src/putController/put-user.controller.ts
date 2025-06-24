import { Body, Controller, HttpCode, Param, Put } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { UpdateUserService } from "./put-user.service";

const updateUserBodySchema = z.object({
    email: z.string().email(),
})

const bodyValidationPipe = new ZodValidationPipe(updateUserBodySchema);

type UpdateUserBody = z.infer<typeof updateUserBodySchema>;

@Controller('/users')
export class UpdateUserController {
    constructor(private updateUserService: UpdateUserService) {}

    @Put(':id')
    @HttpCode(200)
    async handle(
        @Param('id') id: string,
        @Body(bodyValidationPipe) body: UpdateUserBody
    ) {
        const { email } = body;

        const result = await this.updateUserService.execute({ id, email });

        return {
            user: result.user
        };
    }
}