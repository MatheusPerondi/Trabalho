
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateModelService } from "./create-model.service";


export const genderEnum = z.enum(["MALE", "FEMALE"])

const createModelBodySchema = z.object({
    name: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createModelBodySchema);
type createModelBodySchema = z.infer<typeof createModelBodySchema>;

@Controller('/model')
export class CreateModelController {
    constructor(private createPerson: CreateModelService) {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: createModelBodySchema){
        const {
            name,
        } = body;


        const person = await this.createPerson.execute({
            name,
        });

        return person
    }
}