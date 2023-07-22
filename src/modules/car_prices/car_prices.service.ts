import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/service/prisma.service';

@Injectable()
export class CarPricesService {

  constructor(private readonly prisma: PrismaService) { }

  create(createCarPriceDto: Prisma.CarPriceCreateInput) {
    return this.prisma.carPrice.create({
      data: createCarPriceDto
    });

  }

  update(id: number, updateCarPriceDto: Prisma.CarPriceUpdateInput) {
    return this.prisma.carPrice.update({
      data: updateCarPriceDto,
      where: {
        id: id
      }
    });
  }


  findAll() {
    return this.prisma.carPrice.findMany();
  }

  findOne(id: number) {
    return this.prisma.carPrice.findUnique({
      where: {
        id: id
      }
    });
  }


  remove(id: number) {
    return this.prisma.carPrice.delete({
      where: {
        id: id
      }
    });
  }
}
