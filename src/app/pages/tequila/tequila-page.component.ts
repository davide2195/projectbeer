import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SimpleBeer } from '../../beers/interfaces';
import { BeersService } from '../../beers/services/beers.service';
import BeerCardComponent from '../../beers/components/beer-card/beer-card.component';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [BeerCardComponent],
  templateUrl: './tequila-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private beerService = inject(BeersService);
  public beer = signal<SimpleBeer[]>([]);

  ngOnInit(): void {
    this.title.setTitle('Tequila Page');
    this.meta.updateTag({ name: 'description', content: 'Tequila Page' });
    this.meta.updateTag({ name: 'og:title', content: 'My Tequila Page' });
    this.getBeer();

  }

  public getBeer(){
    this.beerService.getCocktails('tequila')
    .subscribe( (beers) => {
      this.beer.set(beers);
    });
  }
 }
