//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../hooks/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const HomeIcon = (props: IconProps) => {
	return (
		<Svg {...props} viewBox='0 -960 960 960'>
			<Path d='M230.26-190.26h148.46v-242.56h202.56v242.56h148.46v-374.61L480-753.08 230.26-564.96v374.7ZM180-140v-450l300-225.77L780-590v450H531.03v-242.57H428.97V-140H180Zm300-331.87Z' />
		</Svg>
	);
};

export default withIconWrapper(HomeIcon);
