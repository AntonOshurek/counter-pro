import React, { ReactNode } from 'react';
//NATIVE
import { StyleProp, ViewStyle } from 'react-native';
//MODEL
import type { Group } from '../../../model/group.model';

interface GroupCardProps {
	group: Group;
	controls?: ReactNode;
	children?: ReactNode;
	OpenGroupScreenOpacity: React.ComponentType<{
		groupId: string;
		children: ReactNode;
		additionalStyles?: StyleProp<ViewStyle>;
	}>;
}

export { GroupCardProps };
