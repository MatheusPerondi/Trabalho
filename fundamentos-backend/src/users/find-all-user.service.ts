import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/user.repository";

export interface User {
    id: string;
    email: string;
}

type FindAllUsersServiceResponse = {
    users: User[];
}

@Injectable()
export class FindAllUsersService {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<FindAllUsersServiceResponse> {
        const users = await this.userRepository.findAll();

        return {
            users: users.map(user => ({
                id: user.id?.toString() || "",
                email: user.email,
            })),
        };
    }
}