//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';

const CollapseIcon = ({ width, height, color }: IconProps): JSX.Element => {
	const computedWidth = width ? `${width}px` : '40px';
	const computedHeight = height ? `${height}px` : '40px';
	const computedColor = color ? color : '#000000';

	return (
		<Svg
			height={computedHeight}
			viewBox='0 -960 960 960'
			width={computedWidth}
			fill={computedColor}
		>
			<Path d='m294-62.5-71.33-70.83L480-390.67l257.33 257.34L666-62.5l-186-186-186 186ZM480-570 222.67-827.33 294-898.5l186 186 186-186 71.33 71.17L480-570Z' />
		</Svg>
	);
};

export default CollapseIcon;
