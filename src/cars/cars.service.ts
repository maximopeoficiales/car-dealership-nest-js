import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto } from './dto/update-car.dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   name: 'Ter Stegen',
    //   brand: 'Toyota',
    // }
  ];
  fillCars(cars: Car[]) {
    this.cars = cars;
  }
  findIndexById(id: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    const findCard = this.cars[carIndex];
    if (!findCard) throw new NotFoundException(`Car with id ${id} not found`);
    return { findCard, carIndex };
  }

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const { findCard } = this.findIndexById(id);
    return findCard;
  }

  updateById(id: string, updateCarDto: UpdateCarDto) {
    const { findCard, carIndex } = this.findIndexById(id);
    const updateCar: Car = { ...findCard, ...updateCarDto, id: findCard.id };
    this.cars[carIndex] = updateCar;
    return updateCar;
  }

  deleteById(id: string) {
    const { findCard } = this.findIndexById(id);
    this.cars = this.cars.filter((e) => e.id !== findCard.id);
  }

  create(createCarDto: CreateCarDto) {
    const newId = uuid();
    const car: Car = { ...createCarDto, id: newId };
    this.cars.push(car);
    return car;
  }
}
