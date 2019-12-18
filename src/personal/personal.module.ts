import { Module } from '@nestjs/common';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';
import { PersonalGateway } from './personal.gateway';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService, PersonalGateway]
})
export class PersonalModule {}
