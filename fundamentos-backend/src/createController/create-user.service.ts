import { Inject, Injectable } from "@nestjs/common";

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
    constructor(
        @Inject('UserRepository') private userRepository: any // Replace 'any' with the actual type of your UserRepository
    ) {}

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