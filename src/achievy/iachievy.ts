import { Observable } from 'rxjs';
import { AchievySkin } from './achievy-skin';
import { AchievyType } from './achievy-type';

export interface IAchievy{
    id?: number;
    message?: string;
    parent?: string | Element | null;
    skin?: AchievySkin;
    timeout?: number;
    title: string;
    type?: AchievyType;
    observable?: Observable<any>;
}
