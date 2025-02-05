//NATIVE
import { View, Text, Switch } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//TYPES
import type { ISwitcherProps } from './model/switcher.model';
//STYLES
import style from './styles/style';
import { colors } from '../../styles';

const Switcher = <T,>({ onChange, value, isChecked, label }: ISwitcherProps<T>) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<View style={s.switcher}>
			<Text style={s.label}>
				{label}
			</Text>
			<Switch
				trackColor={{ false: colors[theme].mainSurfacePrimary, true: colors[theme].basicGreen }}
				thumbColor={isChecked ? colors[theme].alwaysWhite : colors[theme].alwaysWhite}
				ios_backgroundColor='#3e3e3e'
				onValueChange={() => onChange(value)}
				value={isChecked}
			/>
		</View>
	);
};

export default Switcher;
