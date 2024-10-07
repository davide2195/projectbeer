import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'beer-list-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './beer-list-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeerListSkeletonComponent { }
