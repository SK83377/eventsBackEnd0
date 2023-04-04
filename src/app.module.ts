import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { GetPlacesModule } from './core/modules/get-places/get-places.module';
import { AddCompanyModule } from './core/modules/add-company/add-company.module';

@Module({
  imports: [DatabaseModule, GetPlacesModule, AddCompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}