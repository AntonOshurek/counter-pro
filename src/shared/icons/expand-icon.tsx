//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';
import useThemeResolver from '../hooks/useThemeResolver';
import { colors } from '../styles';

const ExpandIcon = ({ width, height, color }: IconProps): JSX.Element => {
	const theme = useThemeResolver();

	const computedWidth = width ? `${width}px` : '40px';
	const computedHeight = height ? `${height}px` : '40px';
	const computedColor = color ? color : colors[theme].textSecondary;

	return (
		<Svg
			height={computedHeight}
			viewBox='0 -960 960 960'
			width={computedWidth}
			fill={computedColor}
		>
			<Path d='M480-320.67 217.33-583.33l72-71.34L480-464l190.67-190.67 72 71.34L480-320.67Z' />
		</Svg>
	);
};

export default ExpandIcon;
