import { NgModule } from '@angular/core';
import { AchievyComponent } from './achievy.component';
import { AchievyService } from './achievy.service';

@NgModule({
    bootstrap: [AchievyComponent],
    declarations: [AchievyComponent],
    providers: [AchievyService],
})
export class AchievyModule{}
