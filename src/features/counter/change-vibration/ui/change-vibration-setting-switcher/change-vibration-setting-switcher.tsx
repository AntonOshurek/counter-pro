//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//MODEL
// import { ChangeVibrationSettingSwitcherProps } from './model/change-vibration-setting-switcher.model';
//FEATURES
import useChangeVibration from '../../change-vibration';
import { Paragraph, Switcher } from '@shared/ui';
import { APP_TEXT } from '@shared/text-content/text-content';
import { SelectorGetVibrationOnClick } from '@entities/counter';

const ChangeVibrationSettingSwitcher = () => {
	const vibration = useAppSelector(SelectorGetVibrationOnClick());
	const changeVibration = useChangeVibration();

	const onSwitcherHandler = (value: boolean) => {
		changeVibration({ vibration: !value });
	};

	return (
		<View>
			<Paragraph size='medium' contentType='secondary' textTransform='capitalize'>
				{APP_TEXT.themeSwitcherAlias}
			</Paragraph>

			<Switcher<boolean>
				value={vibration}
				isChecked={vibration}
				onChange={onSwitcherHandler}
				label={'Vibration on Inc or Dec'}
			/>
		</View>
	);
};

export default ChangeVibrationSettingSwitcher;
