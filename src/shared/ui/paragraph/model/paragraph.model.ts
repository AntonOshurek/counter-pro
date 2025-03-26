import { ReactNode } from 'react';

interface ParagraphProps {
	contentType: 'primary' | 'secondary' | 'tertiary' | 'alwaysBlack' | 'alwaysWhite';
	size: 'large' | 'medium' | 'small' | 'xSmall';
	children: ReactNode;
	textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
}

export { ParagraphProps };
