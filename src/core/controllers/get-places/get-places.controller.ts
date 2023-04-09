import { Controller, Get, Put, Post, Req, Res, Param, Body, NotFoundException } from '@nestjs/common';
import { GetPlacesService } from '../../services/get-places/get-places.service';
import { ReserveDto } from './reserve.dto';
import { map } from 'rxjs';

@Controller('getPlaces')
export class GetPlacesController {
    constructor(private readonly getPlacesService: GetPlacesService) { }
    @Get(':id')
    async findPlacesForEvent(@Param('id') id: number) {
        const event = await this.getPlacesService.findEvent(id);
        if (!event) {
            throw new NotFoundException('This Event doesn\'t exist');
        }
        return event;
    }
    /*@Put('reservePlaces')
    async reservePlaces(@Body() innerObj: ReserveDto): {
        
    }*/
}