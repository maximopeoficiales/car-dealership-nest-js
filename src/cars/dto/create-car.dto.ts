import { IsString } from 'class-validator';
import { Car } from '../interfaces/car.interface';

export class CreateCarDto implements Omit<Car, 'id'> {
  @IsString()
  readonly model: string;

  @IsString()
  readonly brand: string;
}
