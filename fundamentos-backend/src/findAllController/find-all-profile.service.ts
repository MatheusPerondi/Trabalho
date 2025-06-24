import { Inject, Injectable } from "@nestjs/common";

export interface Profile {
    id: string;
}

type FindAllProfileServiceResponse = {
    profiles: Profile[];
}

@Injectable()
export class FindAllProfileService {
    constructor(@Inject('ProfileRepository') private profileRepository: any) {}

    async execute(): Promise<FindAllProfileServiceResponse> {
        const profiles = await this.profileRepository.findAll();

        return {
            profiles: profiles.map(profile => ({
                id: profile.id?.toString() || "",
            })),
        };
    }
}