import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { CreateUserService } from "./create-user.service";

const createUserBodySchema = z.object({
    email: z.string().email(),
})

const bodyValidationPipe = new ZodValidationPipe(createUserBodySchema);
type createUserBodySchema = z.infer<typeof createUserBodySchema>;

@Controller('/user')
export class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: createUserBodySchema) {
        const {
            email,
        } = body;

        const user = await this.createUserService.execute({
            email,
        });

        return user;
    }
}