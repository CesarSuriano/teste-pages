import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { CreditAnalysis } from 'src/app/shared/models/credit-analysis';

@Component({
  selector: 'app-analysis-details-card',
  templateUrl: './analysis-details-card.component.html',
  styleUrls: ['./analysis-details-card.component.scss']
})
export class AnalysisDetailsCardComponent {
  audioPlayer!: HTMLAudioElement;
  isOpen = false;

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = 'assets/sound.mp3';
  }

  openModal() {
    this.audioPlayer.play();
    this.isOpen = true;
  }

  onCloseClick() {
    this.audioPlayer.pause();
    this.isOpen = false;
  }
}
