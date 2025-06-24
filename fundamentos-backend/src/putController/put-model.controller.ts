import { Body, Controller, HttpCode, Param, Put } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { UpdateModelService } from "./put-model.service";


const updateModelBodySchema = z.object({
    name: z.string().min(1, "Nome não pode ser vazio"),
});

const bodyValidationPipe = new ZodValidationPipe(updateModelBodySchema);

type UpdateModelBody = z.infer<typeof updateModelBodySchema>;

@Controller('/models')
export class UpdateModelController {
    constructor(private updateModelService: UpdateModelService) {}

    @Put(':id')
    @HttpCode(200)
    async handle(
        @Param('id') id: string,
        @Body(bodyValidationPipe) body: UpdateModelBody
    ) {
        const { name } = body;

        const result = await this.updateModelService.execute({ id, name });

        return {
            model: result.model
        };
    }
}
