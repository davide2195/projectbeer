import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SimpleBeer } from '../../beers/interfaces';
import { BeersService } from '../../beers/services/beers.service';
import BeerCardComponent from '../../beers/components/beer-card/beer-card.component';

@Component({
  selector: 'whisky-page',
  standalone: true,
  imports: [BeerCardComponent],
  templateUrl: './whisky.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WhiskyComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private beerService = inject(BeersService);
  public beer = signal<SimpleBeer[]>([]);

  ngOnInit(): void {
    this.title.setTitle('Whisky');
    this.meta.updateTag({ name: 'description', content: 'Whisky' });
    this.meta.updateTag({ name: 'og:title', content: 'My Whisky' });
    this.getBeer();

  }

  public getBeer(){
    this.beerService.getCocktails('Scotch')
    .subscribe( (beers) => {
      this.beer.set(beers);
    });
  }



 }
