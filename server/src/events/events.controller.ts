import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { EventsService } from './events.service';

@Controller('/events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {
    }

    @Get()
    health(): string {
        return this.eventsService.alive();
    }

    @Post()
    onCmd(@Body() cmd: { cmd: string }) {
        return this.eventsService.handleCmd(cmd);
    }
}
