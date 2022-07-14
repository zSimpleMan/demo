import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthenticationModule,
    ConfigModule.forRoot(),
    UserProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
