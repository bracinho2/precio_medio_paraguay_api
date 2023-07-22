import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { Public } from 'src/auth/core/constants';
import { UpdateCarDto } from '../../interactor/dto/update-car.dto';
import { CarService } from '../../interactor/service/car_service';


@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarService) { }

  @Post()
  create(@Body() createCarDto: Prisma.CarCreateInput) {
    return this.carsService.create(createCarDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
