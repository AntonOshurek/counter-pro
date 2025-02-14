//MODEL
import type { UseIncrementProps } from './model/increment.model';

const useIncrement = ({ counterId }: UseIncrementProps) => {
	return () => {
		console.log(`increment feature for counter - ${counterId}`);
	};
};

export default useIncrement;
