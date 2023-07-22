import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientExceptionFilter } from '../../common/prisma/prisma-client-exception/prisma-client-exception.filter';
import { CarPricesService } from './car_prices.service';

@Controller('carprices')
export class CarPricesController {
  constructor(private readonly carPricesService: CarPricesService) { }

  @Post()
  @UseFilters(PrismaClientExceptionFilter)
  create(@Body() createCarPriceDto: Prisma.CarPriceCreateInput) {
    return this.carPricesService.create(createCarPriceDto);
  }

  @Get()
  @UseFilters(PrismaClientExceptionFilter)
  findAll() {
    return this.carPricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carPricesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarPriceDto: Prisma.CarPriceUpdateInput) {
    return this.carPricesService.update(+id, updateCarPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carPricesService.remove(+id);
  }
}
