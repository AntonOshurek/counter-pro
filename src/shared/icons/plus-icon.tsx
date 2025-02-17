//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../hooks/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const plusIcon = (props: IconProps) => {
	return (
		<Svg {...props} viewBox='0 -960 960 960'>
			<Path d='M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z' />
		</Svg>
	);
};

export default withIconWrapper(plusIcon);
