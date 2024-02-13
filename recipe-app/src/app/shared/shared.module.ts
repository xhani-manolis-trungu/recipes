import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponent } from './components/shared.component';
import { SharedService } from './services/shared.service';
import { SharedUtilityService } from './utility/shared-utility.service';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule],
  providers: [SharedService, SharedUtilityService],
  exports: [SharedComponent],
})
export class SharedModule {}
