import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDefault(): string {
    return 'Default';
  }

  @Get('hello')
  getHello(): string {
    return '<html><body><h1>Hello Buu</h1><body><html>';
  }

  @Delete('world')
  getWorld(): string {
    return '<html><body><h1>Buu World</h1><body><html>';
  }
}
