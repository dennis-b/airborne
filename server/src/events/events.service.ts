import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events.gateway';


enum Commands {
    FLY = 'fly',
    LAND = 'land'
}

@Injectable()
export class EventsService {

    constructor(private eventsGateway: EventsGateway) {

    }

    alive(): string {
        return 'alive';
    }

    handleCmd({ cmd }) {
        console.log({ cmd })
        Commands.FLY === cmd ? this.eventsGateway.startSendingData() : this.eventsGateway.stopSendingData();
        return { ok: true };
    }
}
