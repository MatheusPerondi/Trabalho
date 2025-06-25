import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/user.repository";

export interface User{
    id: string;
    email: string;
}

interface CreateUserServiceRequest {
    email: string;
}

type CreateUserServiceResponse = {
    user: User;
}

@Injectable()
export class CreateUserService {
    constructor(private userRepository: UserRepository) {}

    async execute({
        email,
    }: CreateUserServiceRequest): Promise<CreateUserServiceResponse> {
        const user = {
            email,
        };

        const newUser = await this.userRepository.create(user);

        return {
            user: {
                id: newUser.id?.toString() || "",
                email: newUser.email,
            }
        };
    }
}