import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Car, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarDto } from '../interactor/dto/create-car.dto';
import { UpdateCarDto } from '../interactor/dto/update-car.dto';
import { CarService } from '../interactor/service/car_service';

@Injectable()
export class CarServiceImpl implements CarService {
  constructor(private readonly prisma: PrismaClient) { }
  async create(data: Prisma.CarCreateInput): Promise<Car> {
    try {
      return await this.prisma.car.create({ data: data });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException('car already exists!', HttpStatus.BAD_REQUEST);
      }
    }
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
