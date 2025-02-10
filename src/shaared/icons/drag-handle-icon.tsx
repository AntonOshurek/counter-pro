//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';

const DragHandleIcon = ({ width, height, color }: IconProps) => {
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
			<Path d='M160-380v-66.67h640V-380H160Zm0-133.33V-580h640v66.67H160Z' />
		</Svg>
	);
};

export default DragHandleIcon;
