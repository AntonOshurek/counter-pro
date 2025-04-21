//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import useChangeVibration from '../../change-vibration';
//ENTITIES
import { SelectorGetVibrationOnClick } from '@entities/counter';
//UI
import { Switcher } from '@shared/ui';
//TEXT
import { COUNTER_TEXT } from '@shared/text-content/text-content';

const ChangeVibrationSettingSwitcher = () => {
	const vibration = useAppSelector(SelectorGetVibrationOnClick());
	const changeVibration = useChangeVibration();

	const onSwitcherHandler = (value: boolean) => {
		changeVibration({ vibration: !value });
	};

	return (
		<View>
			<Switcher<boolean>
				value={vibration}
				isChecked={vibration}
				onChange={onSwitcherHandler}
				label={COUNTER_TEXT.vibrationSwitcher}
			/>
		</View>
	);
};

export default ChangeVibrationSettingSwitcher;
