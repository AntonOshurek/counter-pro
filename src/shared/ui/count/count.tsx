//NATIVE
import { View, Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { CountProps } from './model/count.model';
//STYLES
import style from './styles/style';

const Count = ({ count }: CountProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<View style={s.Count}>
			<Text style={s.countText}>{count}</Text>
		</View>
	);
};

export default Count;
