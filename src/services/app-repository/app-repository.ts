//STATE
import { appInitialState } from '@entities/app/store/state/app-state';
//TYPES
import type { IAppState } from '@entities/app/';
//ABSTRACT
import AbstractRepository from '@services/app-repository/abstract-repository';

export class AppRepository extends AbstractRepository<IAppState> {
	constructor() {
		super(appInitialState, 'app-store');
	}
}

const appRepository = new AppRepository();

export default appRepository;
