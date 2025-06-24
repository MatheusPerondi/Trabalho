import { Controller, Get, HttpCode } from "@nestjs/common";
import { FindAllUsersService } from "./find-all-user.service";

@Controller('/users')
export class FindAllUserController {
    constructor(private findAllUsersService: FindAllUsersService) { }

    @Get()
    @HttpCode(200)
    async handle() {
        const result = await this.findAllUsersService.execute();

        const users = result.users.map(user => ({
            id: user.id,
            email: user.email,
        }));

        return { users };
    }
}
