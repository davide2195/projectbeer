import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { SimpleBeer } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'beer-card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './beer-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BeerCardComponent {
  public beer = input.required<SimpleBeer>();



  // logEffect = effect( () => {
  //   console.log('BeerCard: ', this.beer());
  // })
}
