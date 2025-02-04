//NATIVE
import { View, Text, Switch } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//TYPES
import type { ISwitcherProps } from './model/switcher.model';
//STYLES
import style from './styles/style';

const Switcher = <T,>({ onChange, value, isChecked, placeholder }: ISwitcherProps<T>) => {
	const theme = useThemeResolver();
  const styles = style(theme);

	return (
		<View style={styles.switcher}>
			<Text>
				{placeholder} - current theme is {theme}
			</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={isChecked ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={() => onChange(value)}
				value={isChecked}
			/>
		</View>
	);
};

export default Switcher;
