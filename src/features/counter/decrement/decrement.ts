//MODEL
import type { UseDecrementProps } from './model/decrement.model';

const useDecrement = ({ counterId }: UseDecrementProps) => {
	return () => {
		console.log(`decrement feature for counter - ${counterId}`);
	};
};

export default useDecrement;
