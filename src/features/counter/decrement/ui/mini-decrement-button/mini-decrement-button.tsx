//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useIncrement from '../../decrement';
//MODEL
import { MiniIncrementButtonProps } from './mini-decrement-button.model';
//UI
import MiniDecBtn from '../../../../../shared/ui/mini-dec-btn/mini-dec-btn';

const MiniIncrementButton = ({ counterId }: MiniIncrementButtonProps) => {
	const increment = useIncrement({ counterId });

	return (
		<Pressable onPress={increment}>
			<MiniDecBtn incAction={increment} />
		</Pressable>
	);
};

export default MiniIncrementButton;
