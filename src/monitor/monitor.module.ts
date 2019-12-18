import { Module } from '@nestjs/common';
import { MonitorController } from './monitor.controller';
import { MonitorService } from './monitor.service';
import { MonitorGateway } from './monitor.gateway';

@Module({
  controllers: [MonitorController],
  providers: [MonitorService, MonitorGateway]
})
export class MonitorModule {}
