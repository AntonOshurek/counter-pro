//NATIVE
import { TouchableOpacity, View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import useChangePinned from '../../change-pinned';
//ENTITIES
import { SelectorGetIsPinned } from '../../../../../entities/counter';
//UI
import { Paragraph, ChangePinnedButton } from '@shared/ui/';
//VARIABLES
import { COUNTER_TEXT } from '@shared/text-content/text-content';
//MODEL
import { ChangePinnedSettingProps } from './model/change-pinned-setting.model';
//STYLES
import { style } from './styles/style';

const ChangePinnedSetting = ({ counterId }: ChangePinnedSettingProps) => {
	const changePinned = useChangePinned({ counterId: counterId });
	const isPinned = useAppSelector(SelectorGetIsPinned(counterId));

	const onChange = () => {
		const change = !isPinned;
		changePinned(change);
	};

	return (
		<View style={style.changePinnedSetting}>
			<TouchableOpacity onPress={onChange}>
				<Paragraph contentType={isPinned ? 'primary' : 'secondary'} size={'medium'}>
					{isPinned
						? COUNTER_TEXT.unpinCounterButtonLabel
						: COUNTER_TEXT.pinCounterButtonLabel}
				</Paragraph>
			</TouchableOpacity>

			<ChangePinnedButton onReset={onChange} isActive={isPinned} />
		</View>
	);
};

export default ChangePinnedSetting;
