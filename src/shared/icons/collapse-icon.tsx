//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../HOC/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const CollapseIcon = (props: IconProps) => {
	return (
		<Svg {...props} viewBox='0 -960 960 960'>
			<Path d='M480-520 289.33-329.33l-72-71.34L480-663.33l262.67 262.66-72 71.34L480-520Z' />
		</Svg>
	);
};

export default withIconWrapper(CollapseIcon);
