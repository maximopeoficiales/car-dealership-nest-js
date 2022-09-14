import { PartialType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @MinLength(1)
  readonly name: string;

}
