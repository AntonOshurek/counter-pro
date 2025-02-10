//MODEL
import { CountersGroup } from '../../model/group.model';
//TYPES
import type { RenderItemParams } from 'react-native-draggable-flatlist';

interface GroupCardProps extends RenderItemParams<CountersGroup> {}

export { GroupCardProps };
