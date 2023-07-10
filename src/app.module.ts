import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';


@Module({
  imports: [UsersModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
