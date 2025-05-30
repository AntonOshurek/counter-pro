//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../HOC/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const ResetIcon = (props: IconProps) => {
	return (
		<Svg {...props} viewBox='0 -960 960 960'>
			<Path d='M439-102q-128.33-14.67-213.67-111.17Q140-309.67 140-439.33q0-71 28.17-135.67 28.16-64.67 80.16-112.33L308-627.67q-40.33 34.34-62.17 84Q224-494 224-439.33q0 95.66 60.67 166.5Q345.33-202 439-186v84Zm84 0v-84q94.33-15.67 154.5-86.5t60.17-166.83q0-106-71.67-181.5t-177.33-75.5h-12l46.66 46.66L464-589.33 315.33-738 464-886.67 523.33-827l-46.66 46.67h12Q628.33-780.33 725-680q96.67 100.33 96.67 240.67 0 129.66-85.34 226.16Q651-116.67 523-102Z' />
		</Svg>
	);
};

export default withIconWrapper(ResetIcon);
