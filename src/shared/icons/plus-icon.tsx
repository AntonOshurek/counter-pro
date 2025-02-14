//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';

const plusIcon = ({ width, height, color }: IconProps): JSX.Element => {
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
			<Path d='M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z' />
		</Svg>
	);
};

export default plusIcon;
