import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CarsController } from './app/controller/cars.controller';
import { CarServiceImpl } from './data/cars.service';
import { CarService } from './interactor/service/car_service';

@Module({
  controllers: [CarsController],
  providers: [
    { provide: CarService, useClass: CarServiceImpl },
    PrismaClient,
  ]
})
export class CarsModule { }
