import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { BlueprintLandingPageComponent } from '../blueprint/blueprint-landing-page/blueprint-landing-page.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [ExploreContainerComponent, BlueprintLandingPageComponent],
    exports: [ExploreContainerComponent, BlueprintLandingPageComponent]
})
export class ExploreContainerComponentModule {}
