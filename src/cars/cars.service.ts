import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './common/dto/create-car.dto';
import { Car } from './common/interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { UpdateCarDto } from './common/dto/update-car.dto';
@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            name: 'Ter Stegen',
            brand: "Toyota",
        },
        {
            id: uuid(),
            name: 'Otro Stegen',
            brand: "Stegen",
        },
        {
            id: uuid(),
            name: 'Susuki',
            brand: "Susuki St",
        },
    ]

    findIndexById(id: string) {
        const carIndex = this.cars.findIndex(car => car.id === id);
        const findCard = this.cars[carIndex];
        if (!findCard) throw new NotFoundException(`Car with id ${id} not found`);
        return { findCard, carIndex }
    }
    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const { findCard } = this.findIndexById(id);
        return findCard;
    }
    updateById(id: string, data: UpdateCarDto) {
        const { findCard, carIndex } = this.findIndexById(id);
        const updateCar = { ...findCard, ...data };
        this.cars[carIndex] = updateCar;
        return updateCar;
    }
    deleteById(id: string) {
        const { findCard } = this.findIndexById(id);
        this.cars = this.cars.filter(e => e.id !== findCard.id);
        return true;
    }
    create(newCar: CreateCarDto) {
        const newId = uuid();
        const car: Car = { ...newCar, id: newId }
        this.cars.push(car);
        return car;
    }
}
