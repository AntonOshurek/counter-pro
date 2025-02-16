//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useIncrement from '../../increment';
//MODEL
import { IncrementButtonProps } from './mini-increment-button.model';
//UI
import MiniIncBtn from '../../../../../shared/ui/mini-inc-btn/mini-inc-btn';

const MiniIncrementButton = ({ counterId }: IncrementButtonProps) => {
	const increment = useIncrement({ counterId });

	return (
		<Pressable onPress={increment}>
			<MiniIncBtn incAction={increment} />
		</Pressable>
	);
};

export default MiniIncrementButton;
