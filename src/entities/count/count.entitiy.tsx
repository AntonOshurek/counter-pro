//NATIVE
import { View, Text } from 'react-native';
//TYPES
import { CountProps } from './model/count.model';
//STYLES
import style from './styles/style';

const Count = ({ count }: CountProps): JSX.Element => {
	return (
		<View style={style.Count}>
			<Text style={style.countText}>{count}</Text>
		</View>
	);
};

export default Count;
