//FEATURES
import { useDecrement } from '../../';
//MODEL
import type { DecrementButtonProps } from './decrement-button.model';
//UI
import MinusButton from '../../../../shared/ui/minus-button/minus-button';

const DecrementButton = ({ counterId }: DecrementButtonProps) => {
	const decrement = useDecrement({ counterId });

	return <MinusButton onPress={decrement} hiddenText={'Minus'} />;
};

export default DecrementButton;
