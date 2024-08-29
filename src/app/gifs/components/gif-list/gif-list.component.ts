import { GifsService } from './../../services/gifs.service';
import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.scss',
})
export class GifListComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
