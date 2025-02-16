import React, { ReactNode } from 'react';
//MODEL
import type { Group } from '../../';

interface GroupCardProps {
	group: Group;
	OpenGroupScreenOpacity: React.ComponentType<{ group: Group; children: ReactNode }>;
}

export { GroupCardProps };
