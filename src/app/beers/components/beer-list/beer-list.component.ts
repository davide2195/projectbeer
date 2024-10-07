import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import BeerCardComponent from "../beer-card/beer-card.component";
import { SimpleBeer } from '../../interfaces';

@Component({
  selector: 'beer-list',
  standalone: true,
  imports: [
    CommonModule,
    BeerCardComponent
],
  templateUrl: './beer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BeerListComponent {

  public beers = input.required<SimpleBeer[]>();
}
