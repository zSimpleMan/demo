import { UserEntity } from "./entity/user.entity";

export const userProviders = [
  {
    provide: 'USER_RESPOSITORY',
    useValue: UserEntity
  }
]