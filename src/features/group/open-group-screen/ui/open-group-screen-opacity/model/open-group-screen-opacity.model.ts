import { ReactNode } from 'react';
//NATIVE
import { StyleProp, ViewStyle } from 'react-native';

interface OpenGroupScreenProps {
	groupId: string;
	children: ReactNode;
	additionalStyles?: StyleProp<ViewStyle>;
}

export { OpenGroupScreenProps };
