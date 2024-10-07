import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BeersService } from '../../beers/services/beers.service';
import { SimpleBeer } from '../../beers/interfaces';
import BeerCardComponent from '../../beers/components/beer-card/beer-card.component';

@Component({
  selector: 'vodka-page',
  standalone: true,
  imports: [
    CommonModule,
    BeerCardComponent
  ],
  templateUrl: './vodka.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private beerService = inject(BeersService);
  public beer = signal<SimpleBeer[]>([]);



  ngOnInit(): void {
    this.title.setTitle('Vodka');
    this.meta.updateTag({ name: 'description', content: 'Vodka' });
    this.meta.updateTag({ name: 'og:title', content: 'My Vodka' });
    this.getBeer();

  }

  public getBeer(){
    this.beerService.getCocktails('vodka')
    .subscribe( (beers) => {
      this.beer.set(beers);
    });
  }

 }
