import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './personal/personal.module';
import { ContratistasModule } from './contratistas/contratistas.module';
import { VisitantesModule } from './visitantes/visitantes.module';

@Module({
  imports: [PersonalModule, ContratistasModule, VisitantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
