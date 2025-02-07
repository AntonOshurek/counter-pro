import { ReactNode } from 'react';

interface IParagraphProps {
  contentType: 'primary' | 'secondary' | 'tertiary',
  size: 'large' | 'medium' | 'small';
  children: ReactNode;
}

export {IParagraphProps};
