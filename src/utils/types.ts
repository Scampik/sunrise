export type SideObject = {[key in Params]: number};
export type Params = 'top' | 'right' | 'bottom' | 'left';
export type ClientRectObject = SideObject;