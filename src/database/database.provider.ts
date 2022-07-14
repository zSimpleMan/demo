import { Sequelize } from 'sequelize-typescript';
import { UserProfileEntity } from 'src/user-profile/entity/user-profile.entity';
import { UserEntity } from 'src/user/entity/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'nhathan',
        password: 'postgres',
        database: 'my_shop',
      });

      sequelize.addModels(models)

      await sequelize.sync()
      return sequelize
    },
  },
]

const models = [
  UserEntity,
  UserProfileEntity,
]
