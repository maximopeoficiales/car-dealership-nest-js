import { IsOptional, IsString, MinLength } from 'class-validator';
import { Car } from '../interfaces/car.interface';

export class UpdateCarDto implements Omit<Car, 'id'> {
  @IsString()
  @IsOptional()
  @MinLength(5)
  readonly name: string;

  @IsString()
  @MinLength(5)
  @IsOptional()
  readonly brand: string;
}
