import { ReactNode } from 'react';
//ENTITIES
import type { Group } from '../../../../../entities/group';

interface OpenGroupScreenProps {
	group: Group;
	children: ReactNode;
}

export { OpenGroupScreenProps };
