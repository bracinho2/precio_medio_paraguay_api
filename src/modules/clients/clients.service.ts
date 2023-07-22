import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/service/prisma.service';

@Injectable()
export class ClientsService {

  constructor(private readonly prisma: PrismaService) { }

  create(createClientDto: Prisma.ClientCreateInput) {


    return this.prisma.client.create({
      data: createClientDto
    });


  }


  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateClientDto: Prisma.ClientUpdateInput) {
    return this.prisma.client.update({
      data: updateClientDto,
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({
      where: {
        id: id
      }
    });
  }
}
