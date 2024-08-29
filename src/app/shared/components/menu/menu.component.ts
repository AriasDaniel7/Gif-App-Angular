import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { GifsService } from '../../../gifs/services/gifs.service';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatListModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @Input()
  public title!: string;

  @Input()
  public drawer!: MatDrawer;

  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
    this.drawer.toggle();
  }

  ngOnInit(): void {
    if (!this.title) throw new Error('Title is required');
    if (!this.drawer) throw new Error('Drawer is required');
  }
}
