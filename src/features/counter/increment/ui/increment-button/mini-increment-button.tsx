//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useIncrement from '../../increment';
//MODEL
import type { IncrementButtonProps } from './model/mini-increment-button.model';
//UI
import { MiniIncBtn } from '@shared/ui/';

const MiniIncrementButton = ({ counterId }: IncrementButtonProps) => {
	const increment = useIncrement({ counterId });

	return (
		<Pressable onPress={increment}>
			<MiniIncBtn incAction={increment} />
		</Pressable>
	);
};

export default MiniIncrementButton;
