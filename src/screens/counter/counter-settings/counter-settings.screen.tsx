//NATIVE
import { useRoute } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
//NAVIGATION
import type { CounterScreenRouteProp } from '@shared/types/navigation';
//STORE
import { useAppSelector } from '@shared/store';
import { SelectorGetCounter } from '@entities/counter';
//WIDGETS
import {
	CounterSettingsWidget,
	CounterCriticalOptionsWidget,
	CounterAdditionalInfoWidget
} from '@widgets/counter';
//LAYOUTS
import { ScreenLayout } from '@shared/layouts/';
//STYLES
import style from './styles/style';

const CounterSettingsScreen = () => {
	const route = useRoute<CounterScreenRouteProp>();
	const { counterId } = route.params || {};

	const counter = useAppSelector(SelectorGetCounter(counterId));

	return (
		<ScreenLayout additionalClass={style.counterSettingsScreen} withScroll={true}>
			<View style={style.settingsGroup}>
				<CounterCriticalOptionsWidget counter={counter} />
			</View>

			<View style={style.settingsGroup}>
				<CounterAdditionalInfoWidget counter={counter} />
				<CounterSettingsWidget counter={counter} />
			</View>
		</ScreenLayout>
	);
};

export default CounterSettingsScreen;
