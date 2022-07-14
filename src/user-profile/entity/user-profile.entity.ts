import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { UserEntity } from "src/user/entity/user.entity";

@Table({
  tableName: 'user_profiles',
  timestamps: false,
})
export class UserProfileEntity extends Model {
  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.NUMBER,
    field: 'user_id',
    primaryKey: true
  })
  userId: number

  @Column({
    type: DataType.STRING,
    field: 'full_name'
  })
  fullName: string

  @Column({
    type: DataType.NUMBER,
    field: 'age'
  })
  age: number

  @Column({
    type: DataType.STRING,
    field: 'address'
  })
  address: string

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

  @BelongsTo(() => UserEntity, 'userId')
  user: UserEntity
}