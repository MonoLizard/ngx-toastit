import { Observable } from 'rxjs';
import { AchievyAlign } from './achievy-align';
import { AchievyType } from './achievy-type';

export interface IAchievy{
    align?: AchievyAlign;
    enterAnimation?: any;
    id?: number;
    leaveAnimation?: any;
    message?: string;
    parent?: string | Element | null;
    timeout?: number;
    title: string;
    type?: AchievyType;
    observable?: Observable<any>;
}
