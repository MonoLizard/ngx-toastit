import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastitComponent } from './toastit.component';
import { ToastitService } from './toastit.service';

@NgModule({
    bootstrap: [ToastitComponent],
    declarations: [ToastitComponent],
    imports: [BrowserAnimationsModule],
    providers: [ToastitService],
})
export class ToastitModule {}
