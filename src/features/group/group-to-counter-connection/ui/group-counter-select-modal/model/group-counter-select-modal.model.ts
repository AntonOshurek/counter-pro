//TYPES
import type { checkboxModalItems } from '../../../../../../shared/ui/checkbox-modal/model/checlbox-modal.model';

interface GroupCounterSelectModalProps {
	groupId: string;
	counterToGroupConnection: () => {
		addGroupToCounter: (counterId: string, groupId: string) => void;
		deleteGroupFromCounter: (counterId: string, groupId: string) => void;
	};
	counters: checkboxModalItems[];
}

export { GroupCounterSelectModalProps };
