import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { AddCompanyService } from '../../services/add-company/add-company.service';
import { AddCompanyController } from '../../controllers/add-company/add-company.controller';
import { SellersProviders } from '../../database/sellers/providers/sellers.providers';

@Module({
    imports: [DatabaseModule],
    providers: [AddCompanyService, ...SellersProviders],
    controllers: [AddCompanyController],
})
export class AddCompanyModule {}