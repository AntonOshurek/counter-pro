//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useIncrement from '../../decrement';
//MODEL
import type { MiniIncrementButtonProps } from './model/mini-decrement-button.model';
//UI
import { MiniDecBtn } from '@shared/ui/';

const MiniIncrementButton = ({ counterId }: MiniIncrementButtonProps) => {
	const increment = useIncrement({ counterId });

	return (
		<Pressable onPress={increment}>
			<MiniDecBtn incAction={increment} />
		</Pressable>
	);
};

export default MiniIncrementButton;
