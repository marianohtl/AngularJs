import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardSecondComponent } from '../card-second/card-second.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardSecondComponent,
    CardButtonComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports:[
    CardComponent,
    CardSecondComponent,
    CardButtonComponent
  ]
})
export class CardPrincipalModule { }
