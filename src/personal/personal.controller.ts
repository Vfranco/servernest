import { Controller, Get, Req, Param, Post } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalGateway } from './personal.gateway';
import { request } from 'express';

@Controller('personal')
export class PersonalController {

    constructor(private personal: PersonalService, private personalSocket :PersonalGateway) { }

    @Get('test')
    getPersonalTest(){
        return 'here';
    }

    @Get('test/:id')
    getHelloPersonal(@Param() request): any {
        return this.personal.response();
    }

    @Post('otra/:uid')
    getPersonalId(@Param() request): any {
        return `${request.uid} here`;
    }

    @Get('websocket/:uid')
    sendEventPersonal(@Param() param):any{
        this.personalSocket.server.emit('iopersonal', {uid : param.uid});
        this.personal.response();
    }
}
