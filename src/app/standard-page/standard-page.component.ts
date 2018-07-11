import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standard-page',
 /* templateUrl: './standard-page.component.html', */
 template: ` template:       
<ng-template #estimateTemplate >
    <div> Approximately 5 lessons ...</div>
</ng-template>
<ng-template #template2 >
    <div> A second template ...</div>
</ng-template>
<ng-container 
   *ngTemplateOutlet="id===1 ? template2: estimateTemplate">
</ng-container>`,

  styleUrls: ['./standard-page.component.scss']
})
export class StandardPageComponent implements OnInit {
  id: number;
  templateToUse: string;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  /* Using Observables to get route params works well when the component persists on the same screen without having to be destroyed and recreated each time. If you are certain your component will be destroyed before a new parameter is updated you can use the snapshot api option documented https://angular.io/guide/router#!#snapshot.
  */
  ngOnInit() {
    /* note the radix of 10 passed to parseInt as the second parameter basically indicates thast you are parsin a base 10 number.  BTW, this is the default value for the radix parm */
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));

    switch(this.id) { 
    case 1: { 
      this.templateToUse="homeTemplate"; 
      break; 
   } 
   case 2: { 
      this.templateToUse="homeTemplate";  
      break; 
   } 
   default: { 
      this.templateToUse="homeTemplate";  
      break; 
   } 
  }

  }

   ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
  
}
