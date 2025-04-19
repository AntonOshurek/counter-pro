//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '../../../../../shared/store';
//FEATURES
import useChangePinned from '../../change-pinned';
//ENTITIES
import { SelectorGetIsPinnedGroup } from '../../../../../entities/group';
//MODEL
import { ChangePinnedGroupButtonProps } from './model/change-pinned-group-button.model';
//UI
import ChangePinnedButton from '@shared/ui/change-pinned-button/change-pinned-button';
//STYLES
import { style } from './styles/style';

const ChangePinnedGroupButton = ({ groupId }: ChangePinnedGroupButtonProps) => {
	const changePinned = useChangePinned({ groupId: groupId });
	const isPinned = useAppSelector(SelectorGetIsPinnedGroup(groupId));

	const onChange = () => {
		const change = !isPinned;
		changePinned(change);
	};

	return (
		<View style={style.changePinnedGroupButton}>
			<ChangePinnedButton onReset={onChange} isActive={isPinned} />
		</View>
	);
};

export default ChangePinnedGroupButton;
