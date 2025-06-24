import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { FindManyByName } from "./fetch-recent-products.service";

const createProductBodySchema = z.object({
    name: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);
type createProductBodySchema = z.infer<typeof createProductBodySchema>

@Controller('/products/findByName')
export class FindManyByNameProdutcController {
    constructor(private findByName: FindManyByName) {}

    @Get(':name')
    @HttpCode(200)
    async handle(@Param('name') name: string) {
        const result = await this.findByName.execute({ name });

        const modelNames = result.model.map(model => model.name);

        return { names: modelNames };
    }
}