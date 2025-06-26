import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "src/profile.repository";

export interface Profile {
  id: string;
  avatarUrl: string;
  createdAt: string | Date | undefined;
  updatedAt: string | Date | undefined | null;
}

interface PutProfileServiceRequest {
  id: string;
  avatarUrl: string;
}

type PutProfileServiceResponse = {
  profile: Profile;
};

@Injectable()
export class PutProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async execute({
    id,
    avatarUrl,
  }: PutProfileServiceRequest): Promise<PutProfileServiceResponse> {
    const updatedProfile = await this.profileRepository.update(id, avatarUrl);

    return {
      profile: {
        id: updatedProfile.id?.toString() || "",
        avatarUrl: updatedProfile.avatarUrl ?? "",
        createdAt: updatedProfile.createdAt,
        updatedAt: updatedProfile.updatedAt,
      },
    };
  }
}
