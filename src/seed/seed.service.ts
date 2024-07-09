import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './cars.seed';
import { BRANS_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

// este servicio trabajara como injeccion de dependencias para otros servicios
@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    //BRANS_SEED
    //CARS_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRANS_SEED);

    return 'SEED executed';
  }
}
