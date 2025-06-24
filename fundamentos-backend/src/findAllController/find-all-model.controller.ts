import { Controller, Get, HttpCode } from "@nestjs/common";

import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { FindAllModelsService } from "./find-all-model.service";

@Controller('/models')
export class FindAllModelsController {
    constructor(private findAllModelsService: FindAllModelsService) {}

    @Get()
    @HttpCode(200)
    async handle() {
        const result = await this.findAllModelsService.execute();

        
        return { models: result.models };
    }
}
