import { ReactNode } from 'react';
//NATIVE
import { StyleProp, ViewStyle } from 'react-native';

interface OpenCounterScreenProps {
	counterId: string;
	children: ReactNode;
	additionalClass?: StyleProp<ViewStyle>;
}

export { OpenCounterScreenProps };
