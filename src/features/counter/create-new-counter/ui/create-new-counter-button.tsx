//FEATURES
import useCreateNewCounter from '../create-new-counter';
//UI
import { CreateButton } from '@shared/ui/';

const CreateNewCounterButton = () => {
	const createNewCounter = useCreateNewCounter();

	return <CreateButton onPress={createNewCounter} hiddenText='Create new counter' />;
};

export default CreateNewCounterButton;
