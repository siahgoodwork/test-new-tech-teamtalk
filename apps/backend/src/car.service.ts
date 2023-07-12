import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Car } from '@prisma/client';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async cars(): Promise<Car[]> {
    return this.prisma.car.findMany({
      take: 10,
    });
  }
}
