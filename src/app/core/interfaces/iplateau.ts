import { IGrid } from './igrid';
import { IRover } from './irover';

export interface IPlateau {
    grid?: IGrid;
    rovers?: IRover[];
}
