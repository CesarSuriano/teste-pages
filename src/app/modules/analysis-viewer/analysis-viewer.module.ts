import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeModule } from 'angular-gauge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { CardLabelModule } from 'src/app/shared/components/card-label/card-label.module';
import { AnalysisDetailsCardComponent } from './components/analysis-details-card/analysis-details-card.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentsCardComponent } from './components/documents-card/documents-card.component';
import { AnalysisViewerComponent } from './analysis-viewer.component';
import { AnalysisViewerRoutingModule } from './analysis-viewer-routing.module';

@NgModule({
  declarations: [
    AnalysisViewerComponent,
    AnalysisDetailsCardComponent,
    HeaderComponent,
    DocumentsCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    CardModule,
    DialogModule,
    [GaugeModule.forRoot()],
    CardLabelModule,
    AnalysisViewerRoutingModule,
  ]
})
export class AnalysisViewerModule { }
