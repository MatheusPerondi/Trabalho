import { Inject, Injectable } from "@nestjs/common";

export interface Profile {
    id: string;
}

interface PutProfileServiceRequest {
    avatarUrl: string;
}

type PutProfileServiceResponse = {
    profile: Profile;
};

@Injectable()
export class PutProfileService {
    constructor(
        @Inject('ProfileRepository') private profileRepository: any // Replace 'any' with the actual type of your ProfileRepository
    ) {}

    async execute({
        avatarUrl,
    }: PutProfileServiceRequest): Promise<PutProfileServiceResponse> {
        const profile = {
            avatarUrl,
        };

        const updatedProfile = await this.profileRepository.update(profile);

        return {
            profile: {
                id: updatedProfile.id?.toString() || "",
            },
        };
    }
}