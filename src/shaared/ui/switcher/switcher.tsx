//NATIVE
import { View, Text, Switch } from 'react-native';
//TYPES
import type { ISwitcherProps } from './model/switcher.model';

const Switcher = <T,>({ onChange, value, isChecked, placeholder }: ISwitcherProps<T>) => {
	return (
		<View>
			<Text>{placeholder}</Text>
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
