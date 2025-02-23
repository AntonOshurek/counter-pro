//NATIVE
import { View } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//UI
import Paragraph from '../paragraph/paragraph';
//STYLES
import { style } from './styles/style';
//TEXT
import { counterText } from '../../text-content/text-content';

const CounterNotFound = () => {
	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<View style={s.counterNotFound}>
			<Paragraph contentType={'primary'} size={'large'}>
				{counterText.counterNotFound}
			</Paragraph>
		</View>
	);
};

export default CounterNotFound;
