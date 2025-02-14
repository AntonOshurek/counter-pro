import { ReactNode } from 'react';

interface ParagraphProps {
	contentType: 'primary' | 'secondary' | 'tertiary';
	size: 'large' | 'medium' | 'small';
	children: ReactNode;
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
}

export { ParagraphProps };
