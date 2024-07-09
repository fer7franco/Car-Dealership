import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/Update-car.dto';

@Controller('cars')
// los PIPES nos ayuda a validar la informacion que recibimos en nuestro backend
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  //propiedad de mi clase
  //private cars = ['Toyota', 'Honda', 'Jeep'];--> me lo llevo para mi servicio o DB

  @Get()
  getAllCars() {
    return this.carsService.findAll();
    //return this.carsService.findAll();
  }
  @Get(':id')
  // el ParseUUIDPipe verifica que el codigo que el uuid que llegue sea verdadero
  // parse personalizado: (nueva instancia)new ParseUUIDPipe({version o el mensaje de error que queremos ver})
  getCarByid(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  // crear una nueva entrada
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  //actualizar un dato (Id)
  // (:id) exige que este segmento venga el URL
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  // eliminar un carro
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
