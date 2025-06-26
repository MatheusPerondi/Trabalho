import { Inject, Injectable } from "@nestjs/common";
import { ProfileRepository } from "src/profile.repository";

export interface Profile {
    id: string;
}

type FindAllProfileServiceResponse = {
    profiles: Profile[];
}

@Injectable()
export class FindAllProfileService {
    constructor(private profileRepository: ProfileRepository) {}

    async execute(): Promise<FindAllProfileServiceResponse> {
        const profiles = await this.profileRepository.findAll();

        return {
            profiles: profiles.map(profile => ({
                id: profile.id?.toString() || "",
            })),
        };
    }
}