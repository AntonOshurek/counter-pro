//STATE
import { appInitialState } from '../state/app-state';
//TYPES
import type { IAppState } from '../model/app-state.model';
//ABSTRACT
import AbstractRepository from '@shared/abstract/abstract-repository';

export class AppRepository extends AbstractRepository<IAppState> {
	constructor() {
		super(appInitialState, 'app-store');
	}
}

const appRepository = new AppRepository();

export default appRepository;
