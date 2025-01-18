import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface ScreenLayoutProps {
	children: ReactNode;
	additionalClass?: StyleProp<ViewStyle>;
}

export { ScreenLayoutProps };
