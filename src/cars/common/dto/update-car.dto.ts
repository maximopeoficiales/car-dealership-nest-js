import { IsString } from 'class-validator';
import { Car } from '../interfaces/car.interface';

export class UpdateCarDto implements Omit<Car, 'id'> {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;
}
