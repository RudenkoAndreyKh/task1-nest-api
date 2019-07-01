import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { GamesService } from './games/games.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, GamesController, AuthController, UsersController],
  providers: [AppService, GamesService, AuthService, UserService],
})
export class AppModule {}
