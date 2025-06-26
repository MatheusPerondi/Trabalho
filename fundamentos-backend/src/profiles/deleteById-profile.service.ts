import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "src/profile.repository";

export interface DeleteByIdProfileRequest {
    id: string;
}

export interface DeleteByIdProfileServiceResponse {
    deletedId: string;
}

@Injectable()
export class DeleteByIdProfileService {
    constructor(private profileRepository: ProfileRepository) {}

    async execute({ id }: DeleteByIdProfileRequest): Promise<DeleteByIdProfileServiceResponse> {

        const existingProfile = await this.profileRepository.findById(id);
        if (!existingProfile) {
            throw new Error(`Profile with id ${id} not found`);
        }

        await this.profileRepository.deleteById(id);

        return {
            deletedId: id,
        };
    }
}
