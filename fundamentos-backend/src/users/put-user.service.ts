import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/user.repository";

export interface User{
    id: string;
    email: string;
}

interface UpdateUserServiceRequest {
    id: string;
    email: string;
}

type UpdateUserServiceResponse = {
    user: User;
}

@Injectable()
export class UpdateUserService {
    constructor(private userRepository: UserRepository) {}

    async execute({
        id,
        email,
    }: UpdateUserServiceRequest): Promise<UpdateUserServiceResponse> {
        const updatedUser = await this.userRepository.update(id, email);

        return {
            user: {
                id: updatedUser.id.toString(),
                email: updatedUser.email,
            },
        };
    }
}