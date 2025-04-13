import { checkboxModalItems } from '../../../../../../shared/ui/checkbox-modal/model/checlbox-modal.model';

interface GroupCounterSelectModalProps {
	groupId: string;
	useCounterConnection: (args: { counterId: string }) => {
		addConnection: (groupId: string) => void;
		deleteConnection: (groupId: string) => void;
	};
	counters: checkboxModalItems[];
}

export { GroupCounterSelectModalProps };
