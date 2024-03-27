import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisViewerComponent } from './analysis-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: AnalysisViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisViewerRoutingModule { }
