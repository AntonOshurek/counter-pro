//NATIVE
import { View } from 'react-native';
//HOOKS
import useThemeResolver from '../../shared/hooks/useThemeResolver';
//MODEL
import type { NotFoundScreenProps } from './model/not-found.model';
//UI
import Paragraph from '../../shared/ui/paragraph/paragraph';
//STYLES
import { style } from './styles/style';

const NotFoundScreen = ({ notFoundText }: NotFoundScreenProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<View style={s.counterNotFound}>
			<Paragraph contentType={'primary'} size={'large'}>
				{notFoundText}
			</Paragraph>
		</View>
	);
};

export default NotFoundScreen;
