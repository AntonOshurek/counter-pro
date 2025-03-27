import React, { ReactNode } from 'react';
//MODEL
import type { Group } from '../../';
import { StyleProp, ViewStyle } from 'react-native';

interface GroupCardProps {
	group: Group;
	children?: ReactNode;
	OpenGroupScreenOpacity: React.ComponentType<{
		groupId: string;
		children: ReactNode;
		additionalStyles?: StyleProp<ViewStyle>;
	}>;
}

export { GroupCardProps };
