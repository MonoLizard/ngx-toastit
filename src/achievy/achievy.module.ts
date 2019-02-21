import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AchievyComponent } from './achievy.component';
import { AchievyService } from './achievy.service';

@NgModule({
    bootstrap: [AchievyComponent],
    declarations: [AchievyComponent],
    imports: [BrowserAnimationsModule],
    providers: [AchievyService],
})
export class AchievyModule{}
