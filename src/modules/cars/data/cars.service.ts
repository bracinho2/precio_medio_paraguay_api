import { Injectable } from '@nestjs/common';
import { CreateCarDto } from '../interactor/dto/create-car.dto';
import { UpdateCarDto } from '../interactor/dto/update-car.dto';
import { CarService } from '../interactor/service/car_service';

@Injectable()
export class CarServiceImpl implements CarService {
  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
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
