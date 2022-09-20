import { IsString, MinLength } from 'class-validator';
import { Brand } from '../entities/brand.entity';

export class CreateBrandDto
  implements Omit<Brand, 'id' | 'createdAt' | 'updatedAt'>
{
  @IsString()
  @MinLength(1)
  readonly name: string;
}
