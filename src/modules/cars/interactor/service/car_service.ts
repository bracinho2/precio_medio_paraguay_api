import { CreateCarDto } from "../dto/create-car.dto";
import { UpdateCarDto } from "../dto/update-car.dto";

export abstract class CarService {
    public abstract create(createCarDto: CreateCarDto): any;

    public abstract findAll(): any;

    public abstract findOne(id: number): any;

    public abstract update(id: number, updateCarDto: UpdateCarDto): any;

    public abstract remove(id: number): any;
}