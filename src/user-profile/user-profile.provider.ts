import { UserProfileEntity } from "./entity/user-profile.entity";


export const userProfileProviders = [
  {
    provide: 'USER_PROFILE_RESPOSITORY',
    useValue: UserProfileEntity
  }
]