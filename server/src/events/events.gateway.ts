import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse, } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server } from 'socket.io';

const IntervalTime = 1000;

@WebSocketGateway()
export class EventsGateway {

    @WebSocketServer()
    server: Server;

    private interval;

    @SubscribeMessage('events')
    onEvent(client: Client, data: any): Observable<WsResponse<number>> {
        return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }

    startSendingData() {
        console.log('startSendingData')
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.server.emit('data', { data: Math.random() });
                console.log('sending', { data: Math.random() })
            }, IntervalTime);
        }
    }

    stopSendingData() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

}
