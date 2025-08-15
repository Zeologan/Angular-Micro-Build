import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { OutputComponent } from './child-to-parent/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    StructuralDirectivesComponent,
    ParentToChildComponent,
    ChildComponent,
    ChildToParentComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
