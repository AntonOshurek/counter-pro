//NATIVE
import { TouchableOpacity } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { ChangePinnedButtonProps } from './model/change-pinned-button.model';
//ICONS
import KeepIcon from '../../icons/keep-icon';
import KeepOffIcon from '../../icons/keep-off-icon';
//STYLES
import { colors } from '../../styles';

const ChangePinnedButton = ({ onReset, isActive }: ChangePinnedButtonProps) => {
	const theme = useThemeResolver();

	return (
		<TouchableOpacity onPress={onReset}>
			{isActive ? (
				<KeepIcon width={30} height={30} color={colors[theme].textPrimary} />
			) : (
				<KeepOffIcon width={30} height={30} color={colors[theme].textTertiary} />
			)}
		</TouchableOpacity>
	);
};

export default ChangePinnedButton;
