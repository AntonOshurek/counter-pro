import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface SettingsGroupWrapperProps {
	children: ReactNode;
	additionalClass?: StyleProp<ViewStyle>;
}

export { SettingsGroupWrapperProps };
