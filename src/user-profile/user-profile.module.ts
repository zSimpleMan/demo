import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { userProfileProviders } from './user-profile.provider';
import { UserProfileService } from './user-profile.service';

@Module({
  imports: [
  ],
  providers: [
    ...userProfileProviders,
    UserProfileService,
  ],
  controllers: [
    UserProfileController,
  ]
})
export class UserProfileModule {}
