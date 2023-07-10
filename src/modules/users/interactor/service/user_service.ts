import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export abstract class UserService {
    public abstract create(createUserDto: CreateUserDto): any;

    public abstract findAll(): any;

    public abstract findOne(id: number): any;

    public abstract update(id: number, updateUserDto: UpdateUserDto): any;

    public abstract remove(id: number): any;
}