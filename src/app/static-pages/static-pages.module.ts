import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';

@NgModule({
 imports: [RouterModule.forChild([
    { path: '', component: Page1Component }
    
  ])],
  declarations: [Page1Component],
})
export class StaticPagesModule { }
