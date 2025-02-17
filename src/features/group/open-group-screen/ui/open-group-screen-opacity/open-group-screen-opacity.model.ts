import { ReactNode } from 'react';
//ENTITIES
import type { Group } from '../../../../../entities/group';
import { StyleProp, ViewStyle } from 'react-native';

interface OpenGroupScreenProps {
	group: Group;
	children: ReactNode;
	additionalStyles?: StyleProp<ViewStyle>;
}

export { OpenGroupScreenProps };
