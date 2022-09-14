import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandService: BrandsService,
    private readonly carService: CarsService
  ) { }
  populateDB() {
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);
    this.carService.fillCarsWithSeedData(CARS_SEED);
    return `Seed Generated`;
  }
}
