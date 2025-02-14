//FEATURES
import { useCreateNewCounter } from '../../';
//UI
import CreateButton from '../../../../shared/ui/create-button/create-button';

const CreateNewCounterButton = () => {
  const createNewCounter = useCreateNewCounter();

  return (
    <CreateButton onPress={createNewCounter} hiddenText='Create new counter' />
  )
}

export default CreateNewCounterButton;
