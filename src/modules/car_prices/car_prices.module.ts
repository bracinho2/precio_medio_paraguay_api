import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { CarPricesController } from './car_prices.controller';
import { CarPricesService } from './car_prices.service';

@Module({
  controllers: [CarPricesController],
  providers: [CarPricesService],
  imports: [CommonModule],
  exports: [CarPricesModule]
})
export class CarPricesModule { }
