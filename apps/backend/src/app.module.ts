import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './car.controller';
import { CarService } from './car.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, CarsController],
  providers: [AppService, CarService, PrismaService],
})
export class AppModule {}
