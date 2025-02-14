//LIBS
import Svg, { Path } from 'react-native-svg';
//TYPES
import type { IconProps } from './model/icon.model';

const MinusIcon = ({ width, height, color }: IconProps): JSX.Element => {
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
			<Path d='M170.67-426.67v-106H790v106H170.67Z' />
		</Svg>
	);
};

export default MinusIcon;
