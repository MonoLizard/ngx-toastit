import { ApplicationRef, ComponentFactoryResolver, ComponentRef,
         EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { AchievySkin } from './achievy-skin';
import { AchievyType } from './achievy-type';
import { AchievyComponent } from './achievy.component';
import { IAchievy } from './iachievy';

@Injectable({providedIn: 'root'})
export class AchievyService{
    private list: {[key: number]: ComponentRef<AchievyComponent>};
    private uid: number;
    public constructor(private factoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef,
                       private injector: Injector){
                            this.list = {};
                            this.uid = 0;
                       }

    public add(options: IAchievy){
        options = {...options, id: this.uid, skin: options.skin || AchievySkin.Custom, timeout: options.timeout || 3,
                   type: options.type || AchievyType.Success};

        const componentRef = this.factoryResolver.resolveComponentFactory(AchievyComponent).create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        componentRef.instance.options = options;

        if(!options.parent) document.body.appendChild(domElem);
        else if(typeof options.parent === 'string'){
            const parent = document.querySelector(options.parent);
            if(parent) parent.appendChild(domElem);
            else throw new Error(`No html element found with this selector: '${options.parent}'`);
        }else options.parent.appendChild(domElem);

        this.list[this.uid] = componentRef;
        this.uid++;
    }

    public remove(id: number){
        this.appRef.detachView(this.list[id].hostView);
        this.list[id].destroy();
        delete this.list[id];
    }

    public removeAll(){
        for(const id of Object.keys(this.list)){
            this.appRef.detachView(this.list[id as unknown as number].hostView);
            this.list[id as unknown as number].destroy();
        }
    }
}
