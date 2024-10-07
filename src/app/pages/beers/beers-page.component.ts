import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import BeerListComponent from "../../beers/components/beer-list/beer-list.component";
import { BeerListSkeletonComponent } from "./ui/beer-list-skeleton/beer-list-skeleton.component";
import { BeersService } from '../../beers/services/beers.service';
import { SimpleBeer } from '../../beers/interfaces';
import { url } from 'node:inspector';

@Component({
  selector: 'beers-page',
  standalone: true,
  imports: [BeerListComponent, BeerListSkeletonComponent],
  templateUrl: './beers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BeersPageComponent implements OnInit{

  private beerService = inject(BeersService);
  public beer = signal<SimpleBeer[]>([]);

  ngOnInit(): void {
    this.getBeer();

  }

  public getBeer(){
    this.beerService.getCocktails('')
    .subscribe( (beers) => {
      this.beer.set(beers);
    });
  }
 }
