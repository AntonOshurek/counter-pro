//NATIVE
import { TouchableOpacity, View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import useChangePinned from '../../change-pinned';
//ENTITIES
import { SelectorGetIsPinnedGroup } from '@entities/group';
//UI
import { Paragraph } from '@shared/ui/';
//VARIABLES
import { groupText } from '@shared/text-content/text-content';
//MODEL
import type { ChangePinnedSettingProps } from './model/change-pinned-setting.model';
//UI
import ChangePinnedButton from '@shared/ui/change-pinned-button/change-pinned-button';
//STYLES
import { style } from './styles/style';

const ChangePinnedSetting = ({ groupId }: ChangePinnedSettingProps) => {
	const changePinned = useChangePinned({ groupId });
	const isPinned = useAppSelector(SelectorGetIsPinnedGroup(groupId));

	const onChange = () => {
		const change = !isPinned;
		changePinned(change);
	};

	return (
		<View style={style.changePinnedSetting}>
			<TouchableOpacity onPress={onChange}>
				<Paragraph contentType={isPinned ? 'primary' : 'secondary'} size={'medium'}>
					{isPinned ? groupText.unpinGroupButtonLabel : groupText.pinGroupButtonLabel}
				</Paragraph>
			</TouchableOpacity>

			<ChangePinnedButton onReset={onChange} isActive={isPinned} />
		</View>
	);
};

export default ChangePinnedSetting;
