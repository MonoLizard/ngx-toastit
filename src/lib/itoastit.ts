import { Observable } from 'rxjs';
import { ToastitAlign } from './toastit-align';
import { ToastitType } from './toastit-type';

export interface IToastit {
    align?: ToastitAlign;
    enterAnimation?: any;
    id?: number;
    leaveAnimation?: any;
    message?: string;
    parent?: string | Element | null;
    timeout?: number;
    title: string;
    type?: ToastitType;
    observable?: Observable<any>;
}
