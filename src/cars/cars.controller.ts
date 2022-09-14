import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from './common/dto/create-car.dto';
import { UpdateCarDto } from './common/dto/update-car.dto';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) { }
  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.findById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carService.updateById(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    this.carService.deleteById(id);
  }
}
