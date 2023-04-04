import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GetPlacesService } from '../../services/get-places/get-places.service';
import { GetPlacesController } from '../../controllers/get-places/get-places.controller';
import { PlacesStatesProviders } from '../../database/placesStates/providers/placesStates.providers';


@Module({
    imports: [DatabaseModule],
    providers: [GetPlacesService, ...PlacesStatesProviders],
    controllers: [GetPlacesController],
})
export class GetPlacesModule {}
