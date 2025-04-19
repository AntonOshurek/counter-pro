//FEATURES
import useDecrement from '../../decrement';
//MODEL
import type { MiniDecrementButtonProps } from './model/primary-decrement-button.model';
//UI
import { MinusButton } from '@shared/ui/';

const PrimaryDecrementButton = ({ counterId }: MiniDecrementButtonProps) => {
	const decrement = useDecrement({ counterId });

	return <MinusButton onPress={decrement} hiddenText={'Minus'} />;
};

export default PrimaryDecrementButton;
