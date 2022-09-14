import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Brand 1',
      createdAt: new Date().getTime(),
    },
    {
      id: uuid(),
      name: 'Brand 2',
      createdAt: new Date().getTime(),
    },
  ];

  findIndexById(id: string) {
    const index = this.brands.findIndex((car) => car.id === id);
    const findBrand = this.brands[index];
    if (!findBrand)
      throw new NotFoundException(`Brand with id ${id} not found`);
    return { findBrand, index };
  }
  create(createBrandDto: CreateBrandDto) {
    const newId = uuid();
    const brand: Brand = {
      id: newId,
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const { findBrand } = this.findIndexById(id);
    return findBrand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const { findBrand, index } = this.findIndexById(id);
    const updateCar: Brand = {
      ...findBrand,
      ...updateBrandDto,
      updatedAt: new Date().getTime(),
    };
    this.brands[index] = updateCar;
    return updateCar;
  }

  remove(id: string) {
    const { findBrand } = this.findIndexById(id);
    this.brands = this.brands.filter((e) => e.id !== findBrand.id);
  }
}
