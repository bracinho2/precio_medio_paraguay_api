import { Module } from '@nestjs/common';

import { CarsModule } from './modules/cars/cars.module';


import { CarPricesModule } from './modules/car_prices/car_prices.module';

import { CommonModule } from './common/common.module';
import { PrismaService } from './common/prisma/service/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';



@Module({
  imports: [UsersModule, CarsModule, CarPricesModule, CarPricesModule, CommonModule, CommonModule, ClientsModule,],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
