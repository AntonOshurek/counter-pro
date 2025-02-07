//NATIVE
import { Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import { IParagraphProps } from './model/paragraph.model';
//STYLES
import style from './styles/style';

const Paragraph = ({ size, contentType, children, ...props }: IParagraphProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Text style={[s[size], s[contentType]]} {...props}>
			{children}
		</Text>
	);
};

export default Paragraph;
