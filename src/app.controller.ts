import { Controller, Get, Param } from '@nestjs/common';
import {  PersonalService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly personalService: PersonalService) {}

  @Get()
  getHello(): any {
    return this.personalService.findAll()
  }


}
