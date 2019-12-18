import { Controller, Get, Param } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { MonitorGateway } from './monitor.gateway';

@Controller('monitor')
export class MonitorController {
    constructor(private monitor: MonitorService, private serverGateway: MonitorGateway) { }

    @Get()
    index():string {
        return this.monitor.response();
    }

    @Get('personal/:uid')
    mipersonal(@Param() param): string {
        this.serverGateway.server.emit('iopersonal', {uid :param.uid});
        return this.monitor.response();
    }
}
