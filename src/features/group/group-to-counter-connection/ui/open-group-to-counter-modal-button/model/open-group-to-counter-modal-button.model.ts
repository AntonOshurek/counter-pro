//TYPES
import type { checkboxModalItems } from '@shared/ui/checkbox-modal/model/checlbox-modal.model';

interface OpenGroupToCounterModalButtonProps {
	groupId: string;
	counterToGroupConnection: () => {
		addGroupToCounter: (counterId: string, groupId: string) => void;
		deleteGroupFromCounter: (counterId: string, groupId: string) => void;
	};
	counters: checkboxModalItems[];
}

export { OpenGroupToCounterModalButtonProps };
