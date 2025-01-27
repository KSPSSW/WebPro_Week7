import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [],
  controllers: [AppController, TemperatureController],
  providers: [AppService, TemperatureService],
  exports: [],
})
export class AppModule {}
