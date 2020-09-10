import { IPosition } from './iposition';

export type Orientation = ['N', 'S', 'E', 'W'];
export type Command = ['L', 'R', 'M'];

export interface IRover {
  id?: number;
  origin: IPosition;
  commandInput: string;
  position?: IPosition;
}
