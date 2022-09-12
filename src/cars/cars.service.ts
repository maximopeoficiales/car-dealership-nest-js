import { Injectable } from '@nestjs/common';
import { Car } from './common/interfaces/Car';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: 1,
            name: 'Ter Stegen',
            brand: "Toyota",
        },
        {
            id: 2,
            name: 'Otro Stegen',
            brand: "Stegen",
        },
        {
            id: 3,
            name: 'Susuki',
            brand: "Susuki St",
        },
    ]


    findAll() {
        return this.cars;
    }

    findById(id: number) {
        const car = this.cars.find(car => car.id === id);
        return car;
    }
}
