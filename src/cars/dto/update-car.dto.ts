import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @IsString()
  @IsOptional()
  @MinLength(5)
  readonly model?: string;

  @IsString()
  @MinLength(5)
  @IsOptional()
  readonly brand?: string;
}
