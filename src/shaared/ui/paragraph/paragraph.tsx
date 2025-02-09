//NATIVE
import { Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import { ParagraphProps } from './model/paragraph.model';
//STYLES
import style from './styles/style';

const Paragraph = ({ size, contentType, children, textTransform, ...props }: ParagraphProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Text style={[s[size], s[contentType], textTransform && s[textTransform]]} {...props}>
			{children}
		</Text>
	);
};

export default Paragraph;
