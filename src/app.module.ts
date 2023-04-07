import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { GetPlacesModule } from './core/modules/get-places/get-places.module';
import { AddCompanyModule } from './core/modules/add-company/add-company.module';
import { CheckCompanyMiddleware } from './core/middleware/checkCompany.middlware';

@Module({
  imports: [DatabaseModule, GetPlacesModule, AddCompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckCompanyMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}