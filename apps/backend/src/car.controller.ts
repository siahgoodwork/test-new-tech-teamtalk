import { Controller, Get } from '@nestjs/common';
import { Car } from '@prisma/client';
import { CarService } from './car.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarService) {}
  @Get()
  async getAllCars(): Promise<Car[]> {
    return this.carService.cars();
  }
}
