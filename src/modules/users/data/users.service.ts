import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from '../interactor/dto/create-user.dto';
import { UpdateUserDto } from '../interactor/dto/update-user.dto';
import { UserService } from '../interactor/service/user_service';



@Injectable()
export class UsersService implements UserService {
  constructor(private readonly prisma: PrismaClient) { }
  async create(data: CreateUserDto): Promise<User> {
    try {
      return await this.prisma.user.create({ data: data });
    } catch (e) {

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException('email already exists!', HttpStatus.BAD_REQUEST);
      }
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.user.findUnique({ where: { 'id': id } });
    } catch (error) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({ where: { 'id': id }, data: UpdateUserDto });
    } catch (e) {

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException('user updated successfully', HttpStatus.BAD_REQUEST);
      }
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { 'id': id } });
    } catch (error) {
      throw new HttpException('user deleted successfully', HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    try {
      return this.prisma.user.findMany();
    } catch (error) {
      throw new HttpException('an error occurred!', HttpStatus.BAD_REQUEST);
    }
  }
}
