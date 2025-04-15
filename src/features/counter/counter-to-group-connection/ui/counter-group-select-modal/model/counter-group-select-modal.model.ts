//TYPES
import type { checkboxModalItems } from '../../../../../../shared/ui/checkbox-modal/model/checlbox-modal.model';
import { Counter } from '../../../../../../entities/counter';

interface CounterGroupSelectModalProps {
	counter: Counter;
	groupToCounterConnection: () => {
		addCounterToGroup: (counterId: string, groupId: string) => void;
		deleteCounterFromGroup: (counterId: string, groupId: string) => void;
	};
	groups: checkboxModalItems[];
}

export { CounterGroupSelectModalProps };
