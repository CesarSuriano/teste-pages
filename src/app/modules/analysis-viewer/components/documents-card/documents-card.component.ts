import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { RuleItemResultEnum } from 'src/app/shared/enums/rule-item-result.enum';
import { Document } from 'src/app/shared/models/document';
import { Rule } from 'src/app/shared/models/rule';

@Component({
  selector: 'app-documents-card',
  templateUrl: './documents-card.component.html',
  styleUrls: ['./documents-card.component.scss']
})
export class DocumentsCardComponent {
  imagePaths = [
    "assets/images/joao1-min.jpg",
    "assets/images/joao2-min.jpg",
    "assets/images/joao3-min.jpg",
    "assets/images/joao4-min.jpg",
    "assets/images/joao5-min.jpg",
    "assets/images/joao6-min.jpg",
    "assets/images/joao7-min.jpg",
    "assets/images/joao8-min.jpg",
    "assets/images/joao9-min.jpg",
    "assets/images/joao10-min.jpg",
    "assets/images/joao11-min.jpg",
    "assets/images/grande-amor-min.jpg",
    "assets/images/fim-min.jpg",
  ];
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  currentIndex: number = 0;
  intervalSubscription!: Subscription;

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy() {
    this.stopInterval();
  }

  startInterval() {
    this.intervalSubscription = interval(5000).subscribe(() => {
      this.nextImage();
    });
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
}
