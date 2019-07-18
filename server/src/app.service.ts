import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    alive(): any {
        return { alive: true };
    }
}
