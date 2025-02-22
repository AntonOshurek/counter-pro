//NATIVE
import { View, Text, Switch } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { SwitcherProps } from './model/switcher.model';
//STYLES
import style from './styles/style';
import { colors } from '../../styles';

const Switcher = <T,>({ onChange, value, isChecked, label }: SwitcherProps<T>) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<View style={s.switcher}>
			<Text style={s.label}>{label}</Text>
			<Switch
				trackColor={{ false: colors[theme].switchBg, true: colors[theme].controlActive }}
				thumbColor={isChecked ? colors[theme].alwaysWhite : colors[theme].alwaysWhite}
				ios_backgroundColor={colors[theme].switchBg}
				onValueChange={() => onChange(value)}
				value={isChecked}
			/>
		</View>
	);
};

export default Switcher;
