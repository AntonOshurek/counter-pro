//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';

const ExpandIcon = ({ width, height, color }: IconProps): JSX.Element => {
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
			<Path d='M480-59.33 217.33-322l71.84-71.33L480-203.67l191.17-189.66 71.5 71.33L480-59.33Zm-191.33-506.5L217.33-638 480-900.67 742.67-638 672-565.83l-192-190.5-191.33 190.5Z' />
		</Svg>
	);
};

export default ExpandIcon;
