import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuth } from "src/authentication/jwt-authentication.guard";
import { UserProfileService } from "./user-profile.service";

@Controller('user-profile')
export class UserProfileController {
  constructor (
    private userProfileService: UserProfileService
  ) {}

  @UseGuards(JwtAuth)
  @Post()
  async create (@Body() body) {
    return this.userProfileService.create(body)
  }
}