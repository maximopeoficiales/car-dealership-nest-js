import { IsString } from 'class-validator';
import { Car } from '../interfaces/car.interface';

export class CreateCarDto implements Omit<Car, 'id'> {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;
}
