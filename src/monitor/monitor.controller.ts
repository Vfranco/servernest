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

    @Get('contratistas/:uid')
    miscontratistas(@Param() param) :string{
        this.serverGateway.server.emit('iocontratistas', { uid : param.uid });
        return this.monitor.response();
    }

    @Get('visitantes/:uid')
    misvisitantes(@Param() param) :string{
        this.serverGateway.server.emit('iovisitantes', { uid : param.uid });
        return this.monitor.response();
    }
}
