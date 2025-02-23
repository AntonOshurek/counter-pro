//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../HOC/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const MinusIcon = (props: IconProps) => {
	return (
		<Svg {...props} viewBox='0 -960 960 960'>
			<Path d='M170.67-426.67v-106H790v106H170.67Z' />
		</Svg>
	);
};

export default withIconWrapper(MinusIcon);
