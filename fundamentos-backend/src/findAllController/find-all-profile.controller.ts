import { Controller, Get, HttpCode } from "@nestjs/common";
import { DeleteByIdProfileService } from "src/deleteController/deleteById-profile.service";
import { FindAllProfileService } from "./find-all-profile.service";

@Controller('/profile')
export class FindAllProfileController {
    constructor(private findAllProfileService: FindAllProfileService) {}

    @Get(':id')
    @HttpCode(200)
    async handle() {
        const result = await this.findAllProfileService.execute();

        const profiles = result.profiles.map(profile => ({
            id: profile.id,
        }));

        return { profiles };
    }
}