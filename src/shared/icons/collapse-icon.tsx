//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';
import useThemeResolver from '../hooks/useThemeResolver';
import { colors } from '../styles';

const CollapseIcon = ({ width, height, color }: IconProps): JSX.Element => {
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
			<Path d="M480-520 289.33-329.33l-72-71.34L480-663.33l262.67 262.66-72 71.34L480-520Z" />
		</Svg>
	);
};

export default CollapseIcon;
