import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

const NEST_PORT = process.env.PORT || 5000;
const CLIENT_FILES = join(__dirname, '..', '..', 'client', 'build');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(express.static(CLIENT_FILES));
    app.setGlobalPrefix('api')
    await app.listen(NEST_PORT);
}

bootstrap();
