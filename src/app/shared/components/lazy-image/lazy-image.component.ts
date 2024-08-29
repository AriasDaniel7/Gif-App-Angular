import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss',
})
export class LazyImageComponent implements OnInit, OnChanges {
  @Input()
  public url!: string;
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url || !this.alt) {
      throw new Error('Url and Alt properties are required');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['url'] && !changes['url'].firstChange) {
      this.hasLoaded = false;
    }
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
