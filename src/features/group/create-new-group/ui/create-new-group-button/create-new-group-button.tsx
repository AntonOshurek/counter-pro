//FEATURES
import useCreateNewGroup from '../../create-new-group';
//UI
import CreateButton from '../../../../../shared/ui/create-button/create-button';

const CreateNewGroupButton = () => {
	const createNewGroup = useCreateNewGroup();

	return (
		<CreateButton onPress={createNewGroup} hiddenText='Create new group of counters' />
	);
};

export default CreateNewGroupButton;
