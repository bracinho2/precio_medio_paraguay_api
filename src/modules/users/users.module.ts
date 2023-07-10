import { Module } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { UsersController } from './app/controller/users.controller';
import { UsersService } from './data/users.service';
import { UserService } from './interactor/service/user_service';

@Module({
  controllers: [UsersController],
  providers: [
    { provide: UserService, useClass: UsersService },
    PrismaClient,
  ]

})

export class UsersModule { }
