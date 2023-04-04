import { Injectable, Inject  } from '@nestjs/common';
import { PlacesStates } from '../../database/placesStates/models/placesStates.entity';
import { PLACES_STATES_REPOSITORY } from '../../constants';
//import { PlacesStatesProviders } from '../../database/placesStates/providers/placesStates.providers';

@Injectable()
export class GetPlacesService {
    constructor(@Inject(PLACES_STATES_REPOSITORY) private readonly placesStatesRepository: typeof PlacesStates) { }
    async findEvent(id): Promise<PlacesStates[]> {
        return await this.placesStatesRepository.findAll({
        	where: { event_id: id }
    	});
    }
    /*async isEmpty(): Promise<PlacesStates[]> {
        return await this.placesStatesRepository.findAll({
        	where: { event_id: id }
    	});
    }*/
}