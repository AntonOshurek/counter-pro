//STORE
import { RootState } from '../../../../shared/store';
//MODEL
import { Counter } from '../../model/counter.model';

interface ISelectorGetCounter {
	(counterId: string): (state: RootState) => Counter | undefined;
}

export { ISelectorGetCounter };
