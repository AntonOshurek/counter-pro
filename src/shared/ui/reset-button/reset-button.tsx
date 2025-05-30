//NATIVE
import { TouchableOpacity } from 'react-native';
//MODEL
import type { ResetButtonProps } from './model/reset-button.model';
//ICONS
import { ResetIcon } from '../../icons';

const ResetButton = ({ onReset }: ResetButtonProps) => {
	return (
		<TouchableOpacity onPress={onReset}>
			<ResetIcon />
		</TouchableOpacity>
	);
};

export default ResetButton;
