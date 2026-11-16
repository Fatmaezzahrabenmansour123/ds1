import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelService } from './travel.service.js';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  create(@Body() createTravelDto: CreateTravelDto) {
    return "Planifier un nouveau voyage ici";
  }

  @Get()
  findAll() {
    for(let i = 1; i <= this.travelService.trips.length+1; i++){
      return this.travelService.trips[i];
  
    }}

  @Get(':id')
  findOne(@Param('id') id: number) {
     for(let i = 0; i <= this.travelService.trips.length; i++){
      if(this.travelService.trips[i].id==id)
      {return this.travelService.trips;}
      
    }}
  }

  

