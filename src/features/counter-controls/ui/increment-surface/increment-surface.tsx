import { ReactNode } from 'react';
//NATIVE
import { TouchableOpacity } from 'react-native';
//STYLES
import style from './style';

interface Props {
	count: number;
	increment: () => void;
	children: ReactNode;
}

const incrementSurface = ({ increment, children }: Props) => {
	return (
		<TouchableOpacity
			onPress={increment}
			style={style.incrementSurface}
			activeOpacity={1}
		>
			{children}
		</TouchableOpacity>
	);
};

export default incrementSurface;
