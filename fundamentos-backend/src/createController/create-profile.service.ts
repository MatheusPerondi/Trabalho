import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "src/profile.repository";
import { Prisma } from "@prisma/client";

export interface Profile {
  id: string;
  avatarUrl: string;
}

interface CreateProfileServiceRequest {
  avatarUrl: string;
  userID: string; 
}

type CreateProfileServiceResponse = {
  profile: Profile;
};

@Injectable()
export class CreateProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  async execute({
    avatarUrl,
    userID,
  }: CreateProfileServiceRequest): Promise<CreateProfileServiceResponse> {
    if (!avatarUrl) {
      throw new Error("avatarUrl is required");
    }
    if (!userID) {
      throw new Error("userID is required");
    }


    const profileData: Prisma.ProfileUncheckedCreateInput = {
      avatarUrl,
      userID,
    };

    const newProfile = await this.profileRepository.create(profileData);

    return {
      profile: {
        id: newProfile.id?.toString() || "",
        avatarUrl: newProfile.avatarUrl?.toString() || "",
      },
    };
  }
}
