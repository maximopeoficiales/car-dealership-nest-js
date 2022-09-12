import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
    constructor(private readonly carService: CarsService) { }
    @Get()
    getAllCars() {
        return this.carService.findAll()
    }

    @Get(":id")
    getCarById(@Param("id", ParseIntPipe) id: number) {
        console.log(id);

        return this.carService.findById(id);
    }
}
