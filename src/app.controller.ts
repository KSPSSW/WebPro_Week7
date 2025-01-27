import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
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

  @Get('test-query')
  testQuery(@Req() req, @Query('celsius') celsius: number, @Query('type') type: string, ) {
    return {celsius: celsius,type: type,};
  }

  @Get('test-params/:celsius')
  testParam(@Req() req, @Param('celsius') celsius: number) {
    return {celsius,};
  }

  @Post('test-body')
  testBody(@Req() req, @Body() body, @Body('celsius') celsius : number) {
    return { celsius };
  }

  @Get('convert')
  convert(@Query('celsius') celsius: string){
    return {
      celsius: parseFloat(celsius), 
      fahrenheit: (parseFloat(celsius) * 9.0) / 5 + 32,
    };
  }

  @Post('convert')
  convertByPost(@Body('celsius') celsius: number){
    return {
      celsius: celsius, 
      fahrenheit: (celsius * 9.0) / 5 + 32,
    };
  }

  @Get('convert/:celsius')
  convertParam(@Param('celsius') celsius: string){
    return {
      celsius: parseFloat(celsius), 
      fahrenheit: (parseFloat(celsius) * 9.0) / 5 + 32,
    };
  }
}
