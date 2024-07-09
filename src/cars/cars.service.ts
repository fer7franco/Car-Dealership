import {
  BadRequestException,
  //   BadRequestException,
  Injectable,
  NotFoundException,
  //   NotFoundException,
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dto';
import { v4 as uuid } from 'uuid';
import { create } from 'domain';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  //   fillCarsWithSeedData(CARS_SEED: Car[]) {
  //     throw new Error('Method not implemented.');
  //   }
  private cars = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
  create(createCarDto: CreateCarDto) {
    //me estoy creando un nuevo carro que tenga la propiedad UUID
    const car: Car = {
      id: uuid(),
      //...CreateCarDto, asi traigo las propiedades de mi car
      model: createCarDto.model,
      brand: createCarDto.brand,
    };
    this.cars.push(car);
    return car;
  }
  // siempreme debe mandar el ID para saber cual carro quiero actualizar
  update(id: string, updateCarDto: UpdateCarDto) {
    // el let es cuando se va cambiar algo
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);
    // el map itera todo los elementos de mi arreglo y me devuelve la nueva posicion
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
  delete(id: string) {
    // verificacion si el carro existe
    const car = this.findOneById(id);
    // eliminarlo de nuestro arreglo
    this.cars = this.cars.filter((car) => car.id !== id);
  }
  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
