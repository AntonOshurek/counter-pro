import React from 'react';
//NATIVE
import { SvgProps } from 'react-native-svg';
//MODEL
import { IconProps } from '../icons/model/icon.model';
//HOOKS
import useThemeResolver from '../hooks/useThemeResolver';
//STYLES
import { colors } from '../styles';

const withIconWrapper = <P extends SvgProps>(WrappedIcon: React.ComponentType<P>) => {
	return (props: IconProps) => {
		const theme = useThemeResolver();

		const computedWidth = props.width ? `${props.width}px` : '40px';
		const computedHeight = props.height ? `${props.height}px` : '40px';
		const computedColor = props.color ? props.color : colors[theme].textSecondary;

		return (
			<WrappedIcon
				{...(props as P)}
				width={computedWidth}
				height={computedHeight}
				fill={computedColor}
			/>
		);
	};
};

export default withIconWrapper;
