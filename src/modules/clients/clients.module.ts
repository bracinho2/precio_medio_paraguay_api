import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [CommonModule]
})
export class ClientsModule { }
