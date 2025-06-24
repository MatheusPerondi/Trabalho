import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/user.repository";

export interface DeleteByIdUserService {
    id: string;
}

export interface DeleteByIdUserServiceResponse {
    deletedId: string;
}

@Injectable()
export class DeleteByIdUserService {
    constructor(private userRepository: UserRepository) {}

    async execute({ id }: DeleteByIdUserService): Promise<DeleteByIdUserServiceResponse> {

        const existingUser = await this.userRepository.findById(id);
        if (!existingUser) {
            throw new Error(`User with id ${id} not found`);
        }

        await this.userRepository.DeleteByIdUserService(id);

        return {
            deletedId: id,
        };
    }
}