import { Table, Column, Model, DataType, HasOne } from "sequelize-typescript";
import { UserProfileEntity } from "src/user-profile/entity/user-profile.entity";

@Table({
  tableName: 'users',
  timestamps: false,
})
export class UserEntity extends Model {
  @Column({
    type: DataType.NUMBER,
    field: 'user_id',
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @Column({
    type: DataType.STRING,
    field: 'email'
  })
  email: string

  @Column({
    type: DataType.STRING,
    field: 'password'
  })
  password: string

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_super_admin'
  })
  isSuperAdmin: number

  @Column({
    type: DataType.DATE,
    field: 'created_at'
  })
  createdAt?: Date

  @Column({
    type: DataType.DATE,
    field: 'updated_at'
  })
  updatedAt?: Date

  @HasOne(() => UserProfileEntity)
  userProfile: UserProfileEntity
}