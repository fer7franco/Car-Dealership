import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
  // quiero exponer mi CarsSevice para que sea utilizado en otros modulos.
  // todos los servicios son providers
})
export class CarsModule {}
