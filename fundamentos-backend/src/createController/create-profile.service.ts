import { Inject, Injectable } from "@nestjs/common";

export interface Profile {
    id: string;
    avatarUrl: string;
}

interface CreateProfileServiceRequest {
    avatarUrl: string;
}

type CreateProfileServiceResponse = {
    profile: Profile;
};

@Injectable()
export class CreateProfileService {
    constructor(
        @Inject('ProfileRepository') private profileRepository: any // Replace 'any' with the actual type of your ProfileRepository
    ) {}

    async execute({
        avatarUrl,
    }: CreateProfileServiceRequest): Promise<CreateProfileServiceResponse> {
        const profile = {
            avatarUrl,
        };

        const newProfile = await this.profileRepository.create(profile);

        return {
            profile: {
                id: newProfile.id?.toString() || "",
                avatarUrl: newProfile.avatarUrl,
            },
        };
    }
}