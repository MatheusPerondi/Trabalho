import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateModelService } from "./create-model.service";

const createModelBodySchema = z.object({
    name: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createModelBodySchema);
type CreateModelBody = z.infer<typeof createModelBodySchema>;

@Controller('/model')
export class CreateModelController {
    constructor(private createModelService: CreateModelService) {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: CreateModelBody) {
        const { name } = body;

        const model = await this.createModelService.execute({ name });

        return model;
    }
}
