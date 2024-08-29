import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Gif } from '../../interfaces/gifs.interface';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, LazyImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input()
  masonry!: Masonry;

  @Input()
  gif!: Gif;

  elem!: Element;

  constructor() {}

  ngAfterViewInit(): void {
    this.elem = document.querySelector('.gallery')!;
    imagesLoaded(this.elem, () => {
      this.masonry = new Masonry(this.elem, {
        itemSelector: '.gallery-item',
        percentPosition: true,
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gif'] && !changes['gif'].firstChange) {
      this.updateMasonryLayout();
    }
  }

  ngOnDestroy(): void {
    this.masonry.destroy!();
  }

  private updateMasonryLayout(): void {
    imagesLoaded(this.elem, () => {
      this.masonry.layout!();
    });
  }
}
