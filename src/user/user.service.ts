import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "./entity/user.entity";
import * as bcrypt from 'bcrypt'
import { BaseService } from "src/shared/base.service";

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor (
    @Inject('USER_RESPOSITORY')
    private userRespository: typeof UserEntity
  ) {
    super(userRespository)
  }

  async findByEmail (email: string): Promise<UserEntity> {
    return this.userRespository.findOne({
      where: {
        email
      }
    })
  }

  async create (user): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword
    
    const rs = await super.create(user)

    return rs
  }

}