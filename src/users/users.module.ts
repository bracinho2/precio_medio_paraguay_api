import { Module } from '@nestjs/common';
import { UsersService } from './data/users.service';


@Module({
  providers: [UsersService],
  exports: [UsersService],
})

export class UsersModule { }
