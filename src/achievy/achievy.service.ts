import { ApplicationRef, ComponentFactoryResolver, ComponentRef,
         EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { AchievyAlign } from './achievy-align';
import { AchievyType } from './achievy-type';
import { AchievyComponent } from './achievy.component';
import { fadeIn, fadeOut } from './animations';
import { IAchievy } from './iachievy';

@Injectable({providedIn: 'root'})
export class AchievyService{
    private list: {[key: number]: [ComponentRef<AchievyComponent>, Element, string]};
    private uid: number;
    public constructor(private factoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef,
                       private injector: Injector){
                            this.list = {};
                            this.uid = 0;
                       }

    public add(options: IAchievy){
        options = {
            ...options, align: options.align || AchievyAlign.TR, enterAnimation: options.enterAnimation || fadeIn,
            id: this.uid, leaveAnimation: options.leaveAnimation || fadeOut, timeout: options.timeout || 5,
            type: options.type || AchievyType.Info,
        };

        const componentRef = this.factoryResolver.resolveComponentFactory(AchievyComponent).create(this.injector);
        componentRef.instance.options = options;
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        let parent: Element | null | undefined = document.body;
        if(typeof options.parent === 'string'){
            parent = document.querySelector(options.parent);
            if(!parent) throw new Error(`No html element found with this selector: '${options.parent}'`);
        }else if(options.parent) parent = options.parent;
        parent!.appendChild(domElem);

        const anchor: string = this.getAlignAnchor(options.align!);
        if(anchor === 'top')
            (domElem.firstChild as HTMLElement).style.top = this.getNextPositionInParent(parent, anchor);
        else if(anchor === 'bottom')
            (domElem.firstChild as HTMLElement).style.bottom = this.getNextPositionInParent(parent, anchor);
        else
            (domElem.firstChild as HTMLElement).style.top = 'calc(50% - ' +
                this.getNextPositionInParent(parent, anchor) + ')';

        this.list[this.uid] = [componentRef, parent, anchor];
        this.uid++;
    }

    public remove(id: number){
        const componentRef: ComponentRef<AchievyComponent> = this.list[id][0];
        const parent: Element = this.list[id][1];
        const anchor = this.list[id][2];
        delete this.list[id];
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        this.relayout(parent, anchor);
    }

    public removeAll(parent?: string | Element | null){
        if(typeof parent === 'string') parent = document.querySelector(parent);
        for(const id of Object.keys(this.list))
            if((parent && this.list[id as unknown as number][1] === parent) || !parent){
                this.appRef.detachView(this.list[id as unknown as number][0].hostView);
                this.list[id as unknown as number][0].destroy();
                delete this.list[id as unknown as number];
            }
    }

    private getNextPositionInParent(parent: Element, anchor: string): string{
        let pos: number = anchor === 'center' ? 0 : 10;
        for(const id of Object.keys(this.list)){
            const value = this.list[id as unknown as number];
            if(value[1] === parent && value[2] === anchor) pos += value[0].instance.viewHeight + 5;
        }
        return pos + 'px';
    }

    private relayout(parent: Element, anchor: string){
        let pos: number = anchor === 'center' ? 0 : 10;
        for(const id of Object.keys(this.list)){
            const value = this.list[id as unknown as number];
            if(value[1] === parent && value[2] === anchor){
                const componentRef = value[0];
                const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
                if(anchor === 'top') (domElement.firstChild as HTMLElement).style.top = pos + 'px';
                else if(anchor === 'bottom') (domElement.firstChild as HTMLElement).style.bottom = pos + 'px';
                else (domElement.firstChild as HTMLElement).style.top = 'calc(50% - ' + pos + 'px)';
                pos += componentRef.instance.viewHeight + 5;
            }
        }
    }

    private getAlignAnchor(alignment: AchievyAlign): string{
        return alignment.split('-')[0];
    }
}
