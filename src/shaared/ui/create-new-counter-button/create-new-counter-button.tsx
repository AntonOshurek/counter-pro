//NATIVE
import { Pressable, Text } from 'react-native';
//STYLES
import style from './style/style';

import Svg, { Path } from 'react-native-svg';

const CreateNewCounterButton = (): JSX.Element => {
	return (
		<Pressable style={style.createNewCounterButton}>
			<Text>
				<Svg height='40px' viewBox='0 -960 960 960' width='40px' fill='#000000'>
					<Path d='M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z' />
				</Svg>
			</Text>
		</Pressable>
	);
};

export default CreateNewCounterButton;
