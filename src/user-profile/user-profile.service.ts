import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "src/shared/base.service";
import { UserProfileEntity } from "./entity/user-profile.entity";

@Injectable()
export class UserProfileService extends BaseService<UserProfileEntity> {
  constructor (
    @Inject('USER_PROFILE_RESPOSITORY')
    private userProfileRespository: typeof UserProfileEntity
  ) {
    super(userProfileRespository)
  }
}