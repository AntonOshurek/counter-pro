import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface OpenCounterScreenProps {
	counterId: string;
	children: ReactNode;
  additionalClass?: StyleProp<ViewStyle>;
}

export { OpenCounterScreenProps };
