import { Body, Controller, Get, Query, Post, UseGuards, Req } from "@nestjs/common";
import { JwtAuth } from "src/authentication/jwt-authentication.guard";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor (
    private readonly userService: UserService,
  ) {}

  @Post()
  async create (@Body() user) {
    return this.userService.create(user)
  }

  @UseGuards(JwtAuth)
  @Get('/email')
  async findByEmail (@Query('email') email) {
    return this.userService.findByEmail(email)
  }

  @UseGuards(JwtAuth)
  @Get()
  async findAll (@Req() req) {
    return this.userService.find(req.query)
  }
}