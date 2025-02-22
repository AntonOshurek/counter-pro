//NATIVE
import { TouchableOpacity } from 'react-native';
//MODEL
import type { ResetButtonProps } from './reset-counter-button.model';
import { ResetIcon } from '../../icons';

const ResetButton = ({ onReset }: ResetButtonProps) => {
	return (
		<TouchableOpacity onPress={onReset}>
			<ResetIcon />
		</TouchableOpacity>
	);
};

export default ResetButton;
