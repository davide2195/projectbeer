import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SimpleBeer } from '../../beers/interfaces';
import { BeersService } from '../../beers/services/beers.service';
import BeerCardComponent from '../../beers/components/beer-card/beer-card.component';

@Component({
  selector: 'app-ron-page',
  standalone: true,
  imports: [BeerCardComponent],
  templateUrl: './ron-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RonPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private beerService = inject(BeersService);
  public beer = signal<SimpleBeer[]>([]);


  ngOnInit(): void {
    this.title.setTitle('Ron');
    this.meta.updateTag({ name: 'description', content: 'Ron' });
    this.meta.updateTag({ name: 'og:title', content: 'My Ron' });
    this.getBeer();

  }

  public getBeer(){
    this.beerService.getCocktails('ron')
    .subscribe( (beers) => {
      this.beer.set(beers);
    });
  }



 }
